import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex  h-screen">
      <div className="print:hidden">
        <Sidebar />
      </div>
      <div className="flex-1 flex flex-col">
        <div className="print:hidden">
          <Navbar />
        </div>

        <div className="p-8">{children}</div>
      </div>
    </div>
  );
}
