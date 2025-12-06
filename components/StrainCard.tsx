"use client";

import { usePortal } from "@/app/components/portal/PortalController";
import type { StrainData } from "@/types/strain";

interface StrainCardProps {
  strain: StrainData;
}

export function StrainCard({ strain }: StrainCardProps) {
  const { openPortal } = usePortal();

  return (
    <div
      onClick={() => openPortal(strain.slug)}
      className="p-4 rounded-xl bg-black/40 
      border border-emerald-500/20 hover:border-emerald-300/40
      hover:scale-[1.04] transition-all cursor-pointer 
      backdrop-blur-md"
    >
      <p className="font-semibold text-emerald-200">{strain.name}</p>
      <p className="text-sm opacity-70">{strain.type ?? "Unknown Type"}</p>
    </div>
  );
}
