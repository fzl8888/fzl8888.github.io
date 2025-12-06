import React from 'react';
import { PERSONAL_INFO } from '../constants';
import { Download } from 'lucide-react';

export const Navbar: React.FC = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-slate-200 h-16 transition-all duration-300">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-full flex items-center justify-between">
        
        {/* Left: CV Button */}
        <div className="flex-1 flex justify-start">
          <a 
            href={PERSONAL_INFO.cvUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-1.5 text-sm font-medium text-academic-700 bg-slate-100 hover:bg-slate-200 rounded-full transition-colors"
          >
            <Download size={16} />
            <span className="hidden sm:inline">Download</span> CV
          </a>
        </div>

        {/* Center: Name */}
        <div className="flex-1 flex justify-center">
          <span 
            onClick={() => scrollToSection('about')} 
            className="text-lg font-bold tracking-wider text-slate-900 uppercase cursor-pointer hover:text-academic-accent transition-colors"
          >
            {PERSONAL_INFO.name}
          </span>
        </div>

        {/* Right: Navigation Links */}
        <div className="flex-1 flex justify-end gap-3 sm:gap-6 text-sm font-medium text-slate-600">
          {['About', 'Publications', 'Projects', 'Hobbies', 'Contact'].map((item) => (
            <button
              key={item}
              onClick={() => scrollToSection(item.toLowerCase())}
              className="hover:text-academic-accent transition-colors uppercase tracking-wide hidden sm:block first:block"
            >
              {item}
            </button>
          ))}
          
          {/* Mobile Menu Icon Placeholder (Optional for future) - Currently showing key links for mobile */}
        </div>
      </div>
    </nav>
  );
};