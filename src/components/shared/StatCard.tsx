type StatCardProps = {
  title: string;
  value: string;
};

export default function StatCard({
  title,
  value,
}: StatCardProps) {
  return (
    <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm hover:shadow-md transition">
      <div className="flex items-center justify-between">
        <p className="text-gray-500 text-sm font-medium">
          {title}
        </p>

        <div className="w-10 h-10 rounded-xl bg-[#EEF2FF] flex items-center justify-center">
          📊
        </div>
      </div>

      <h2 className="text-4xl font-bold text-gray-800 mt-6">
        {value}
      </h2>

      <p className="text-sm text-green-600 mt-3">
        +12% from last month
      </p>
    </div>
  );
}