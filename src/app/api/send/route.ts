// src/app/api/send/route.ts
import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';
import { z } from 'zod';

const resend = new Resend();

const contactFormSchema = z.object({
  name: z.string().min(1, { message: 'الاسم مطلوب' }),
  email: z.string().email({ message: 'صيغة الإيميل غير صحيحة' }),
  message: z.string().min(10, { message: 'الرسالة يجب أن تكون 10 حروف على الأقل' }),
});

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const validation = contactFormSchema.safeParse(body);

    if (!validation.success) {
      return NextResponse.json({ error: validation.error.format() }, { status: 400 });
    }

    const { name, email, message } = validation.data;

    const { data, error } = await resend.emails.send({
      from: 'Portfolio Contact <onboarding@resend.dev>',
      to: ['ahmedsamer9746313@gmail.com'], // تأكد إن ده إيميلك الشخصي
      subject: `رسالة جديدة من البورتفوليو من ${name}`,
      replyTo: email,
      html: `
        <div>
          <h2>رسالة جديدة من: ${name} (${email})</h2>
          <hr>
          <p>${message}</p>
        </div>
      `,
    });

    if (error) {
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    return NextResponse.json({ message: 'تم إرسال الرسالة بنجاح!', data });

  } catch (e) { //  <<<--- هنا التعديل، غيرنا 'error' إلى 'e'
    if (e instanceof Error) {
      return NextResponse.json({ error: e.message }, { status: 500 });
    }
    return NextResponse.json({ error: 'An unknown error occurred' }, { status: 500 });
  }
}