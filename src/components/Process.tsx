"use client";
import { motion } from "framer-motion";

export default function Process() {
  const steps = [
    { title: "Curiosity", description: "Approaching a business not as a marketer with a pre-built solution, but as an observer asking 'how does this work?'" },
    { title: "Research", description: "Studying fulfillment, operations, and customer buying behavior to deeply understand the business mechanics." },
    { title: "System Building", description: "Engineering the infrastructure—landing pages, automation, CRMs—required to scale acquisition." },
    { title: "Market Feedback", description: "Launching into the real world, measuring objective truth over vanity metrics, and reading the market." },
    { title: "Optimization", description: "Using real market data and rejection to refine offers, fix bottlenecks, and scale what works." }
  ];

  return (
    <section id="process" className="py-32 px-6 max-w-6xl mx-auto border-t border-zinc-900">
      <div className="mb-16">
        <h3 className="text-sm font-mono text-zinc-500 mb-4 uppercase tracking-widest">02. Core Methodology</h3>
        <h2 className="text-4xl md:text-6xl font-bold tracking-tighter mb-6">How I Think.</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
        {steps.map((step, idx) => (
          <motion.div 
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            className="p-6 rounded-xl border border-zinc-800 bg-zinc-950/50 hover:bg-zinc-900 transition-colors group"
          >
            <div className="text-2xl font-bold text-zinc-700 mb-4 font-mono group-hover:text-white transition-colors">
              0{idx + 1}
            </div>
            <h4 className="text-xl font-bold text-white mb-3">{step.title}</h4>
            <p className="text-zinc-400 text-sm leading-relaxed">{step.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
