"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import {
  LayoutDashboard,
  Package,
  FolderKanban,
  MessageSquare,
  ShoppingCart,
  Activity,
} from "lucide-react";

export default function Sidebar() {
  const pathname = usePathname();

  const navItems = [
    {
      name: "Dashboard",
      href: "/admin/dashboard",
      icon: LayoutDashboard,
    },
    {
      name: "Products",
      href: "/admin/products",
      icon: Package,
    },
    {
      name: "Categories",
      href: "/admin/categories",
      icon: FolderKanban,
    },
    {
      name: "Inquiries",
      href: "/admin/inquiries",
      icon: MessageSquare,
    },
    {
      name: "Orders",
      href: "/admin/orders",
      icon: ShoppingCart,
    },
  ];

  return (
    <aside className="w-72 h-screen sticky top-0 bg-[#07122B] text-white px-6 py-8">
      <div className="mb-12">
        <h2 className="text-3xl font-bold">
          Anita Printer
        </h2>

        <p className="text-sm text-gray-400 mt-2">
          Admin Panel
        </p>
      </div>

      <nav className="flex flex-col gap-3">
        {navItems.map((item) => {
          const Icon = item.icon;

          return (
            <Link
              key={item.href}
              href={item.href}
              className={`flex items-center gap-3 px-4 py-3 rounded-xl transition ${
                pathname === item.href
                  ? "bg-white/10"
                  : "hover:bg-white/10"
              }`}
            >
              <Icon size={20} />

              <span>{item.name}</span>
            </Link>
          );
        })}
      </nav>
    </aside>
  );
}