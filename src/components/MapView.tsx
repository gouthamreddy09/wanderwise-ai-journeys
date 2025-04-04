
import React from 'react';
import { Compass, Navigation } from 'lucide-react';

const MapView = () => {
  return (
    <div className="rounded-xl overflow-hidden border border-gray-200 bg-gray-50 shadow-md">
      <div className="p-4 bg-white border-b border-gray-200">
        <h3 className="text-lg font-semibold text-gray-800 flex items-center">
          <Navigation className="mr-2 h-5 w-5 text-travel-500" />
          Interactive Map View
        </h3>
      </div>
      <div className="relative h-[400px] w-full">
        {/* Map Placeholder - In a real app, this would be a real map integration */}
        <div className="absolute inset-0 bg-travel-50 flex flex-col items-center justify-center">
          <Compass className="h-16 w-16 text-travel-300 mb-4" />
          <p className="text-travel-600 text-center max-w-md px-4">
            Interactive map showing your entire itinerary with points of interest, routes, and travel times.
          </p>
        </div>
        
        {/* Sample Map Markers */}
        <div className="absolute top-1/4 left-1/3 h-4 w-4 bg-travel-500 rounded-full animate-pulse"></div>
        <div className="absolute top-1/2 left-1/2 h-4 w-4 bg-travel-500 rounded-full animate-pulse"></div>
        <div className="absolute top-2/3 left-1/4 h-4 w-4 bg-accent-500 rounded-full animate-pulse"></div>
        
        {/* Sample Path */}
        <svg className="absolute inset-0 w-full h-full" style={{ pointerEvents: 'none' }}>
          <path 
            d="M100,100 C150,150 200,120 250,180 C300,240 350,200 400,270" 
            stroke="#0087e6" 
            strokeWidth="3" 
            strokeDasharray="5,5" 
            fill="none" 
          />
        </svg>
      </div>
    </div>
  );
};

export default MapView;
