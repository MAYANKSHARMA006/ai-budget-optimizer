interface Activity {
  title: string;
  time: string;
}

export default function RecentActivity({
  activities,
}: {
  activities: Activity[];
}) {
  return (
    <div className="rounded-xl bg-white shadow p-6">
      <h2 className="text-xl font-bold mb-5">
        Recent Activity
      </h2>

      <div className="space-y-4">
        {activities.length === 0 ? (
          <p className="text-gray-500">
            No recent activity.
          </p>
        ) : (
          activities.map((activity, index) => (
            <div
              key={index}
              className="border-b pb-3 last:border-none"
            >
              <p className="font-medium">
                {activity.title}
              </p>

              <p className="text-sm text-gray-500">
                {activity.time}
              </p>
            </div>
          ))
        )}
      </div>
    </div>
  );
}