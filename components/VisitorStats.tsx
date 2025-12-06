import React, { useEffect, useRef } from 'react';
//https://clustrmaps.com/site/1c8n4 查看view data
export const VisitorStats: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Check if the container exists and is empty to avoid duplicate scripts
    if (containerRef.current && containerRef.current.childElementCount === 0) {
      const script = document.createElement('script');
      
      // Set the ClustrMaps specific ID
      script.id = "clustrmaps";
      
      // Set your specific source URL
      script.src = "//clustrmaps.com/map_v2.js?d=BvrqfJ_iFitGwQg1JEUMFWdUOSNsrbcZswvS-BWNJtQ&cl=ffffff&w=a";
      
      script.type = "text/javascript";
      
      // Append to the container
      containerRef.current.appendChild(script);
    }
  }, []);

  return (
    <div className="flex flex-col items-center justify-center py-10 bg-slate-50 border-t border-slate-200">
      <h3 className="text-sm font-bold uppercase tracking-wider text-slate-500 mb-6 flex items-center gap-2">
        <span>🌍 Visitor Map</span>
      </h3>
      
      {/* 
         FIX: 
         1. Use w-full and max-w-4xl to ensure the container has actual width 
            so the 'w=a' (adaptive) script works correctly.
         2. Remove 'flex' from this wrapper to prevent content collapse.
      */}
      <div className="w-full max-w-4xl px-4 md:px-0">
        <div 
          ref={containerRef} 
          className="overflow-hidden rounded-xl bg-white p-2 shadow-sm border border-slate-200 mx-auto"
          style={{ minHeight: '300px' }}
        >
          {/* The script will inject the map here */}
        </div>
      </div>
      
      <p className="text-xs text-slate-400 mt-4">
        Showing real-time visits from around the world.
      </p>
    </div>
  );
};