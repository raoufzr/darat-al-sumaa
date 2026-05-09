
const stats = [
  { label: "إجمالي التقييمات", value: "248" },
  { label: "متوسط التقييم", value: "4.8" },
  { label: "تقييمات هذا الشهر", value: "32" },
  { label: "معدل الرد", value: "91%" },
];

export default function DashboardPage() {
  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-8">لوحة التحكم</h1>

      <div className="grid md:grid-cols-4 gap-4">
        {stats.map((stat) => (
          <div
            key={stat.label}
            className="bg-white rounded-xl border p-5 shadow-sm"
          >
            <p className="text-sm text-gray-500">{stat.label}</p>
            <h2 className="text-3xl font-bold mt-2">{stat.value}</h2>
          </div>
        ))}
      </div>
    </div>
  );
}
