import React, { useEffect, useRef } from 'react';

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
      
      {/* Map Container */}
      <div 
        ref={containerRef} 
        className="flex justify-center items-center overflow-hidden rounded-lg bg-white p-2 shadow-sm hover:shadow-md transition-shadow"
        style={{ minHeight: '150px' }}
      >
        {/* The script will inject the map here */}
      </div>
      
      <p className="text-xs text-slate-400 mt-4">
        Showing real-time visits from around the world.
      </p>
    </div>
  );
};