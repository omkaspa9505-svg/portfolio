"use client";
import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section id="contact" className="py-32 px-6 max-w-4xl mx-auto text-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-5xl md:text-7xl font-bold tracking-tighter mb-8 text-white">
          Let's build systems together.
        </h2>
        <p className="text-xl text-zinc-400 mb-12 max-w-2xl mx-auto">
          I'm currently looking for roles in Performance Marketing and Marketing Automation where I can solve real business bottlenecks.
        </p>
        
        <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
          <a 
            href="mailto:omkaspa9505@gmail.com" 
            className="w-full sm:w-auto px-8 py-4 bg-white text-black font-semibold rounded-full hover:scale-105 transition-transform duration-300"
          >
            Email Me
          </a>
          <a 
            href="https://www.linkedin.com/in/om-kaspa-a146352a0/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-8 py-4 bg-zinc-900 text-white font-semibold rounded-full border border-zinc-800 hover:bg-zinc-800 hover:scale-105 transition-all duration-300"
          >
            LinkedIn
          </a>
          <a 
            href="/resume.docx" 
            download
            className="w-full sm:w-auto px-8 py-4 bg-zinc-900 text-white font-semibold rounded-full border border-zinc-700 hover:bg-zinc-800 hover:border-zinc-500 hover:scale-105 transition-all duration-300 flex justify-center items-center gap-2"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg>
            Download Resume
          </a>
        </div>
      </motion.div>
      
      <div className="mt-32 pt-8 border-t border-zinc-900 text-zinc-600 flex flex-col md:flex-row justify-between items-center text-sm">
        <p>© {new Date().getFullYear()} Om Prathik Kaspa. All rights reserved.</p>
        <p className="mt-4 md:mt-0">I learn by building.</p>
      </div>
    </section>
  );
}
