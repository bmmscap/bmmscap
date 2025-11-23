import React, { useState } from 'react';
import { analyzeBusinessIdea } from '../services/gemini';
import { Sparkles, Loader2, ArrowRight } from 'lucide-react';

const DemoSection: React.FC = () => {
  const [idea, setIdea] = useState('');
  const [analysis, setAnalysis] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleAnalyze = async () => {
    if (!idea.trim()) return;
    
    setIsLoading(true);
    setAnalysis(null);
    
    const result = await analyzeBusinessIdea(idea);
    
    setAnalysis(result);
    setIsLoading(false);
  };

  return (
    <section className="py-20 px-6 bg-gradient-to-b from-primary to-secondary/30 text-center border-t border-secondary">
      <div className="container mx-auto max-w-4xl">
        <div className="inline-flex items-center gap-2 text-accent bg-accent/10 px-4 py-2 rounded-full mb-6 border border-accent/20">
          <Sparkles size={16} />
          <span className="font-bold text-sm tracking-wide uppercase">AI Demo</span>
        </div>
        
        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">Spark Your Strategy</h2>
        <h3 className="text-xl md:text-2xl text-accent font-medium mb-6">Instant Strategy Analysis. Powered by Google's Gemini AI.</h3>
        <p className="text-textMuted text-lg max-w-2xl mx-auto mb-10">
          Get an instant analysis of your business idea—a small preview of the powerful strategic engine inside <strong className="text-white">CatalystPRO</strong>.
        </p>

        <div className="max-w-2xl mx-auto bg-secondary p-2 rounded-lg border border-gray-700 flex flex-col sm:flex-row gap-2 shadow-2xl">
          <input
            type="text"
            value={idea}
            onChange={(e) => setIdea(e.target.value)}
            placeholder="Enter your business idea (e.g., 'Subscription box for eco-friendly dog toys')"
            className="flex-grow bg-[#2c2c2c] text-white px-6 py-4 rounded-md focus:outline-none focus:ring-2 focus:ring-accent/50 placeholder-gray-500"
            onKeyDown={(e) => e.key === 'Enter' && handleAnalyze()}
          />
          <button 
            onClick={handleAnalyze}
            disabled={isLoading || !idea.trim()}
            className="bg-accent text-primary px-8 py-4 rounded-md font-bold hover:bg-white hover:text-black transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 min-w-[160px]"
          >
            {isLoading ? <Loader2 className="animate-spin" /> : <>Analyze <ArrowRight size={18} /></>}
          </button>
        </div>

        {analysis && (
          <div className="mt-10 max-w-3xl mx-auto text-left animate-fade-in bg-secondary/80 border border-accent/30 p-8 rounded-xl backdrop-blur-sm">
            <h4 className="text-accent text-lg font-bold mb-4 border-b border-gray-700 pb-2">Strategic Quick-Look</h4>
            <div className="prose prose-invert prose-p:text-gray-300 prose-headings:text-white max-w-none whitespace-pre-line">
              {analysis}
            </div>
            <div className="mt-6 pt-4 border-t border-gray-700 text-center">
              <p className="text-sm text-gray-500 mb-3">This is just a 150-word preview. The full platform offers deep-dive scenarios and continuous monitoring.</p>
              <a href="#pricing" className="text-accent font-bold hover:underline text-sm">Unlock Full Analysis &rarr;</a>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default DemoSection;