
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Clock, MapPin, Star, Umbrella, Utensils } from 'lucide-react';
import { Separator } from "@/components/ui/separator";

const ItineraryPreview = () => {
  return (
    <Card className="border-travel-100">
      <CardHeader className="bg-gradient-travel text-white">
        <CardTitle className="text-xl md:text-2xl font-bold">Paris 3-Day Itinerary</CardTitle>
        <div className="flex items-center text-sm text-white/80">
          <Clock className="h-4 w-4 mr-1" />
          <span>May 15-18, 2025</span>
          <span className="mx-2">•</span>
          <MapPin className="h-4 w-4 mr-1" />
          <span>Paris, France</span>
        </div>
      </CardHeader>
      <CardContent className="p-0">
        {/* Day 1 */}
        <div className="p-4 border-b border-gray-100">
          <h3 className="text-lg font-semibold flex items-center mb-3 text-travel-700">
            Day 1: Iconic Paris
          </h3>
          
          <div className="space-y-4">
            {/* Morning */}
            <div>
              <h4 className="text-sm font-medium text-gray-500 mb-2">MORNING</h4>
              <div className="grid grid-cols-1 md:grid-cols-12 gap-3">
                <div className="md:col-span-7 flex space-x-3">
                  <div className="w-12 h-12 rounded-lg bg-travel-50 flex-shrink-0 flex items-center justify-center">
                    <Utensils className="h-5 w-5 text-travel-500" />
                  </div>
                  <div>
                    <p className="font-medium">Breakfast at Café de Flore</p>
                    <div className="flex items-center mt-1 text-sm text-gray-500">
                      <Star className="h-3 w-3 fill-amber-400 text-amber-400 mr-1" />
                      <span>4.6</span>
                      <span className="mx-2">•</span>
                      <span>Traditional Café</span>
                    </div>
                  </div>
                </div>
                <div className="md:col-span-5 md:text-right text-sm text-gray-500">
                  <p>8:30 AM - 10:00 AM</p>
                  <p>€25 per person</p>
                </div>
              </div>
            </div>
            
            {/* Afternoon */}
            <div>
              <h4 className="text-sm font-medium text-gray-500 mb-2">AFTERNOON</h4>
              <div className="grid grid-cols-1 md:grid-cols-12 gap-3">
                <div className="md:col-span-7 flex space-x-3">
                  <div className="w-12 h-12 rounded-lg bg-accent-50 flex-shrink-0 flex items-center justify-center">
                    <MapPin className="h-5 w-5 text-accent-500" />
                  </div>
                  <div>
                    <p className="font-medium">Eiffel Tower Visit</p>
                    <div className="flex items-center mt-1 text-sm text-gray-500">
                      <Star className="h-3 w-3 fill-amber-400 text-amber-400 mr-1" />
                      <span>4.8</span>
                      <span className="mx-2">•</span>
                      <span>Landmark</span>
                    </div>
                  </div>
                </div>
                <div className="md:col-span-5 md:text-right text-sm text-gray-500">
                  <p>1:00 PM - 3:30 PM</p>
                  <p>€36 per person</p>
                </div>
              </div>
            </div>
            
            {/* Evening */}
            <div>
              <h4 className="text-sm font-medium text-gray-500 mb-2">EVENING</h4>
              <div className="grid grid-cols-1 md:grid-cols-12 gap-3">
                <div className="md:col-span-7 flex space-x-3">
                  <div className="w-12 h-12 rounded-lg bg-travel-50 flex-shrink-0 flex items-center justify-center">
                    <Utensils className="h-5 w-5 text-travel-500" />
                  </div>
                  <div>
                    <p className="font-medium">Dinner at Le Petit Chef</p>
                    <div className="flex items-center mt-1 text-sm text-gray-500">
                      <Star className="h-3 w-3 fill-amber-400 text-amber-400 mr-1" />
                      <span>4.7</span>
                      <span className="mx-2">•</span>
                      <span>French Cuisine</span>
                    </div>
                  </div>
                </div>
                <div className="md:col-span-5 md:text-right text-sm text-gray-500">
                  <p>7:30 PM - 9:30 PM</p>
                  <p>€85 per person</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Day 2 Preview */}
        <div className="p-4 border-b border-gray-100">
          <h3 className="text-lg font-semibold flex items-center mb-3 text-travel-700">
            Day 2: Artistic Paris
          </h3>
          <p className="text-gray-500 text-sm">
            Explore the Louvre Museum, stroll through Montmartre, and enjoy a Seine River cruise at sunset.
          </p>
        </div>
        
        {/* Day 3 Preview */}
        <div className="p-4">
          <h3 className="text-lg font-semibold flex items-center mb-3 text-travel-700">
            Day 3: Hidden Gems & Relaxation
          </h3>
          <p className="text-gray-500 text-sm">
            Visit Luxembourg Gardens, discover local markets, and enjoy the vibrant Le Marais district.
          </p>
        </div>
      </CardContent>
    </Card>
  );
};

export default ItineraryPreview;
