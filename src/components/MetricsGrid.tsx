// src/components/MetricsGrid.tsx

interface Metric {
  value: string;
  label: string;
}

const metrics: Metric[] = [
  { value: "+65%", label: "زيادة في سرعة تحميل الصفحات" },
  { value: "-30%", label: "انخفاض في معدل ترك السلة" },
  { value: "+40%", label: "زيادة في المبيعات الشهرية" },
  { value: ">50%", label: "تقليل وقت إدارة الطلبات" },
];

export default function MetricsGrid() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 my-12">
      {metrics.map((metric) => (
        <div 
          key={metric.label} 
          className="bg-gray-800/50 border border-gray-700 rounded-lg p-6 text-center"
        >
          <p className="text-4xl font-bold text-cyan-400 mb-2">{metric.value}</p>
          <p className="text-sm text-gray-400">{metric.label}</p>
        </div>
      ))}
    </div>
  );
}