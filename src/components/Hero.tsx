
import React from 'react';
import { Button } from "@/components/ui/button";
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <div className="relative h-screen flex items-center">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 bg-hero-pattern bg-cover bg-center">
        <div className="absolute inset-0 bg-travel-900/40 backdrop-blur-[2px]"></div>
      </div>
      
      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
            Discover Your Perfect Journey with AI
          </h1>
          <p className="text-xl text-white/90 mb-8">
            WanderWise creates personalized travel itineraries tailored to your preferences,
            budget, and schedule using advanced AI technology.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button className="bg-travel-500 hover:bg-travel-600 text-white text-lg py-6 px-8 rounded-md">
              Plan Your Trip
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button variant="outline" className="bg-white/10 backdrop-blur-sm text-white hover:bg-white/20 border-white/30 text-lg py-6 px-8 rounded-md">
              Explore Destinations
            </Button>
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center">
        <span className="text-white text-sm mb-2">Scroll to discover</span>
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center pt-2">
          <div className="w-1 h-2 bg-white rounded-full animate-float"></div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
