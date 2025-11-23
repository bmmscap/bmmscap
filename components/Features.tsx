import React from 'react';
import { Mic, Zap, Users, Target } from 'lucide-react';

const Features: React.FC = () => {
  const features = [
    {
      icon: <Mic className="w-8 h-8 text-accent mb-4" />,
      title: "Conversational AI",
      highlight: "Speak Your Strategy.",
      desc: "Natural language and voice-first interface. Stop filling boxes and start having a strategic conversation with our Gemini-powered AI."
    },
    {
      icon: <Zap className="w-8 h-8 text-accent mb-4" />,
      title: "Continuous Intelligence",
      highlight: "Never Be Blindsided.",
      desc: "Our AI constantly monitors market news and competitor moves, alerting you to threats and opportunities in real-time."
    },
    {
      icon: <Users className="w-8 h-8 text-accent mb-4" />,
      title: "Investor Matching",
      highlight: "Fund Your Vision Faster.",
      desc: "Skip the cold outreach. We automatically match you with pre-vetted VCs and angel investors from our institutional network."
    },
    {
      icon: <Target className="w-8 h-8 text-accent mb-4" />,
      title: "Execution Tracking",
      highlight: "From Strategy to Scorecard.",
      desc: "Our platform is your single source of truth, linking your strategic goals directly to measurable tasks, milestones, and KPIs."
    }
  ];

  return (
    <section id="features" className="py-20 px-6 bg-primary">
      <div className="container mx-auto max-w-6xl text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">Your Business Plan, Reimagined</h2>
        <p className="text-textMuted text-lg max-w-2xl mx-auto mb-16">
          Our platform is built on core differentiators that save you time, get you funded faster, and help you build a truly resilient business.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-left">
          {features.map((feature, idx) => (
            <div key={idx} className="bg-secondary p-8 rounded-xl border border-gray-800 hover:border-accent/30 transition-colors h-full">
              {feature.icon}
              <h3 className="text-accent text-xl font-bold mb-3">{feature.title}</h3>
              <p className="text-textMuted leading-relaxed">
                <strong className="text-white block mb-2">{feature.highlight}</strong>
                {feature.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;