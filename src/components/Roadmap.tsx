import React, { useEffect, useRef } from 'react';
import GlitchText from './ui/GlitchText';

const Roadmap: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('opacity-100');
            entry.target.classList.remove('translate-y-10', 'opacity-0');
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section
      id="roadmap"
      ref={sectionRef}
      className="py-20 relative transition-all duration-1000 transform translate-y-10 opacity-0"
    >
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="orbitron font-bold text-3xl md:text-4xl mb-12 text-center">
            <GlitchText text="Roadmap" className="text-cyan-500" />
          </h2>

          <div className="space-y-12 pl-8">
            {/* Phase 1 */}
            <div className="roadmap-item pl-8">
              <div className="bg-black/40 backdrop-blur-md border border-cyan-500/30 rounded-lg p-6 shadow-[0_0_10px_rgba(6,182,212,0.7)]">
                <h3 className="press-start text-lg mb-4 text-cyan-400">PHASE 1: LIFTOFF</h3>

                <ul className="space-y-3">
                  <li className="flex items-baseline gap-2">
                    <span className="text-purple-500">✅</span>
                    <span>Website Launch</span>
                  </li>
                  <li className="flex items-baseline gap-2">
                    <span className="text-purple-500">✅</span>
                    <span>Social Media Setup</span>
                  </li>
                  <li className="flex items-baseline gap-2">
                    <span className="text-pink-500">⏳</span>
                    <span>Contract Deployment</span>
                  </li>
                  <li className="flex items-baseline gap-2">
                    <span className="text-white/40">⏳</span>
                    <span className="text-white/40">PancakeSwap Listing</span>
                  </li>
                  <li className="flex items-baseline gap-2">
                    <span className="text-white/40">⏳</span>
                    <span className="text-white/40">1,000 Holders</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Phase 2 */}
            <div className="roadmap-item pl-8">
              <div className="bg-black/40 backdrop-blur-md border border-cyan-500/30 rounded-lg p-6 shadow-[0_0_10px_rgba(6,182,212,0.5)] opacity-80">
                <h3 className="press-start text-lg mb-4 text-cyan-400">PHASE 2: ORBIT</h3>

                <ul className="space-y-3">
                  <li className="flex items-baseline gap-2 text-white/60">
                    <span>⏳</span>
                    <span>CoinGecko Listing</span>
                  </li>
                  <li className="flex items-baseline gap-2 text-white/60">
                    <span>⏳</span>
                    <span>CoinMarketCap Listing</span>
                  </li>
                  <li className="flex items-baseline gap-2 text-white/60">
                    <span>⏳</span>
                    <span>DEX Tools Integration</span>
                  </li>
                  <li className="flex items-baseline gap-2 text-white/60">
                    <span>⏳</span>
                    <span>Meme War Competitions</span>
                  </li>
                  <li className="flex items-baseline gap-2 text-white/60">
                    <span>⏳</span>
                    <span>10,000 Holders</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Phase 3 */}
            <div className="roadmap-item pl-8">
              <div className="bg-black/40 backdrop-blur-md border border-cyan-500/30 rounded-lg p-6 shadow-[0_0_8px_rgba(6,182,212,0.4)] opacity-60">
                <h3 className="press-start text-lg mb-4 text-cyan-400">PHASE 3: MOON</h3>

                <ul className="space-y-3">
                  <li className="flex items-baseline gap-2 text-white/40">
                    <span>⏳</span>
                    <span>CEX Listings</span>
                  </li>
                  <li className="flex items-baseline gap-2 text-white/40">
                    <span>⏳</span>
                    <span>$PAI NFT Collection</span>
                  </li>
                  <li className="flex items-baseline gap-2 text-white/40">
                    <span>⏳</span>
                    <span>$PAI Staking</span>
                  </li>
                  <li className="flex items-baseline gap-2 text-white/40">
                    <span>⏳</span>
                    <span>Partnerships with Other Projects</span>
                  </li>
                  <li className="flex items-baseline gap-2 text-white/40">
                    <span>⏳</span>
                    <span>100,000 Holders</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Secret Phase */}
            <div className="roadmap-item pl-8">
              <div className="bg-black/40 backdrop-blur-md border border-purple-500/30 rounded-lg p-6 shadow-[0_0_15px_rgba(139,92,246,0.6)] opacity-40 hover:opacity-100 transition-opacity">
                <h3 className="press-start text-lg mb-4 text-purple-400">PHASE X: ???</h3>

                <p className="italic text-white/40 text-center">
                  "This isn't even our final form." - SatoshiJr
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Roadmap;
