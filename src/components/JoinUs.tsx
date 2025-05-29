import React, { useEffect, useRef, useState } from 'react';
import GlitchText from './ui/GlitchText';
import NeonButton from './ui/NeonButton';

const JoinUs: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
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
      id="join"
      ref={sectionRef}
      className="py-20 relative transition-all duration-1000 transform translate-y-10 opacity-0"
    >
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-black/95 to-black pointer-events-none"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="orbitron font-bold text-3xl md:text-4xl mb-6">
            <GlitchText text="Join The Degen Army" className="text-neon-purple" />
          </h2>

          <p className="text-xl mb-12 max-w-2xl mx-auto text-white/80">
            Don't miss your chance to be part of the most hyped community in crypto.
            FOMO in now before your friends do! 🔥
          </p>

          <div className="flex flex-wrap justify-center gap-8 mb-16">
            {/* Telegram */}
            <a
              href="#"
              className="group bg-black/40 backdrop-blur-md border border-electric-blue/30 rounded-lg p-6 w-40 h-40 flex flex-col items-center justify-center hover:border-electric-blue hover:shadow-neon-blue transition-all duration-300"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="40"
                height="40"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-electric-blue group-hover:scale-110 transition-transform duration-300"
              >
                <path d="m22 2-7 20-4-9-9-4Z" />
                <path d="M22 2 11 13" />
              </svg>
              <span className="orbitron mt-4 text-electric-blue">Telegram</span>
              <span className="text-xs text-white/60 mt-1">10k+ members</span>
            </a>

            {/* Twitter */}
            <a
              href="#"
              className="group bg-black/40 backdrop-blur-md border border-neon-purple/30 rounded-lg p-6 w-40 h-40 flex flex-col items-center justify-center hover:border-neon-purple hover:shadow-neon-purple transition-all duration-300"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="40"
                height="40"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-neon-purple group-hover:scale-110 transition-transform duration-300"
              >
                <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
              </svg>
              <span className="orbitron mt-4 text-neon-purple">Twitter</span>
              <span className="text-xs text-white/60 mt-1">5k+ followers</span>
            </a>

            {/* Discord */}
            <a
              href="#"
              className="group bg-black/40 backdrop-blur-md border border-toxic-green/30 rounded-lg p-6 w-40 h-40 flex flex-col items-center justify-center hover:border-toxic-green hover:shadow-neon-green transition-all duration-300"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="40"
                height="40"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-toxic-green group-hover:scale-110 transition-transform duration-300"
              >
                <circle cx="12" cy="12" r="10" />
                <circle cx="12" cy="12" r="4" />
                <line x1="4.93" y1="4.93" x2="9.17" y2="9.17" />
                <line x1="14.83" y1="14.83" x2="19.07" y2="19.07" />
                <line x1="14.83" y1="9.17" x2="19.07" y2="4.93" />
                <line x1="14.83" y1="9.17" x2="18.36" y2="5.64" />
                <line x1="4.93" y1="19.07" x2="9.17" y2="14.83" />
              </svg>
              <span className="orbitron mt-4 text-toxic-green">Discord</span>
              <span className="text-xs text-white/60 mt-1">7k+ degens</span>
            </a>
          </div>

          <div className="max-w-2xl mx-auto">
            <h3 className="orbitron text-2xl mb-6 text-electric-blue">
              Ready to Ape In?
            </h3>

            <NeonButton className="w-full orbitron text-lg">
              Buy $PAI Now 🚀
            </NeonButton>

            <p className="text-white/60 text-sm mt-4">
              Don't wait until we 100x or you'll be the guy who buys the top!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default JoinUs;
