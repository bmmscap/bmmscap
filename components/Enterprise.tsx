import React from 'react';
import { Shield, BarChart3, Settings } from 'lucide-react';

const Enterprise: React.FC = () => {
  return (
    <section id="enterprise" className="py-20 px-6 bg-primary text-center">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-accent font-bold text-sm tracking-widest uppercase mb-2">For VCs & Enterprise</h2>
        <h3 className="text-4xl md:text-5xl font-bold text-white mb-8">The Institutional Standard for <br/>Strategic Planning</h3>
        <p className="text-textMuted text-lg max-w-3xl mx-auto mb-16">
          Stop chasing decks. Standardize your deal flow, portfolio management, and internal strategic planning on a single, intelligent platform.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left mb-16">
            <div className="bg-secondary p-8 rounded-lg border-l-4 border-accent shadow-lg">
                <Settings className="w-10 h-10 text-accent mb-4" />
                <h4 className="text-xl font-bold text-white mb-2">White-Label & Custom AI</h4>
                <p className="text-textMuted text-sm">Deploy your own branded platform, trained on proprietary data for competitive advantage.</p>
            </div>
            <div className="bg-secondary p-8 rounded-lg border-l-4 border-accent shadow-lg">
                <BarChart3 className="w-10 h-10 text-accent mb-4" />
                <h4 className="text-xl font-bold text-white mb-2">Unified Portfolio Mgmt</h4>
                <p className="text-textMuted text-sm">VCs and Accelerators manage entire portfolio strategies and track KPIs from one dashboard.</p>
            </div>
            <div className="bg-secondary p-8 rounded-lg border-l-4 border-accent shadow-lg">
                <Shield className="w-10 h-10 text-accent mb-4" />
                <h4 className="text-xl font-bold text-white mb-2">Enterprise-Grade Security</h4>
                <p className="text-textMuted text-sm">Achieve compliance with SOC 2, GDPR, and CCPA standards, with options for on-prem or private cloud.</p>
            </div>
        </div>

        <a href="#enterprise-contact" className="bg-white text-black px-8 py-4 rounded font-bold text-lg hover:bg-accent hover:text-white transition-colors">
            Request an Enterprise Demo
        </a>
      </div>
    </section>
  );
};

export default Enterprise;