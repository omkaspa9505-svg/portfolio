"use client";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section id="hero" className="min-h-[85vh] flex flex-col justify-center px-6 max-w-6xl mx-auto pt-24 pb-32 relative">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-4xl"
      >
        <h2 className="text-zinc-500 font-mono uppercase tracking-widest mb-6 text-sm">
          Performance Marketing | Marketing Automation | Lead Generation
        </h2>
        
        <h1 className="text-5xl md:text-8xl font-bold tracking-tighter text-white mb-8 leading-[1.1]">
          I learn by building.
        </h1>
        
        <p className="text-xl md:text-2xl text-zinc-400 leading-relaxed mb-12 max-w-2xl">
          I am an operator who walks into a business, understands how it works, identifies the operational bottlenecks, and builds the systems to solve them. 
        </p>
        
        <div className="flex items-center gap-6">
          <a href="#smg-jewellers" className="px-8 py-4 bg-white text-black font-semibold rounded-full hover:bg-zinc-200 transition-colors">
            Read Case Study
          </a>
          <a href="#impact" className="px-8 py-4 bg-transparent border border-zinc-700 text-white font-semibold rounded-full hover:bg-zinc-900 transition-colors">
            View Impact
          </a>
        </div>
      </motion.div>
      
    </section>
  );
}
