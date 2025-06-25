// src/components/ContactForm.tsx
"use client";

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { motion } from 'framer-motion';

const contactFormSchema = z.object({
  name: z.string().min(1, { message: 'الاسم مطلوب' }),
  email: z.string().email({ message: 'صيغة الإيميل غير صحيحة' }),
  message: z.string().min(10, { message: 'الرسالة يجب أن تكون 10 حروف على الأقل' }),
});

type ContactFormInputs = z.infer<typeof contactFormSchema>;

export default function ContactForm() {
  const [submissionStatus, setSubmissionStatus] = useState<{
    message: string;
    type: 'success' | 'error';
  } | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<ContactFormInputs>({
    resolver: zodResolver(contactFormSchema),
  });

  const onSubmit = async (data: ContactFormInputs) => {
    setSubmissionStatus(null);
    try {
      const response = await fetch('/api/send', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setSubmissionStatus({
          message: 'تم إرسال رسالتك بنجاح! سأتواصل معك قريبًا.',
          type: 'success',
        });
        reset();
      } else {
        throw new Error('حدث خطأ أثناء إرسال الرسالة.');
      }
    } catch (error) { // <<<--- رجعناه 'error' تاني
      // --- هنا الحل النهائي ---
      // هنطبع الخطأ في الكونسول عشان نستخدم المتغير
      console.error("Contact form submission error:", error);
      
      setSubmissionStatus({
        message: 'فشل إرسال الرسالة. برجاء المحاولة مرة أخرى.',
        type: 'error',
      });
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 max-w-2xl mx-auto">
      {/* The rest of the form JSX remains exactly the same... */}
      <div className="space-y-2">
        <label htmlFor="name" className="text-sm font-medium text-gray-300">الاسم</label>
        <input id="name" type="text" {...register('name')} className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-md focus:ring-2 focus:ring-cyan-500 focus:outline-none" />
        {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>}
      </div>
      <div className="space-y-2">
        <label htmlFor="email" className="text-sm font-medium text-gray-300">الإيميل</label>
        <input id="email" type="email" {...register('email')} className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-md focus:ring-2 focus:ring-cyan-500 focus:outline-none" />
        {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
      </div>
      <div className="space-y-2">
        <label htmlFor="message" className="text-sm font-medium text-gray-300">الرسالة</label>
        <textarea id="message" rows={5} {...register('message')} className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-md focus:ring-2 focus:ring-cyan-500 focus:outline-none" />
        {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message.message}</p>}
      </div>
      <div className="text-center">
        <button type="submit" disabled={isSubmitting} className="bg-cyan-500 text-white font-bold py-3 px-8 rounded-lg text-lg hover:bg-cyan-600 transition-all duration-300 disabled:bg-gray-600 disabled:cursor-not-allowed">
          {isSubmitting ? 'جاري الإرسال...' : 'إرسال الرسالة'}
        </button>
      </div>
      {submissionStatus && (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className={`mt-4 text-center p-3 rounded-md ${ submissionStatus.type === 'success' ? 'bg-green-800/50 text-green-300' : 'bg-red-800/50 text-red-300' }`}>
          {submissionStatus.message}
        </motion.div>
      )}
    </form>
  );
}