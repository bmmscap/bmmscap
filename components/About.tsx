import React from 'react';

const About: React.FC = () => {
  return (
    <section className="pt-32 pb-20 px-6 bg-primary min-h-screen">
      <div className="container mx-auto max-w-4xl">
        <h1 className="text-4xl md:text-6xl font-bold mb-10 text-white">
          About <span className="text-accent">CatalystPRO</span>
        </h1>
        
        <div className="space-y-8 text-lg text-textMuted leading-relaxed">
          <p className="text-xl text-white font-medium">
            We are building the living nervous system for modern businesses.
          </p>
          
          <p>
            CatalystPRO was born from a simple observation: <strong className="text-white">Strategic planning is broken.</strong> Founders spend weeks writing static business plans that sit in a drawer, obsolete the moment they are printed.
          </p>

          <p>
            Brian A. Martucci, our founder and former Global Managing Director at Bloomberg and CNBC, realized that businesses needed more than a document—they needed a <em className="text-white not-italic border-b border-accent">strategist</em>. One that never sleeps, monitors every market shift, and adapts instantly.
          </p>

          <div className="mt-12">
             <h2 className="text-2xl font-bold text-white mb-6">Our Mission</h2>
             <p>
                To democratize institutional-grade strategic intelligence. We believe every founder, from the garage to the corner office, deserves the same level of strategic rigor previously reserved for Fortune 500 boardrooms.
             </p>
          </div>
          
          <div className="mt-12">
             <h2 className="text-2xl font-bold text-white mb-6">Why Us?</h2>
             <ul className="space-y-4 list-disc pl-5">
               <li><strong className="text-white">Experience:</strong> Built on 30 years of financial media expertise.</li>
               <li><strong className="text-white">Technology:</strong> Powered by Gemini 1.5 Pro, the most advanced context-aware AI.</li>
               <li><strong className="text-white">Network:</strong> Direct pipelines to qualified VC and angel networks.</li>
             </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;