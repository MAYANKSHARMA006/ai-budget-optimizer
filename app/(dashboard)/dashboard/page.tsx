import { UserButton } from "@clerk/nextjs";

export default function DashboardPage() {
  return (
    <main className="min-h-screen bg-gray-100">
      <header className="flex items-center justify-between border-b bg-white p-4 shadow">
        <h1 className="text-2xl font-bold">
          AI Budget Optimizer
        </h1>

        <UserButton afterSignOutUrl="/" />
      </header>

      <section className="p-8">
        <h2 className="text-3xl font-bold">
          Dashboard
        </h2>

        <p className="mt-3 text-gray-600">
          Welcome to your AI Budget Optimizer dashboard.
        </p>
      </section>
    </main>
  );
}