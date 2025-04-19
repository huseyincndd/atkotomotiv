"use client";

import React from 'react';
import dynamic from 'next/dynamic';

// 3D model bileşenini dinamik olarak import edelim
const ChairModel = dynamic(() => import('./ChairModel'), { 
  ssr: false,
  loading: () => (
    <div className="aspect-square bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl animate-pulse flex items-center justify-center">
      <p className="text-blue-600 font-medium">3D Model Yükleniyor...</p>
    </div>
  )
});

// Tip tanımlamaları
type SeatProps = {
  model: string;
  color: string;
  material: string;
  features: string[];
};

type SeatConfiguratorProps = {
  seatProps: SeatProps;
};

const SeatConfigurator: React.FC<SeatConfiguratorProps> = ({ seatProps }) => {
  // Koltuk modelini seçerek render et
  return (
    <div className="relative h-[500px] w-full">
      <ChairModel 
        color={seatProps.color} 
        material={seatProps.material} 
      />
      
      {/* Seçili özellikler badge'leri */}
      <div className="absolute bottom-4 left-4 flex flex-wrap gap-2">
        {seatProps.features.map((feature, index) => (
          <div 
            key={index}
            className="bg-white/80 backdrop-blur-sm text-blue-800 text-xs font-medium px-2 py-1 rounded-full"
          >
            {feature}
          </div>
        ))}
      </div>
      
      {/* Model bilgisi */}
      <div className="absolute top-4 left-4 bg-white/80 backdrop-blur-sm py-2 px-4 rounded-full shadow-md">
        <p className="text-blue-800 font-medium text-sm">{seatProps.model}</p>
      </div>
    </div>
  );
};

export default SeatConfigurator; 