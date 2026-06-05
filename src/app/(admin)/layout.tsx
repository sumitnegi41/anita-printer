import Sidebar from "@/components/shared/Sidebar";
import Header from "@/components/dashboard/Header";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
return (
  <div className="flex bg-[#F5F7FB]">
    <Sidebar />

    <div className="flex-1 flex flex-col min-h-screen">
      <Header />

      <main className="p-8">
        {children}
      </main>
    </div>
  </div>
);
}