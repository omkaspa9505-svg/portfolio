"use client";
import { motion } from "framer-motion";

export default function SMGStory() {
  return (
    <section id="smg-jewellers" className="py-32 px-6 max-w-6xl mx-auto border-t border-zinc-900">
      <div className="mb-24">
        <h3 className="text-sm font-mono text-zinc-500 mb-4 uppercase tracking-widest">03. The Centerpiece Case Study</h3>
        <h2 className="text-5xl md:text-7xl font-bold tracking-tighter mb-8">SMG Jewellers</h2>
        <p className="text-2xl text-zinc-400 max-w-3xl leading-relaxed">
          A case study on identifying operational bottlenecks in a traditional business, researching the market, and building an automated acquisition engine.
        </p>
      </div>

      <div className="space-y-32">
        {/* 1. Observation */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-4">
            <h4 className="text-3xl font-bold mb-4 text-white">01. Observation</h4>
          </div>
          <div className="lg:col-span-8">
            <p className="text-xl text-zinc-400 leading-relaxed mb-8">
              I first approached the business simply as a customer. I quickly noticed that while they had a strong local reputation, heavy walk-in traffic, and an active Instagram presence, their backend operations were entirely manual. Lead generation was limited to passive word-of-mouth, customer data was fragmented across physical billbooks, and follow-ups were virtually non-existent.
            </p>
          </div>
        </div>

        {/* 2. Research */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start border-t border-zinc-900 pt-24">
          <div className="lg:col-span-4">
            <h4 className="text-3xl font-bold mb-4 text-white">02. Research</h4>
          </div>
          <div className="lg:col-span-8">
            <p className="text-xl text-zinc-400 leading-relaxed">
              Instead of rushing to run ads, I spent time understanding the business. I physically visited the jewellery manufacturers to learn how custom pieces are produced and what the fulfilment timelines look like. I studied customer buying behavior, common objections, and how high-ticket purchasing decisions are made in this specific market. I only started building once I understood the operational bottlenecks.
            </p>
          </div>
        </div>

        {/* 3. System Building */}
        <div className="border-t border-zinc-900 pt-24">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-16">
            <div className="lg:col-span-4">
              <h4 className="text-3xl font-bold mb-4 text-white">03. System Building</h4>
            </div>
            <div className="lg:col-span-8">
              <p className="text-xl text-zinc-400 leading-relaxed mb-8">
                I engineered a complete customer acquisition and retention system. This wasn't just a marketing campaign; it was operational infrastructure.
              </p>
              <ul className="space-y-4 text-lg text-zinc-300">
                <li className="flex items-start"><span className="text-white mr-3">→</span> Main website & custom jewellery landing page.</li>
                <li className="flex items-start"><span className="text-white mr-3">→</span> Live gold-rate API integration.</li>
                <li className="flex items-start"><span className="text-white mr-3">→</span> Meta lead generation campaigns.</li>
                <li className="flex items-start"><span className="text-white mr-3">→</span> WhatsApp automation for immediate follow-up.</li>
                <li className="flex items-start"><span className="text-white mr-3">→</span> Telegram notifications to alert the sales team.</li>
                <li className="flex items-start"><span className="text-white mr-3">→</span> Structured customer database workflows.</li>
              </ul>
            </div>
          </div>

          {/* Evidence: Major Screenshots given their own massive sections */}
          <div className="space-y-24 mt-16">
            <div className="glass-panel p-4 rounded-xl">
              <div className="bg-zinc-900 rounded-lg overflow-hidden border border-zinc-800">
                <img src="/images/linkedin post 1(1).png" alt="Meta Ads Dashboard" className="w-full object-cover" />
              </div>
              <p className="text-center text-zinc-500 mt-4 text-sm uppercase tracking-widest">Evidence: Meta Ads Execution</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="glass-panel p-4 rounded-xl">
                <div className="aspect-[9/16] bg-zinc-900 rounded-lg overflow-hidden border border-zinc-800">
                  <img src="/images/linkedin post 1(2).jpeg" alt="Website Home" className="w-full h-full object-cover" />
                </div>
                <p className="text-center text-zinc-500 mt-4 text-sm uppercase tracking-widest">Evidence: Website</p>
              </div>
              
              <div className="glass-panel p-4 rounded-xl">
                <div className="aspect-[9/16] bg-zinc-900 rounded-lg overflow-hidden border border-zinc-800">
                  <img src="/images/linkedin post 1(3).png" alt="Landing Page" className="w-full h-full object-cover" />
                </div>
                <p className="text-center text-zinc-500 mt-4 text-sm uppercase tracking-widest">Evidence: Landing Page</p>
              </div>

              <div className="glass-panel p-4 rounded-xl">
                <div className="aspect-[9/16] bg-zinc-900 rounded-lg overflow-hidden border border-zinc-800">
                  <img src="/images/Screenshot (567).png" alt="Live Gold Rate API" className="w-full h-full object-cover" />
                </div>
                <p className="text-center text-zinc-500 mt-4 text-sm uppercase tracking-widest">Evidence: API Integration</p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="glass-panel p-4 rounded-xl">
                <div className="aspect-square bg-zinc-900 rounded-lg overflow-hidden border border-zinc-800">
                  <img src="/images/WhatsApp Image 2026-06-03 at 6.06.00 PM.jpeg" alt="Carousel Product Slide" className="w-full h-full object-cover" />
                </div>
                <p className="text-center text-zinc-500 mt-4 text-sm uppercase tracking-widest">Evidence: Ad Creatives</p>
              </div>
              
              <div className="glass-panel p-4 rounded-xl">
                <div className="aspect-square bg-zinc-900 rounded-lg overflow-hidden border border-zinc-800">
                  <img src="/images/WhatsApp Image 2026-06-03 at 6.06.48 PM.jpeg" alt="Carousel CTA Slide" className="w-full h-full object-cover" />
                </div>
                <p className="text-center text-zinc-500 mt-4 text-sm uppercase tracking-widest">Evidence: CTA Strategy</p>
              </div>
            </div>
          </div>
        </div>

        {/* 3.5 AI Billbook Digitization */}
        <div className="border-t border-zinc-900 pt-24 bg-zinc-950/50 p-12 -mx-12 rounded-3xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            <div className="lg:col-span-4">
              <h4 className="text-3xl font-bold mb-4 text-white">AI Billbook Digitization</h4>
              <p className="text-zinc-500 font-mono uppercase tracking-widest text-sm">Solving Operational Inefficiency</p>
            </div>
            <div className="lg:col-span-8">
              <p className="text-xl text-zinc-300 leading-relaxed mb-6">
                Most marketers simply run ads. Very few look at a stack of physical paper and see an operational bottleneck that needs solving.
              </p>
              <p className="text-lg text-zinc-400 leading-relaxed mb-6">
                I discovered years of physical billbooks lying dormant. I designed an AI-assisted workflow to extract data from these handwritten receipts, structuring it into a centralized database. By doing this, we didn't just acquire new leads—we identified hundreds of high-value returning customers and unlocked the ability to run automated reactivation campaigns.
              </p>
              <div className="inline-block border border-zinc-700 bg-zinc-900/50 px-6 py-3 rounded-lg text-white font-mono text-sm">
                1200+ Customer Records Digitized
              </div>
            </div>
          </div>
        </div>

        {/* 4. Market Feedback */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start border-t border-zinc-900 pt-24">
          <div className="lg:col-span-4">
            <h4 className="text-3xl font-bold mb-4 text-white">04. Market Feedback</h4>
          </div>
          <div className="lg:col-span-8">
            <p className="text-xl text-zinc-400 leading-relaxed">
              We launched the campaigns and monitored the reality of the market. The most crucial takeaway: <strong>A good offer ≠ a large market.</strong>
              <br /><br />
              While custom jewellery demand certainly existed, the actual market size for high-ticket bespoke pieces was smaller than our initial assumptions. This provided an invaluable lesson in offer validation and reading market signals over vanity metrics.
            </p>
          </div>
        </div>

        {/* 5. Results */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start border-t border-zinc-900 pt-24">
          <div className="lg:col-span-4">
            <h4 className="text-3xl font-bold mb-4 text-white">05. The Results</h4>
          </div>
          <div className="lg:col-span-8">
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
              <div className="p-6 border border-zinc-800 rounded-xl bg-zinc-900/20">
                <div className="text-4xl font-bold text-white mb-2">40</div>
                <div className="text-sm text-zinc-400 uppercase tracking-wider font-mono">Qualified Leads</div>
              </div>
              <div className="p-6 border border-zinc-800 rounded-xl bg-zinc-900/20">
                <div className="text-4xl font-bold text-white mb-2">₹53.65</div>
                <div className="text-sm text-zinc-400 uppercase tracking-wider font-mono">Cost Per Lead</div>
              </div>
              <div className="p-6 border border-zinc-800 rounded-xl bg-zinc-900/20">
                <div className="text-4xl font-bold text-white mb-2">33</div>
                <div className="text-sm text-zinc-400 uppercase tracking-wider font-mono">Conversations</div>
              </div>
              <div className="p-6 border border-zinc-800 rounded-xl bg-zinc-900/20">
                <div className="text-4xl font-bold text-white mb-2">6</div>
                <div className="text-sm text-zinc-400 uppercase tracking-wider font-mono">Qualified Prospects</div>
              </div>
              <div className="p-6 border border-zinc-800 rounded-xl bg-zinc-900/20">
                <div className="text-4xl font-bold text-white mb-2">2</div>
                <div className="text-sm text-zinc-400 uppercase tracking-wider font-mono">Reported Purchases</div>
              </div>
              <div className="p-6 border border-zinc-800 rounded-xl bg-zinc-900/20">
                <div className="text-4xl font-bold text-white mb-2">1200+</div>
                <div className="text-sm text-zinc-400 uppercase tracking-wider font-mono">Records Digitized</div>
              </div>
            </div>
          </div>
        </div>

        {/* 6. Lessons */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start border-t border-zinc-900 pt-24">
          <div className="lg:col-span-4">
            <h4 className="text-3xl font-bold mb-4 text-white">06. Lessons</h4>
          </div>
          <div className="lg:col-span-8">
            <ul className="space-y-6 text-xl text-zinc-300">
              <li className="flex items-start"><span className="text-zinc-500 mr-4 font-mono">01</span> Tools matter.</li>
              <li className="flex items-start"><span className="text-zinc-500 mr-4 font-mono">02</span> Ads matter.</li>
              <li className="flex items-start"><span className="text-zinc-500 mr-4 font-mono">03</span> Automation matters.</li>
              <li className="flex items-start"><span className="text-white mr-4 font-mono font-bold">04</span> <strong>But business understanding matters more. Understanding the business comes before running ads.</strong></li>
            </ul>
          </div>
        </div>

      </div>
    </section>
  );
}
