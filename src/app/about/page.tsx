// src/app/about/page.tsx
"use client";

import Link from 'next/link';
import Image from 'next/image';
import { motion, Variants } from 'framer-motion';
import profileImage from './profile.jpg';
import ContactForm from '@/components/ContactForm'; // 1. استدعاء مكون الفورم الجديد

export default function AboutPage() {
  const skills = {
    frontend: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Redux", "WebGL"],
    backend: ["Node.js", "Express.js", "NestJS", "Go (Golang)", "REST APIs", "GraphQL"],
    databases: ["PostgreSQL", "MongoDB", "Redis", "MySQL"],
    devops: ["Docker", "AWS (EC2, S3, RDS)", "Nginx", "CI/CD", "Vercel"],
  };

  const sectionVariants: Variants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };
  
  const gridContainerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const gridItemVariants: Variants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1 }
  };

  return (
    <div className="container mx-auto px-4 py-16 overflow-hidden">
      
      {/* --- Section 1: Introduction --- */}
      <motion.section 
        className="grid md:grid-cols-3 gap-8 items-center mb-24"
        initial="hidden"
        animate="visible"
        variants={sectionVariants}
      >
        <div className="md:col-span-1 flex justify-center">
          <Image
            src={profileImage}
            alt="صورتي الشخصية"
            width={256}
            height={256}
            className="rounded-full w-48 h-48 md:w-64 md:h-64 object-cover ring-4 ring-cyan-500/50 ring-offset-4 ring-offset-gray-900"
            priority
          />
        </div>
        <div className="md:col-span-2">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            مبرمج شغوف بتحويل التحديات إلى حلول تقنية مبتكرة.
          </h1>
          <p className="text-lg text-gray-300 leading-relaxed">
            أنا لا أكتب كودًا فقط، بل أهندس حلولًا. منذ بداية مسيرتي، كان شغفي هو الغوص في أعماق المشاكل المعقدة والخروج منها بأنظمة فعالة، آمنة، وقابلة للتطوير. أؤمن بأن أفضل المنتجات الرقمية هي التي تجمع بين القوة التقنية والبساطة في الاستخدام.
          </p>
        </div>
      </motion.section>

      {/* --- Section 2: My Philosophy --- */}
      <motion.section 
        className="text-center max-w-4xl mx-auto mb-24"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={sectionVariants}
      >
        <h2 className="text-3xl font-bold mb-6">فلسفتي في العمل</h2>
        <p className="text-gray-400 leading-loose">
          التزامي بالجودة يعني كتابة كود نظيف، مُختبَر، وقابل للصيانة. أتعامل مع كل مشروع كأنه مشروعي الخاص، مع تركيز مطلق على أدق التفاصيل لضمان عدم ترك أي أخطاء. طموحي يدفعني دائمًا لتعلم كل ما هو جديد وتطبيقه لتقديم قيمة حقيقية تتجاوز توقعات العميل.
        </p>
      </motion.section>

      {/* --- Section 3: Tech Skills --- */}
      <motion.section 
        className="mb-24"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        variants={sectionVariants}
      >
        <h2 className="text-3xl font-bold text-center mb-12">صندوق أدواتي التقني</h2>
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={gridContainerVariants}
        >
          {Object.entries(skills).map(([category, skillList]) => (
            <motion.div key={category} className="bg-gray-800/50 p-6 rounded-lg" variants={gridItemVariants}>
              <h3 className="text-xl font-bold mb-4 text-cyan-400">
                {category === 'frontend' ? 'الواجهة الأمامية' : category === 'backend' ? 'الواجهة الخلفية' : category === 'databases' ? 'قواعد البيانات' : 'البنية التحتية'}
              </h3>
              <ul className="space-y-2">
                {skillList.map(skill => <li key={skill} className="text-gray-300">{skill}</li>)}
              </ul>
            </motion.div>
          ))}
        </motion.div>
      </motion.section>

       {/* --- Section 4: Call to Action with Contact Form --- */}
       <motion.section 
        className="text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={sectionVariants}
      >
          <h2 className="text-3xl font-bold mb-4">تواصل معي</h2>
          <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
            هل لديك فكرة مشروع أو ترغب في العمل معًا؟ املأ الفورم بالأسفل وسأقوم بالرد عليك في أقرب وقت.
          </p>
          {/* 2. وضع مكون الفورم هنا */}
          <ContactForm />
       </motion.section>
    </div>
  );
}