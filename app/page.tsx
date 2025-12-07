"use client";

import React from "react";
import { usePortal } from "@/app/components/portal/PortalController";
import { StrainNodeCluster } from "@/components/StrainNodeCluster";
import ScannerShowcase from "@/components/home/ScannerShowcase";
import Image from "next/image";

export default function HomePage() {
  const { openPortal } = usePortal();

  return (
    <div className="relative w-full min-h-screen overflow-hidden text-white">

      {/* PAGE CONTAINER */}
      <div className="relative z-10 mx-auto max-w-6xl px-6 py-24">
        {/* HERO SECTION — CINEMATIC */}
        <section className="text-center mb-32">
          <div className="mx-auto w-40 h-40 mb-8">
            <Image
              src="/icons/emblem.png"
              alt="StrainSpotter Emblem"
              width={512}
              height={512}
              className="mx-auto drop-shadow-[0_0_40px_rgba(16,255,180,0.6)]"
            />
          </div>

          <h1 className="text-5xl md:text-7xl font-bold drop-shadow-[0_0_18px_rgba(16,255,180,0.75)]">
            StrainSpotter
          </h1>

          <p className="max-w-3xl mx-auto mt-6 text-lg opacity-80">
            The world's most advanced cannabis identification + cultivation intelligence system.
            Powered by multi-model AI, holographic UI, and ultra-precision strain matching.
          </p>
        </section>

        {/* SCANNER SHOWCASE — AI VOICEOVER + DEMO */}
        <section className="mb-32">
          <ScannerShowcase />
        </section>

        {/* STRAIN GALAXY — Cinematic cluster */}
        <section className="mb-32">
          <h2 className="text-3xl font-bold text-center mb-10 text-green-300">
            Explore the Strain Galaxy
          </h2>

          <div className="strain-node-cluster">
            <StrainNodeCluster onSelectStrain={(strainName) => {
              // Convert strain name to slug format
              const slug = strainName.toLowerCase().replace(/\s+/g, '-');
              openPortal(slug);
            }} />
          </div>
        </section>

        {/* GARDEN TOOLS — SAME THEME AS APP */}
        <section className="mb-32 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            { title: "Grow Coach", desc: "AI-guided plant health diagnosis and care strategy." },
            { title: "Grow Logbook", desc: "Track your grow from seed to harvest with analytics." },
            { title: "Strain Browser", desc: "35,000 strains with genetics, effects, and photos." },
            { title: "Grower Directory", desc: "Find verified cultivators, breeders, and suppliers." },
            { title: "Seed Vendors", desc: "Top verified seed banks across the world." },
            { title: "Spot AI Chat", desc: "Ask anything — growing, strains, issues, nutrients." },
          ].map((card) => (
            <div
              key={card.title}
              className="
                p-6 rounded-xl backdrop-blur-xl
                bg-[rgba(0,0,0,0.45)]
                border border-[rgba(16,255,180,0.3)]
                shadow-[0_0_30px_rgba(16,255,180,0.35)]
                hover:shadow-[0_0_40px_rgba(255,215,0,0.5)]
                hover:border-gold transition-all cursor-pointer
              "
            >
              <h3 className="text-xl font-semibold text-green-300">{card.title}</h3>
              <p className="text-sm opacity-80 mt-2">{card.desc}</p>
            </div>
          ))}
        </section>

        {/* MEMBERSHIP PREVIEW */}
        <section className="text-center mb-32">
          <h2 className="text-3xl font-bold text-green-300 mb-6">Membership Benefits</h2>
          <p className="max-w-2xl mx-auto text-lg opacity-80">
            Unlock unlimited scans, grow doctor intelligence, advanced strain analytics,
            and exclusive grower tools.
          </p>
        </section>
      </div>
    </div>
  );
}
