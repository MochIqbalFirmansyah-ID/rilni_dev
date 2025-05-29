import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import Logo from './Logo';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-black/80 backdrop-blur-md py-2' : 'bg-transparent py-4'
    }`}>
      <div className="container mx-auto px-4 flex justify-between items-center">
        <a href="#" className="flex items-center gap-3">
          <Logo />
          <span className="orbitron font-bold text-2xl text-white">
            $RLINI<span className="text-neon-purple"></span>
          </span>
        </a>
        
        <div className="hidden md:flex items-center gap-8">
          <a href="#about" className="orbitron text-white hover:text-neon-purple transition-colors">About</a>
          <a href="#tokenomics" className="orbitron text-white hover:text-electric-blue transition-colors">Tokenomics</a>
          <a href="#roadmap" className="orbitron text-white hover:text-toxic-green transition-colors">Roadmap</a>
          <a href="#join" className="orbitron text-white hover:text-neon-purple transition-colors">Community</a>
        </div>
        
        <button 
          className="md:hidden text-white"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      
      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-black/95 backdrop-blur-md">
          <div className="container mx-auto px-4 py-4 flex flex-col gap-4">
            <a 
              href="#about" 
              className="orbitron text-white py-2 hover:text-neon-purple transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </a>
            <a 
              href="#tokenomics" 
              className="orbitron text-white py-2 hover:text-electric-blue transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Tokenomics
            </a>
            <a 
              href="#roadmap" 
              className="orbitron text-white py-2 hover:text-toxic-green transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Roadmap
            </a>
            <a 
              href="#join" 
              className="orbitron text-white py-2 hover:text-neon-purple transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Community
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;