import { currentUser } from "@clerk/nextjs/server";

export default async function AdminProfile() {
  const user = await currentUser();

  return (
    <div className="rounded-xl bg-white shadow p-6">
      <h2 className="text-2xl font-bold mb-6">
        Administrator
      </h2>

      <div className="space-y-3">
        <div>
          <p className="text-gray-500">Name</p>
          <h3 className="text-lg font-semibold">
            {user?.fullName || "Unknown"}
          </h3>
        </div>

        <div>
          <p className="text-gray-500">Email</p>
          <h3 className="text-lg font-semibold">
            {user?.primaryEmailAddress?.emailAddress}
          </h3>
        </div>

        <div>
          <p className="text-gray-500">Role</p>
          <span className="rounded bg-blue-100 px-3 py-1 text-blue-700">
            Administrator
          </span>
        </div>
      </div>
    </div>
  );
}