import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

interface HeaderProps {
  onNavigate: (page: 'home' | 'about') => void;
}

const Header: React.FC<HeaderProps> = ({ onNavigate }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNav = (page: 'home' | 'about') => {
    onNavigate(page);
    setMobileMenuOpen(false);
  };

  return (
    <header className={`sticky top-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-primary/95 backdrop-blur-md border-b border-secondary py-3' : 'bg-primary py-5 border-b border-transparent'}`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        <div 
          className="text-2xl font-bold text-accent tracking-tight cursor-pointer"
          onClick={() => handleNav('home')}
        >
          CatalystPRO
        </div>
        
        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#features" onClick={() => handleNav('home')} className="text-textLight hover:text-accent transition-colors text-sm font-medium">Features</a>
          <a href="#enterprise" onClick={() => handleNav('home')} className="text-textLight hover:text-accent transition-colors text-sm font-medium">Enterprise</a>
          <a href="#pricing" onClick={() => handleNav('home')} className="text-textLight hover:text-accent transition-colors text-sm font-medium">Pricing</a>
        </nav>

        <div className="hidden md:flex items-center space-x-6">
          <button onClick={() => handleNav('about')} className="text-textLight hover:text-white font-medium text-sm">About Us</button>
          <a href="#" className="text-textLight hover:text-white font-medium text-sm">Log In</a>
          <a href="#pricing" onClick={() => handleNav('home')} className="bg-accent text-primary px-5 py-2.5 rounded font-bold text-sm hover:opacity-90 transition-opacity">Start Free</a>
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden text-textLight" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-secondary border-b border-gray-800 absolute w-full top-full left-0 p-4 flex flex-col space-y-4 shadow-xl">
          <a href="#features" className="text-textLight hover:text-accent" onClick={() => handleNav('home')}>Features</a>
          <a href="#enterprise" className="text-textLight hover:text-accent" onClick={() => handleNav('home')}>Enterprise</a>
          <a href="#pricing" className="text-textLight hover:text-accent" onClick={() => handleNav('home')}>Pricing</a>
          <button className="text-textLight hover:text-accent text-left w-full" onClick={() => handleNav('about')}>About Us</button>
          <hr className="border-gray-700" />
          <a href="#" className="text-textLight text-center py-2">Log In</a>
          <a href="#pricing" onClick={() => handleNav('home')} className="bg-accent text-primary text-center py-3 rounded font-bold">Start Free</a>
        </div>
      )}
    </header>
  );
};

export default Header;