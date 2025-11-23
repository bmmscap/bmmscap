import React from 'react';
import { Play } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="pt-20 pb-20 px-6 text-center bg-primary relative overflow-hidden">
      {/* Background Gradient Blob for aesthetics */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-accent/5 rounded-full blur-3xl -z-10 pointer-events-none"></div>

      <div className="container mx-auto max-w-5xl">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
          Stop writing static plans. <br />
          Start building a <strong className="text-accent">living strategy.</strong>
        </h1>
        <p className="text-textMuted text-lg md:text-xl max-w-3xl mx-auto mb-12 leading-relaxed">
          This isn't another template. This is a conversational AI strategist, powered by 30 years of institutional expertise. <strong className="text-white">Get real-time alerts on market news and competitor moves.</strong> Speak your vision. Get your plan.
        </p>

        <div className="max-w-4xl mx-auto mb-12 group cursor-pointer">
          <div className="bg-secondary border-[3px] border-accent/80 h-64 md:h-[450px] rounded-xl flex flex-col justify-center items-center relative overflow-hidden hover:border-accent transition-colors shadow-[0_0_30px_rgba(255,105,180,0.15)]">
            <div className="absolute inset-0 bg-black/40 z-0"></div>
            <div className="z-10 bg-accent/90 p-4 rounded-full mb-6 group-hover:scale-110 transition-transform duration-300">
              <Play fill="black" stroke="black" size={32} className="ml-1" />
            </div>
            <span className="z-10 text-white font-bold text-lg md:text-2xl px-4">How CatalystPRO Gets You Funded. (2 Min Demo)</span>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
          <a href="#pricing" className="bg-accent text-primary px-8 py-4 rounded-lg font-bold text-lg hover:opacity-90 transition-all w-full sm:w-auto shadow-[0_0_15px_rgba(255,105,180,0.4)]">
            Start Your Free Plan
          </a>
          <a href="#enterprise" className="border-2 border-accent text-accent px-8 py-4 rounded-lg font-bold text-lg hover:bg-accent hover:text-primary transition-all w-full sm:w-auto">
            Book an Enterprise Demo
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;