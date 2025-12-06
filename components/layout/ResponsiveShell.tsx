"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";

const navItems = [
  { label: "Scanner", href: "/", icon: "🔍" },
  { label: "Strains", href: "/strains", icon: "🌿" },
  { label: "Grow Log", href: "/grow", icon: "🌱" },
  { label: "Directory", href: "/directory", icon: "🏢" },
  { label: "Spot AI", href: "/spot", icon: "🤖" },
];

export default function ResponsiveShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [isDesktop, setIsDesktop] = useState(false);

  // Detect desktop width
  useEffect(() => {
    const update = () => setIsDesktop(window.innerWidth >= 860);
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  return (
    <div className="min-h-screen flex bg-black text-white">
      {/* Desktop Sidebar */}
      {isDesktop && (
        <aside
          className="w-64 border-r border-green-400/25 bg-black/50 backdrop-blur-md p-6 flex flex-col"
        >
          {/* Logo */}
          <div className="flex items-center gap-3 mb-8">
            <div className="w-10 h-10 rounded-full border border-green-400/50 flex items-center justify-center overflow-hidden bg-black/50">
              <img src="/icons/emblem.png" alt="StrainSpotter" className="w-7 h-7 object-cover opacity-90" style={{ borderRadius: '50%' }} />
            </div>
            <span className="text-xl font-semibold text-green-300">StrainSpotter</span>
          </div>

          {/* Navigation */}
          <nav className="flex flex-col gap-2">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={clsx(
                  "px-3 py-2 rounded-md transition-all flex items-center gap-2 hover:bg-green-400/10",
                  pathname === item.href && "bg-green-400/20 text-green-300"
                )}
              >
                <span className="text-lg">{item.icon}</span>
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Footer */}
          <div className="mt-auto text-xs text-green-400/50">
            © {new Date().getFullYear()} StrainSpotter
          </div>
        </aside>
      )}

      {/* MAIN CONTENT AREA */}
      <main className="flex-1 p-4 md:p-8 w-full">{children}</main>
    </div>
  );
}
