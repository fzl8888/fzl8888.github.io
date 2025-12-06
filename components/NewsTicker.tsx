import React from 'react';
import { NewsItem } from '../types';

interface NewsTickerProps {
  news: NewsItem[];
}

export const NewsTicker: React.FC<NewsTickerProps> = ({ news }) => {
  return (
    <div className="mt-8 border-l-2 border-slate-200 pl-6">
      <h3 className="text-sm font-bold uppercase tracking-wider text-slate-500 mb-4 flex items-center gap-2">
        <span>📰 Recent News</span>
        <span className="text-xs font-normal text-slate-400 normal-case">(Scroll for more ↓)</span>
      </h3>
      <div className="h-48 overflow-y-auto pr-2 custom-scrollbar space-y-4">
        {news.map((item, index) => (
          <div key={index} className="text-sm">
            <div className="text-slate-400 text-xs font-mono mb-1">{item.date}</div>
            <div className="text-slate-700 leading-snug">
              {item.type === 'conference' && '✈️ '}
              {item.type === 'award' && '🎉 '}
              {item.type === 'general' && '📢 '}
              {item.content}
            </div>
          </div>
        ))}
      </div>
      <style>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 4px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: #f1f5f9;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: #cbd5e1;
          border-radius: 4px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: #94a3b8;
        }
      `}</style>
    </div>
  );
};