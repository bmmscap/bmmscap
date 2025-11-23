import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import DemoSection from './components/DemoSection';
import SocialProof from './components/SocialProof';
import Enterprise from './components/Enterprise';
import Founder from './components/Founder';
import Pricing from './components/Pricing';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-primary text-textLight">
      <Header />
      <main>
        <Hero />
        <Features />
        <DemoSection />
        <SocialProof />
        <Enterprise />
        <Founder />
        <Pricing />
      </main>
      <Footer />
    </div>
  );
};

export default App;