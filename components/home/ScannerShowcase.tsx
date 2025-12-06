"use client";

import React from "react";
import Image from "next/image";
import VoiceDemo from "./VoiceDemo";

export default function ScannerShowcase() {
  return (
    <section className="relative w-full py-32 overflow-hidden">
      {/* Background fog & aurora */}
      <div className="section-divider">
        <div className="fog animate" />
        <div className="light-rays" />
        <div className="cluster-ripple" />
      </div>

      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-20 items-center relative z-10">
        {/* LEFT SIDE – PHONE SHOWCASE */}
        <div className="relative flex justify-center">
          {/* Glow Ring */}
          <div className="absolute w-72 h-72 rounded-full border border-gold opacity-80 
          animate-pulse-slow shadow-[0_0_60px_rgba(16,255,180,0.5)]"></div>

          {/* Hero emblem */}
          <div className="absolute w-40 h-40 rounded-full opacity-90 animate-float overflow-hidden">
            <Image
              src="/icons/emblem.png"
              alt="StrainSpotter Emblem"
              width={200}
              height={200}
              className="rounded-full object-cover"
            />
          </div>

          {/* Phone mockup */}
          <div className="relative w-64 h-[520px] rounded-[42px] overflow-hidden shadow-2xl 
          border border-green-400 bg-black animate-float">
            <Image
              src="/mockups/scanner-demo.png"
              alt="Scanner demo"
              fill
              className="object-cover opacity-95"
            />
          </div>
        </div>

        {/* RIGHT SIDE – COPY */}
        <div className="relative">
          <h2 className="text-4xl md:text-5xl font-bold text-gold mb-6 drop-shadow-lg">
            The Most Advanced Cannabis Scanner Ever Built
          </h2>

          <p className="text-green-200 text-lg leading-relaxed mb-8 opacity-90">
            StrainSpotter's AI model is trained on tens of thousands of verified cannabis images.
            Simply snap a picture of your bud, plant, or packaging — and our neural engine identifies
            the strain, its genetics, its flavor profile, and even its grow health.
          </p>

          <ul className="text-green-100 space-y-3 mb-10">
            <li>🌿 35,000+ strain training dataset</li>
            <li>📸 Bud / Plant / Packaging identification</li>
            <li>🧬 Lineage + terpene prediction</li>
            <li>🩺 AI Grow Doctor built into every scan</li>
          </ul>

          <button className="px-8 py-4 rounded-full border border-gold text-gold text-lg 
          hover:bg-gold hover:text-black transition-all duration-300 shadow-lg">
            Try a Demo Scan →
          </button>

          <VoiceDemo />
        </div>
      </div>
    </section>
  );
}
