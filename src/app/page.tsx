// src/app/page.tsx
"use client";

import Link from 'next/link';
// 1. هنضيف النوع 'Variants' من المكتبة
import { motion, Variants } from 'framer-motion';

export default function HomePage() {
  const mainTitle = "خبير في تحويل الأفكار المعقدة إلى تطبيقات ويب قوية وقابلة للتوسع.";
  
  // 2. هنعرف النوع بصراحة هنا
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
      },
    },
  };

  // 3. وهنعرف النوع بصراحة هنا كمان
  const wordVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring',
        stiffness: 100,
      },
    },
  };

  return (
    <div className="container mx-auto px-4">
      <div className="min-h-[calc(100vh-80px)] flex flex-col items-center justify-center text-center overflow-hidden">
        
        <motion.h1
          className="text-4xl md:text-6xl font-extrabold leading-tight mb-6 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-purple-500"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {mainTitle.split(" ").map((word, index) => (
            <motion.span
              key={index}
              variants={wordVariants}
              className="inline-block"
            >
              {word}&nbsp;
            </motion.span>
          ))}
        </motion.h1>

        <motion.p
          className="max-w-3xl mx-auto text-lg md:text-xl text-gray-300 mb-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1.5 }}
        >
          أنا مطور متخصص في بناء منصات التجارة الإلكترونية الضخمة والأنظمة المخصصة التي تتطلب أداءً عاليًا وأمانًا مطلقًا. مهمتي هي ترجمة رؤية عملك إلى واقع تقني ملموس وناجح.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1.7 }}
        >
          <Link 
            href="/projects/ecommerce-platform" 
            className="bg-cyan-500 text-white font-bold py-3 px-8 rounded-lg text-lg hover:bg-cyan-600 transition-all duration-300 transform hover:scale-105 inline-block"
          >
            شاهد أقوى أعمالي
          </Link>
        </motion.div>

      </div>
    </div>
  );
}