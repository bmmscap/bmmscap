import React from 'react';

interface FounderProps {
  onNavigate: (page: 'home' | 'about') => void;
}

const Founder: React.FC<FounderProps> = ({ onNavigate }) => {
  return (
    <section className="py-16 px-6 bg-secondary text-center border-t border-gray-800">
      <div className="container mx-auto max-w-3xl">
        <h2 className="text-2xl font-bold text-white mb-4">Built on Institutional Rigor</h2>
        <p className="text-textMuted text-lg mb-8 leading-relaxed">
          <strong className="text-white">Brian A. Martucci</strong>, former Global Managing Director at Bloomberg and CNBC, saw that most plans were dead on arrival. He built an AI strategist with the rigor of institutional finance and the speed of a global newsroom.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-6">
            <button onClick={() => onNavigate('about')} className="text-accent font-bold hover:underline">Read Brian's Story</button>
            <span className="hidden sm:inline text-gray-600">|</span>
            <a href="#" className="text-accent font-bold hover:underline">Learn about BMMS Capital Advisory Services</a>
        </div>
      </div>
    </section>
  );
};

export default Founder;