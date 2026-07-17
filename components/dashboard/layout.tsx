import Sidebar from "./sidebar";
import Navbar from "./navbar";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-slate-100">
      <Sidebar />

      <div className="ml-64">
        <Navbar />

        <main className="p-8">
          {children}
        </main>
      </div>
    </div>
  );
}