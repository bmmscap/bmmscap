import React from 'react';

interface FooterProps {
  onNavigate: (page: 'home' | 'about') => void;
}

const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  return (
    <footer className="bg-secondary text-textMuted py-10 border-t border-gray-800">
      <div className="container mx-auto px-6 text-center">
        <p className="mb-4">&copy; {new Date().getFullYear()} CatalystPRO. All rights reserved.</p>
        <div className="flex justify-center space-x-6 text-sm">
            <a href="#" className="hover:text-accent transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-accent transition-colors">Terms of Service</a>
            <button onClick={() => onNavigate('about')} className="hover:text-accent transition-colors">About Us</button>
            <a href="#" className="hover:text-accent transition-colors">Contact Support</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;