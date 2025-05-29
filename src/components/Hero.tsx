import React, { useEffect, useState } from 'react';
import NeonButton from './ui/NeonButton';
import AnimatedText from './ui/AnimatedText';
import { Rocket } from 'lucide-react';

const Hero: React.FC = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(true);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16 bg-yellow-300 text-black">
      {/* Background */}
      <div className="absolute inset-0 bg-yellow-300 opacity-90 z-0"></div>
      <div
        className="absolute inset-0 bg-[url('https://images.pexels.com/photos/1169754/pexels-photo-1169754.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')] 
          bg-cover bg-center blur-sm z-[-1] opacity-30"
      ></div>

      {/* Content */}
      <div className="container mx-auto px-4 z-10">
        <div
          className={`max-w-4xl mx-auto text-center transition-all duration-1000 ${
            visible ? 'opacity-100' : 'opacity-0 translate-y-8'
          }`}
        >
          <h1 className="orbitron font-extrabold text-5xl md:text-7xl mb-6 text-black">
            $RLINI
          </h1>

          <div className="h-20 mb-8">
            <AnimatedText
              text="Join the next 1000x ride to the moon 🌕🚀 — powered by degen energy."
              className="text-xl md:text-2xl text-black"
              delay={50}
            />
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              className="w-full sm:w-auto orbitron bg-purple-800 text-white font-semibold px-6 py-3 rounded-lg shadow-lg
                         hover:bg-purple-700 transition-colors duration-300"
            >
              <span className="flex items-center justify-center gap-2">
                BUY $RLINI NOW <Rocket size={18} />
              </span>
            </button>

            <button
              className="w-full sm:w-auto orbitron bg-green-800 text-white font-semibold px-6 py-3 rounded-lg shadow-lg
                         hover:bg-green-700 transition-colors duration-300"
            >
              Read Whitepaper
            </button>
          </div>

          <div className="mt-16 animate-bounce">
            <a href="#about" className="inline-block text-black/60 hover:text-black">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M12 5v14M5 12l7 7 7-7" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
