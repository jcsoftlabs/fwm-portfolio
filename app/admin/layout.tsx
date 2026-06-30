"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { signOut } from "next-auth/react";

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  const navItems = [
    { href: "/admin", label: "Dashboard" },
    { href: "/admin/parcours", label: "Parcours" },
    { href: "/admin/realisations", label: "Réalisations" },
    { href: "/admin/actualites", label: "Actualités" },
    { href: "/admin/galerie", label: "Galerie Média" },
    { href: "/admin/newsletter", label: "Newsletter" },
    { href: "/admin/parametres", label: "Paramètres" },
  ];

  return (
    <div className="min-h-screen bg-slate-50 flex">
      {/* Sidebar */}
      <aside className="w-64 bg-navy text-white flex flex-col fixed inset-y-0 left-0">
        <div className="p-6 border-b border-white/10">
          <div className="inline-flex h-10 w-12 items-center justify-center bg-white/10 font-bold tracking-widest text-sm text-gold mb-3">
            FWM
          </div>
          <p className="text-xs font-bold uppercase tracking-widest text-white/70">
            Administration
          </p>
        </div>
        
        <nav className="flex-1 py-6 px-3 flex flex-col gap-1 overflow-y-auto">
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`px-4 py-3 text-sm font-medium rounded transition-colors ${
                  isActive
                    ? "bg-gold text-white"
                    : "text-slate-300 hover:bg-white/5 hover:text-white"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="p-4 border-t border-white/10">
          <button
            onClick={() => signOut({ callbackUrl: "/" })}
            className="w-full text-left px-4 py-2 text-sm text-slate-400 hover:text-white transition-colors"
          >
            Se déconnecter
          </button>
        </div>
      </aside>

      {/* Main content */}
      <main className="flex-1 ml-64 min-h-screen">
        {children}
      </main>
    </div>
  );
}
