import Sidebar from "./sidebar";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-slate-100">
      <Sidebar />

      <div className="ml-64">
        <header className="sticky top-0 z-20 flex h-16 items-center justify-between border-b bg-white px-8 shadow-sm">
          <div>
            <h1 className="text-xl font-semibold text-slate-800">
              AI Budget Optimizer
            </h1>
          </div>
        </header>

        <main className="p-8">{children}</main>
      </div>
    </div>
  );
}