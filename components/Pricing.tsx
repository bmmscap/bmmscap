import React from 'react';
import { Check } from 'lucide-react';

const Pricing: React.FC = () => {
  return (
    <section id="pricing" className="py-24 px-6 bg-primary">
      <div className="container mx-auto max-w-6xl text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">The right plan for every vision</h2>
        <p className="text-textMuted text-xl mb-16">From solo founders to global enterprises. Start free, then scale as you grow.</p>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
          
          {/* Free Tier */}
          <div className="bg-secondary p-8 rounded-xl border border-gray-800 text-left relative hover:border-gray-600 transition-colors">
            <h4 className="text-2xl font-bold text-accent mb-2">Validate</h4>
            <h5 className="text-white font-medium mb-6 min-h-[48px]">For entrepreneurs validating an idea.</h5>
            <div className="flex items-baseline mb-2">
                <span className="text-5xl font-bold text-white">$0</span>
                <span className="text-accent ml-2 font-medium">/ forever</span>
            </div>
            
            <ul className="space-y-4 my-8 border-t border-dashed border-gray-700 pt-8">
                {['Conversational AI Planner', '1 Business Plan', 'Standard Presentations', 'Basic Execution Tracking'].map((item, i) => (
                    <li key={i} className="flex items-start text-textMuted">
                        <Check size={18} className="text-accent mr-2 mt-1 flex-shrink-0" />
                        <span>{item}</span>
                    </li>
                ))}
            </ul>
            
            <a href="#" className="block w-full text-center bg-[#333] text-white py-3 rounded-lg font-bold hover:bg-white hover:text-black transition-colors">
                Start for Free
            </a>
          </div>

          {/* Scale Tier - Highlighted */}
          <div className="bg-secondary p-8 rounded-xl border-2 border-accent text-left relative transform md:-translate-y-4 shadow-[0_0_20px_rgba(255,105,180,0.15)] z-10">
            <div className="absolute top-0 right-0 bg-accent text-primary px-4 py-1 rounded-bl-xl rounded-tr-lg font-bold text-sm">Most Popular</div>
            <h4 className="text-2xl font-bold text-accent mb-2">Scale</h4>
            <h5 className="text-white font-medium mb-6 min-h-[48px]">For small businesses ready to scale and seek funding.</h5>
            <div className="flex items-baseline mb-2">
                <span className="text-5xl font-bold text-white">$79</span>
                <span className="text-accent ml-2 font-medium">/ month</span>
            </div>
            
            <ul className="space-y-4 my-8 border-t border-dashed border-gray-700 pt-8">
                {[
                    'All Validate Features', 
                    'Unlimited "Living" Plans', 
                    'Adaptive Presentations', 
                    'Scenario Planning', 
                    <strong className="text-white" key="imn">Investor Matching Network</strong>
                ].map((item, i) => (
                    <li key={i} className="flex items-start text-textMuted">
                        <Check size={18} className="text-accent mr-2 mt-1 flex-shrink-0" />
                        <span>{item}</span>
                    </li>
                ))}
            </ul>
            
            <a href="#" className="block w-full text-center bg-accent text-primary py-4 rounded-lg font-bold hover:opacity-90 transition-opacity text-lg shadow-lg">
                Start 14-Day Free Trial
            </a>
          </div>

          {/* Enterprise Tier */}
          <div className="bg-secondary p-8 rounded-xl border border-gray-800 text-left relative hover:border-gray-600 transition-colors">
            <h4 className="text-2xl font-bold text-accent mb-2">Transform</h4>
            <h5 className="text-white font-medium mb-6 min-h-[48px]">For VCs, accelerators, and teams seeking transformation.</h5>
            <div className="flex items-baseline mb-2">
                <span className="text-4xl font-bold text-white">Custom</span>
                <span className="text-accent ml-2 font-medium">/ annual</span>
            </div>
            
            <ul className="space-y-4 my-8 border-t border-dashed border-gray-700 pt-8">
                {[
                    'All Scale Features', 
                    'White-Label Platform', 
                    'Portfolio Management Tools', 
                    'Dedicated Support & Onboarding',
                    'Optional BMMS Capital Advisory'
                ].map((item, i) => (
                    <li key={i} className="flex items-start text-textMuted">
                        <Check size={18} className="text-accent mr-2 mt-1 flex-shrink-0" />
                        <span>{item}</span>
                    </li>
                ))}
            </ul>
            
            <a href="#enterprise-contact" className="block w-full text-center bg-[#333] text-white py-3 rounded-lg font-bold hover:bg-white hover:text-black transition-colors">
                Contact Sales
            </a>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Pricing;