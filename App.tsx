import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import DemoSection from './components/DemoSection';
import SocialProof from './components/SocialProof';
import Enterprise from './components/Enterprise';
import Founder from './components/Founder';
import Pricing from './components/Pricing';
import Footer from './components/Footer';
import About from './components/About';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<'home' | 'about'>('home');

  const navigateTo = (page: 'home' | 'about') => {
    setCurrentPage(page);
    window.scrollTo(0, 0);
  };

  return (
    <div className="min-h-screen bg-primary text-textLight">
      <Header onNavigate={navigateTo} />
      <main>
        {currentPage === 'home' ? (
          <>
            <Hero />
            <Features />
            <DemoSection />
            <SocialProof />
            <Enterprise />
            <Founder onNavigate={navigateTo} />
            <Pricing />
          </>
        ) : (
          <About />
        )}
      </main>
      <Footer onNavigate={navigateTo} />
    </div>
  );
};

export default App;