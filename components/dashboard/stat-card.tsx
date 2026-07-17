interface StatCardProps {
  title: string;
  value: string;
  icon: React.ReactNode;
}

export default function StatCard({
  title,
  value,
  icon,
}: StatCardProps) {
  return (
    <div className="bg-white rounded-xl shadow-md border p-6 hover:shadow-xl transition-all">

      <div className="flex justify-between items-center">

        <div>

          <p className="text-gray-500 text-sm">
            {title}
          </p>

          <h2 className="text-3xl font-bold mt-2">
            {value}
          </h2>

        </div>

        <div className="w-14 h-14 rounded-full bg-black text-white flex items-center justify-center">
          {icon}
        </div>

      </div>

    </div>
  );
}