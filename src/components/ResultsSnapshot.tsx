"use client";
import { motion } from "framer-motion";

export default function ResultsSnapshot() {
  const metrics = [
    { value: "40", label: "Qualified Leads", detail: "SMG Jewellers" },
    { value: "₹53.65", label: "Cost Per Lead", detail: "Meta Ads Execution" },
    { value: "33", label: "Conversations", detail: "Generated via Follow-ups" },
    { value: "1200+", label: "Records Digitized", detail: "AI Billbook Parsing" },
    { value: "600+", label: "Cold Calls", detail: "US B2B Market" },
    { value: "$1000", label: "Revenue", detail: "Vision Growth" },
  ];

  return (
    <section id="impact" className="py-24 px-6 max-w-6xl mx-auto border-t border-zinc-900">
      <div className="mb-16">
        <h3 className="text-sm font-mono text-zinc-500 mb-4 uppercase tracking-widest">01. Objective Truth</h3>
        <h2 className="text-4xl md:text-5xl font-bold tracking-tighter">Results Snapshot.</h2>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-8">
        {metrics.map((metric, idx) => (
          <motion.div 
            key={idx}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            className="p-6 md:p-8 rounded-2xl border border-zinc-800 bg-zinc-950/50 hover:border-zinc-600 transition-colors"
          >
            <div className="text-4xl md:text-5xl font-bold text-white mb-2">{metric.value}</div>
            <div className="text-lg text-zinc-300 font-medium mb-1">{metric.label}</div>
            <div className="text-sm text-zinc-500 font-mono">{metric.detail}</div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
