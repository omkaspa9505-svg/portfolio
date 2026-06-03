"use client";
import { motion } from "framer-motion";

const skills = [
  "Meta Ads", "Lead Generation", "Marketing Automation", "n8n", 
  "WhatsApp Automation", "Telegram", "Google Sheets", "Supabase", 
  "Vercel", "GitHub", "CRM Workflows", "Customer Data Systems"
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 overflow-hidden border-t border-zinc-900 bg-zinc-950/50">
      <div className="max-w-6xl mx-auto px-6 mb-12">
        <h3 className="text-sm font-mono text-zinc-500 uppercase tracking-widest text-center">05. Tool Stack</h3>
      </div>
      
      {/* Infinite Marquee */}
      <div className="relative flex overflow-x-hidden group">
        <div className="py-12 animate-marquee whitespace-nowrap flex items-center">
          {[...skills, ...skills, ...skills].map((skill, idx) => (
            <span 
              key={idx} 
              className="mx-8 text-2xl md:text-4xl font-bold text-zinc-800 hover:text-white transition-colors duration-300 cursor-default"
            >
              {skill}
            </span>
          ))}
        </div>
        <div className="absolute top-0 py-12 animate-marquee2 whitespace-nowrap flex items-center">
          {[...skills, ...skills, ...skills].map((skill, idx) => (
            <span 
              key={idx} 
              className="mx-8 text-2xl md:text-4xl font-bold text-zinc-800 hover:text-white transition-colors duration-300 cursor-default"
            >
              {skill}
            </span>
          ))}
        </div>
        
        {/* Gradients to fade the edges */}
        <div className="absolute inset-y-0 left-0 w-1/6 bg-gradient-to-r from-[#0a0a0a] to-transparent z-10 pointer-events-none"></div>
        <div className="absolute inset-y-0 right-0 w-1/6 bg-gradient-to-l from-[#0a0a0a] to-transparent z-10 pointer-events-none"></div>
      </div>
    </section>
  );
}
