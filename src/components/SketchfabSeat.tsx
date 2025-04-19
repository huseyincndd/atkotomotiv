'use client';

import React from 'react';

type SketchfabSeatProps = {
  showControls?: boolean;
};

const SketchfabSeat: React.FC<SketchfabSeatProps> = ({ 
  showControls = false
}) => {
  return (
    <div className="relative">
      <div className="w-full aspect-square rounded-3xl overflow-hidden shadow-lg">
        {/* Doğrudan Sketchfab Embed Kodu */}
        <div className="sketchfab-embed-wrapper h-full w-full"> 
          <iframe 
            title="Driver seat Pilot with air suspension" 
            className="w-full h-full"
            frameBorder="0" 
            allowFullScreen={true}
            allow="autoplay; fullscreen; xr-spatial-tracking" 
            src={`https://sketchfab.com/models/b6cd4493fff547af8a87316952a51e82/embed?autostart=1&ui_controls=${showControls ? 1 : 0}&ui_infos=0&ui_watermark=0&autospin=1&autorotate=1&ui_hint=0`}
          />
        </div>
      </div>
    </div>
  );
};

export default SketchfabSeat; 