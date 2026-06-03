import Hero from "@/components/Hero";
import ResultsSnapshot from "@/components/ResultsSnapshot";
import Process from "@/components/Process";
import SMGStory from "@/components/SMGStory";
import Lessons from "@/components/Lessons";
import VisionStory from "@/components/VisionStory";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col overflow-x-hidden selection:bg-zinc-800 selection:text-white">
      {/* Sticky Header */}
      <header className="fixed top-0 left-0 right-0 z-50 glass-panel border-b-0 border-white/5">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <span className="font-bold tracking-tight text-white">Om Prathik Kaspa.</span>
          <a href="#contact" className="text-sm font-medium text-zinc-400 hover:text-white transition-colors">
            Contact
          </a>
        </div>
      </header>

      <div className="pt-16">
        <Hero />
        <ResultsSnapshot />
        <Process />
        <SMGStory />
        <Lessons />
        <VisionStory />
        <Skills />
        <Contact />
      </div>
    </main>
  );
}
