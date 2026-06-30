"use client";

import { useState } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

type NavItem = {
  href: string;
  label: string;
};

type MobileMenuProps = {
  items: NavItem[];
};

export function MobileMenu({ items }: MobileMenuProps) {
  const [open, setOpen] = useState(false);

  return (
    <div className="relative md:hidden">
      <button
        type="button"
        aria-label="Ouvrir le menu"
        onClick={() => setOpen((value) => !value)}
        className="inline-flex h-11 w-11 items-center justify-center rounded-none border border-slate-200 bg-white text-navy shadow-sm transition-colors hover:border-haitiBlue"
      >
        <span className="space-y-1">
          <span className={cn("block h-0.5 w-5 bg-current transition", open && "translate-y-1.5 rotate-45")} />
          <span className={cn("block h-0.5 w-5 bg-current transition", open && "opacity-0")} />
          <span className={cn("block h-0.5 w-5 bg-current transition", open && "-translate-y-1.5 -rotate-45")} />
        </span>
      </button>

      {open ? (
        <div className="absolute right-0 top-14 z-50 w-[calc(100vw-2rem)] max-w-[300px] rounded-none border border-slate-200 bg-white p-4 shadow-strong">
          <nav className="flex flex-col gap-2">
            {items.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="rounded-none border-l-2 border-transparent px-4 py-3 text-sm font-semibold uppercase tracking-wider text-navy transition-colors hover:border-haitiBlue hover:bg-slate-50"
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      ) : null}
    </div>
  );
}
