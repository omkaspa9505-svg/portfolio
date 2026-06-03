"use client";
import { motion } from "framer-motion";

export default function Lessons() {
  const lessons = [
    "A good offer ≠ a large market.",
    "Automation only works after understanding the workflow.",
    "Businesses do not buy tools. They buy outcomes.",
    "The best marketing insights come from talking to customers.",
    "Market feedback is more valuable than assumptions.",
    "Execution teaches faster than theory."
  ];

  return (
    <section className="py-24 px-6 max-w-4xl mx-auto">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="glass-panel p-8 md:p-12 rounded-3xl border border-zinc-800 bg-zinc-900/30"
      >
        <h3 className="text-2xl md:text-3xl font-bold mb-8 text-white">The Most Important Lesson</h3>
        <p className="text-xl text-zinc-300 leading-relaxed mb-12 italic border-l-4 border-zinc-500 pl-6">
          Initially, I believed custom jewellery would be the strongest offer. Market feedback proved that customer demand was more nuanced. A good offer does not automatically mean a large market. Business understanding must always come before the tools.
        </p>

        <h4 className="text-sm font-mono text-zinc-500 mb-6 uppercase tracking-widest">Core Principles</h4>
        <ul className="space-y-4">
          {lessons.map((lesson, idx) => (
            <motion.li 
              key={idx}
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className="flex items-start"
            >
              <span className="text-zinc-600 mr-4 mt-1">→</span>
              <span className="text-lg text-zinc-400">{lesson}</span>
            </motion.li>
          ))}
        </ul>
      </motion.div>
    </section>
  );
}
