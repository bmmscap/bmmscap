import React from 'react';
import { Quote } from 'lucide-react';

const SocialProof: React.FC = () => {
  return (
    <section className="py-20 px-6 bg-secondary text-center">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-3xl font-bold mb-12">Trusted by Visionaries</h2>
        
        <div className="relative">
          <Quote className="absolute -top-8 -left-4 text-accent opacity-20 w-16 h-16 transform -scale-x-100" />
          <blockquote className="text-2xl md:text-3xl font-serif italic text-white leading-relaxed mb-8 relative z-10">
            "CatalystPRO is the single most valuable tool we've added to our accelerator portfolio. It turns an idea into an investor-ready strategy in minutes."
          </blockquote>
        </div>
        
        <cite className="block text-accent font-bold text-lg not-italic mb-12">
          — Sarah Jenkins, Partner at Zenith Ventures
        </cite>

        <div className="bg-[#151515] rounded-lg p-8 border border-dashed border-gray-800 flex flex-wrap justify-center items-center gap-12 opacity-60 hover:opacity-100 transition-opacity">
           {/* Placeholder logos using text for simplicity as per requirements */}
           <span className="text-xl font-bold tracking-widest text-gray-500">SEQUOIA</span>
           <span className="text-xl font-bold tracking-widest text-gray-500">ANDREESSEN</span>
           <span className="text-xl font-bold tracking-widest text-gray-500">Y COMBINATOR</span>
           <span className="text-xl font-bold tracking-widest text-gray-500">TECHSTARS</span>
        </div>
      </div>
    </section>
  );
};

export default SocialProof;