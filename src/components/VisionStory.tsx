"use client";
import { motion } from "framer-motion";

export default function VisionStory() {
  return (
    <section id="vision-growth" className="py-32 px-6 max-w-6xl mx-auto border-t border-zinc-900">
      <div className="mb-16">
        <h3 className="text-sm font-mono text-zinc-500 mb-4 uppercase tracking-widest">04. Secondary Case Study</h3>
        <h2 className="text-4xl md:text-5xl font-bold tracking-tighter mb-6">Vision Growth</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
        <div className="space-y-12">
          <div>
            <h4 className="text-xl font-bold text-white mb-3 font-mono">Problem</h4>
            <p className="text-zinc-400 text-lg leading-relaxed">
              To understand B2B acquisition in international markets, I needed to figure out how to acquire US clients without a massive budget.
            </p>
          </div>
          
          <div>
            <h4 className="text-xl font-bold text-white mb-3 font-mono">Action</h4>
            <p className="text-zinc-400 text-lg leading-relaxed">
              I bypassed complex funnels and relied on pure hustle: I picked up the phone. I made over 600 cold calls directly to business owners in the United States to pitch services, handle objections in real-time, and identify market pain points.
            </p>
          </div>
        </div>

        <div className="space-y-12">
          <div>
            <h4 className="text-xl font-bold text-white mb-3 font-mono">Results</h4>
            <ul className="text-zinc-400 text-lg space-y-2">
              <li className="flex items-center"><span className="text-white mr-3">→</span> 600+ Outbound Cold Calls</li>
              <li className="flex items-center"><span className="text-white mr-3">→</span> $1000 in Revenue Generated</li>
            </ul>
          </div>

          <div className="glass-panel p-8 rounded-xl border border-zinc-800 bg-zinc-900/30">
            <h4 className="text-xl font-bold text-zinc-500 mb-4 font-mono uppercase tracking-widest">Key Lesson</h4>
            <h3 className="text-3xl md:text-4xl font-bold text-white leading-tight">
              Rejection is Data.
            </h3>
          </div>
        </div>
      </div>
    </section>
  );
}
