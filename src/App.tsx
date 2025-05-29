import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Tokenomics from './components/Tokenomics';
import Roadmap from './components/Roadmap';
import JoinUs from './components/JoinUs';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-yellow-custom text-black overflow-x-hidden">
      <Navbar />
      <Hero />
      <About />
      <Footer />
    </div>
  );
}


export default App;