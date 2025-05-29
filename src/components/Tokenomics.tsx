import React, { useEffect, useRef, useState } from 'react';
import GlitchText from './ui/GlitchText';

const Tokenomics: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.2 }
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
      id="tokenomics"
      ref={sectionRef}
      className={`relative py-32 px-6 sm:px-12 overflow-hidden transition-all duration-1000 ease-out
        transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
    >
      {/* Hero-style gradient background */}
      <div className="absolute inset-0 bg-gradient-to-tr from-electric-blue/40 via-black/80 to-toxic-green/30 -z-10" />

      <div className="container mx-auto max-w-5xl text-center">
        {/* Glitch heading large */}
        <h1 className="orbitron font-extrabold text-5xl md:text-7xl mb-12">
          <GlitchText text="Tokenomics" className="text-electric-blue" />
        </h1>

        <div className="grid md:grid-cols-2 gap-12 text-left">
          {/* Left box: Supply & Tax */}
          <div className="bg-black/50 backdrop-blur-lg border border-electric-blue/40 rounded-xl p-10 shadow-neon-blue">
            <h2 className="orbitron text-3xl mb-6 text-electric-blue">Supply & Tax</h2>
            <div className="space-y-6 text-white/80">
              <div>
                <p className="text-sm uppercase tracking-widest">Total Supply</p>
                <p className="orbitron text-2xl">1,000,000,000 $PAI</p>
              </div>
              <div>
                <p className="text-sm uppercase tracking-widest">Buy Tax</p>
                <p className="orbitron text-2xl text-toxic-green">5%</p>
              </div>
              <div>
                <p className="text-sm uppercase tracking-widest">Sell Tax</p>
                <p className="orbitron text-2xl text-neon-purple">5%</p>
              </div>
              <div>
                <p className="text-sm uppercase tracking-widest">Decimals</p>
                <p className="orbitron text-2xl">18</p>
              </div>
            </div>
          </div>

          {/* Right box: Distribution bars */}
          <div className="bg-black/50 backdrop-blur-lg border border-electric-blue/40 rounded-xl p-10 shadow-neon-blue flex flex-col justify-center">
            <h2 className="orbitron text-3xl mb-8 text-electric-blue text-center">Distribution</h2>
            <div className="relative h-64 flex items-end gap-8 px-6">
              {/* Liquidity bar */}
              <div className={`relative w-1/3 rounded-t-lg bg-neon-purple transition-all duration-1000 ease-out ${isVisible ? 'h-1/2' : 'h-0'}`}>
                <div className="absolute -top-10 w-full text-center text-neon-purple orbitron font-bold text-lg">
                  Liquidity<br /><span className="text-white text-xl">50%</span>
                </div>
              </div>
              {/* Marketing bar */}
              <div className={`relative w-1/4 rounded-t-lg bg-electric-blue transition-all duration-1000 ease-out ${isVisible ? 'h-3/10' : 'h-0'}`}>
                <div className="absolute -top-10 w-full text-center text-electric-blue orbitron font-bold text-lg">
                  Marketing<br /><span className="text-white text-xl">30%</span>
                </div>
              </div>
              {/* Burn bar */}
              <div className={`relative w-1/5 rounded-t-lg bg-toxic-green transition-all duration-1000 ease-out ${isVisible ? 'h-1/5' : 'h-0'}`}>
                <div className="absolute -top-10 w-full text-center text-toxic-green orbitron font-bold text-lg">
                  Burn<br /><span className="text-white text-xl">20%</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Contract Address */}
        <div className="mt-16 bg-black/50 backdrop-blur-lg border border-electric-blue/40 rounded-xl p-8 shadow-neon-blue max-w-3xl mx-auto">
          <h3 className="orbitron text-3xl mb-6 text-electric-blue text-center">Contract Address</h3>
          <div className="bg-black/70 p-4 rounded text-center overflow-x-auto">
            <code className="text-neon-purple text-base break-all select-all cursor-pointer">
              0xDEAD000000000000000000000000000000000PAI
            </code>
          </div>
          <p className="mt-4 text-center text-white/70 italic text-sm">Contract will be deployed at launch 🚀</p>
        </div>
      </div>
    </section>
  );
};

export default Tokenomics;
