// src/app/projects/ecommerce-platform/page.tsx
"use client"; // Important for animations

import MetricsGrid from "@/components/MetricsGrid";
import { motion, Variants } from 'framer-motion'; // 1. Import motion

export default function ECommercePlatformPage() {
  
  // 2. Define a simple variant for sections
  const sectionVariants: Variants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  return (
    <main className="bg-gray-900 text-white min-h-screen">
      <div className="container mx-auto px-4 py-16 overflow-hidden">
        
        {/* Section 1: The Vision */}
        <motion.section 
          className="text-center max-w-4xl mx-auto"
          initial="hidden"
          animate="visible" // Animate on load
          variants={sectionVariants}
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            تحويل تجربة التجارة الإلكترونية من خسارة إلى أرباح
          </h1>
          <p className="text-lg md:text-xl text-gray-400 mb-12">
            رؤيتي كانت واضحة: تحويل منصة معقدة وبطيئة إلى تجربة تسوق سريعة وممتعة، مع لوحة تحكم ذكية تمكّن فريق العمل من تحقيق أقصى إنتاجية.
          </p>
        </motion.section>

        {/* Section 2: The Results (Metrics Grid) */}
        <motion.section
          initial="hidden"
          whileInView="visible" // Animate on scroll
          viewport={{ once: true, amount: 0.3 }}
          variants={sectionVariants}
        >
          <MetricsGrid />
        </motion.section>

        {/* Section 3: The Story (Challenge, Execution) */}
        <motion.section 
          className="max-w-4xl mx-auto mt-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={sectionVariants}
        >
          <div className="bg-gray-800/30 p-8 rounded-lg">
            <h2 className="text-3xl font-bold mb-6 text-cyan-400">القصة الكاملة</h2>
            
            <h3 className="text-2xl font-semibold mt-8 mb-3">التحدي: نزيف المبيعات اليومي</h3>
            <p className="text-gray-300 leading-relaxed">
              أكبر تحدّي كان إن المنصة بتخسر مبيعات يوميًا بسبب تجربة مستخدم معقدة وبطيئة – العملاء بيزهقوا من بطء تحميل الصفحات، التنقل بين المنتجات صعب، وسلة الشراء غير واضحة. كمان، فريق العمل كان بيعاني من لوحة تحكم غير مرنة ومعقدة، وده خلى تحديث المنتجات ومتابعة الطلبات عملية مرهقة.
            </p>

            <h3 className="text-2xl font-semibold mt-8 mb-3">التنفيذ: من التحليل إلى البناء</h3>
            <p className="text-gray-300 leading-relaxed">
              بدأت بتحليل سلوك المستخدمين، وبعدها طورت واجهة استخدام جديدة خفيفة، استخدمت تقنيات تحسين الأداء (مثل lazy loading والـ caching الذكي)، وصممت لوحة تحكم ذكية وبسيطة. الأهم، اهتميت ببنية تحتية قابلة للتوسّع (Scalable) لتجنب أي انهيار مستقبلي.
            </p>
          </div>
        </motion.section>

      </div>
    </main>
  );
}