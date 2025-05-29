import React, { useEffect, useRef } from 'react';
import GlitchText from './ui/GlitchText';

const About: React.FC = () => {
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
      id="about"
      ref={sectionRef}
      className="py-20 bg-yellow-custom relative transition-all duration-1000 transform translate-y-10 opacity-0 text-black"
    >
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="orbitron font-bold text-3xl md:text-4xl mb-12 text-center">
            <GlitchText text="About $RLINI" className="text-neon-yellow" />
          </h2>

          <div className="bg-black/20 backdrop-blur-md border border-neon-yellow/30 rounded-lg p-6 md:p-8 shadow-neon-yellow">
            <p className="text-lg mb-6 leading-relaxed">
              🪐 <span className="font-bold">$RLINI</span> is not just another meme coin—it’s a bold movement with its sights set on Mars and beyond. This isn’t hype; it’s a vision fueled by genuine commitment and community trust.
            </p>

            <p className="text-lg mb-6 leading-relaxed">
              Unlike many projects that fade away after launch, the creator of $RLINI never dumped, never rug pulled, and stood firm through it all. A significant portion of the supply was entrusted to{' '}
              <span className="text-electric-yellow font-bold">@TheIntegrityDAO</span>,{' '}
              <span className="text-electric-yellow font-bold">@somehow_dao</span>, and{' '}
              <span className="text-electric-yellow font-bold">@RussellKlein</span>—solid proof of a commitment to transparency, decentralization, and a future that transcends Earth’s boundaries.
            </p>

            <p className="text-lg mb-6 leading-relaxed">
              No false promises, no empty roadmaps full of buzzwords—just authentic vibes, mutual trust, and relentless decentralized hustle. This is about community power and real innovation.
            </p>

            <p className="text-lg mb-6 leading-relaxed">
              Ready to join the journey? Buy here:{' '}
              <a
                href="https://arena.trade/token/0xbbb04d"
                target="_blank"
                rel="noopener noreferrer"
                className="text-neon-yellow underline"
              >
                arena.trade/token/0xbbb04d...
              </a>
            </p>

            <div className="border-l-4 border-electric-yellow pl-4 italic text-electric-yellow">
              DYOR. This is not financial advice—just the raw energy of <span className="font-bold">$RLINI</span>.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
