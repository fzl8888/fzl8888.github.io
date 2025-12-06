import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-50 py-12 mt-20 border-t border-slate-200">
      <div className="max-w-4xl mx-auto px-6 text-center text-slate-500 text-sm">
        <p>&copy; {new Date().getFullYear()} Zhilin Fan. Built with React & Tailwind.</p>
      </div>
    </footer>
  );
};