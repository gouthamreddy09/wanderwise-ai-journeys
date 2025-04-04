
import React from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import FeatureCard from '@/components/FeatureCard';
import TripForm from '@/components/TripForm';
import ItineraryPreview from '@/components/ItineraryPreview';
import MapView from '@/components/MapView';
import Footer from '@/components/Footer';
import { Globe, Clock, CreditCard, Calendar, Map, Search, UserCheck, Compass } from 'lucide-react';

const Index = () => {
  const features = [
    {
      icon: Globe,
      title: "AI-Powered Recommendations",
      description: "Our AI analyzes thousands of destinations to find the perfect match for your preferences."
    },
    {
      icon: Clock,
      title: "Time Optimization",
      description: "Create efficient itineraries that maximize your experiences while respecting your pace."
    },
    {
      icon: CreditCard,
      title: "Budget Management",
      description: "Set your budget and get recommendations that won't break the bank."
    },
    {
      icon: Calendar,
      title: "Real-time Adjustments",
      description: "Modify your plans on the go and get instant updates to your itinerary."
    },
    {
      icon: Map,
      title: "Interactive Maps",
      description: "Visualize your journey with detailed maps showing all points of interest."
    },
    {
      icon: Search,
      title: "Local Insights",
      description: "Discover hidden gems and authentic experiences recommended by locals."
    },
    {
      icon: UserCheck,
      title: "Personalized Experience",
      description: "Your preferences drive every recommendation we make."
    },
    {
      icon: Compass,
      title: "Offline Access",
      description: "Access your itineraries even without internet connection."
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Hero Section */}
      <Hero />
      
      {/* Features Section */}
      <section id="features" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Plan Smarter, Travel Better
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our AI technology analyzes your preferences to create personalized travel experiences that match your unique style.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <FeatureCard 
                key={index} 
                icon={feature.icon} 
                title={feature.title} 
                description={feature.description} 
              />
            ))}
          </div>
        </div>
      </section>
      
      {/* How It Works Section */}
      <section id="how-it-works" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              How WanderWise Works
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Creating your perfect trip is easy with our AI-powered platform
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <TripForm />
            
            <div className="space-y-8">
              <div className="relative pl-12">
                <div className="absolute left-0 top-0 h-10 w-10 rounded-full bg-travel-100 flex items-center justify-center text-travel-600 font-bold">1</div>
                <h3 className="text-xl font-bold mb-2 text-gray-900">Share Your Travel Preferences</h3>
                <p className="text-gray-600">Tell us where you want to go, your travel dates, budget, and what you love to do.</p>
              </div>
              
              <div className="relative pl-12">
                <div className="absolute left-0 top-0 h-10 w-10 rounded-full bg-travel-100 flex items-center justify-center text-travel-600 font-bold">2</div>
                <h3 className="text-xl font-bold mb-2 text-gray-900">Our AI Creates Your Itinerary</h3>
                <p className="text-gray-600">Our advanced AI analyzes thousands of options to build the perfect personalized plan.</p>
              </div>
              
              <div className="relative pl-12">
                <div className="absolute left-0 top-0 h-10 w-10 rounded-full bg-travel-100 flex items-center justify-center text-travel-600 font-bold">3</div>
                <h3 className="text-xl font-bold mb-2 text-gray-900">Review and Customize</h3>
                <p className="text-gray-600">Fine-tune your itinerary with easy adjustments until it's exactly what you want.</p>
              </div>
              
              <div className="relative pl-12">
                <div className="absolute left-0 top-0 h-10 w-10 rounded-full bg-travel-100 flex items-center justify-center text-travel-600 font-bold">4</div>
                <h3 className="text-xl font-bold mb-2 text-gray-900">Enjoy Your Trip</h3>
                <p className="text-gray-600">Access your itinerary anywhere, get real-time updates, and make the most of your travels.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Sample Itinerary Section */}
      <section id="destinations" className="py-20 bg-gradient-travel text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Sample AI-Generated Itinerary
            </h2>
            <p className="text-xl max-w-3xl mx-auto opacity-90">
              See how WanderWise creates personalized travel plans tailored to your preferences
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl shadow-xl overflow-hidden">
              <ItineraryPreview />
            </div>
            
            <div>
              <MapView />
              
              <div className="mt-8 bg-white/10 backdrop-blur-sm rounded-xl p-6">
                <h3 className="text-xl font-bold mb-4">AI Enhancements</h3>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <div className="h-6 w-6 rounded-full bg-white/20 flex-shrink-0 flex items-center justify-center mr-3 mt-0.5">
                      <Clock className="h-3 w-3 text-white" />
                    </div>
                    <p>Optimized timing based on opening hours and crowd levels</p>
                  </li>
                  <li className="flex items-start">
                    <div className="h-6 w-6 rounded-full bg-white/20 flex-shrink-0 flex items-center justify-center mr-3 mt-0.5">
                      <CreditCard className="h-3 w-3 text-white" />
                    </div>
                    <p>Balanced budget allocation for experiences, food, and transportation</p>
                  </li>
                  <li className="flex items-start">
                    <div className="h-6 w-6 rounded-full bg-white/20 flex-shrink-0 flex items-center justify-center mr-3 mt-0.5">
                      <Map className="h-3 w-3 text-white" />
                    </div>
                    <p>Geographic clustering to minimize travel time between attractions</p>
                  </li>
                  <li className="flex items-start">
                    <div className="h-6 w-6 rounded-full bg-white/20 flex-shrink-0 flex items-center justify-center mr-3 mt-0.5">
                      <UserCheck className="h-3 w-3 text-white" />
                    </div>
                    <p>Personalized selections based on your stated preferences and interests</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Ready to Plan Your Next Adventure?
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Let our AI create the perfect itinerary for your dream vacation.
            </p>
            <a 
              href="#how-it-works" 
              className="inline-flex items-center px-8 py-4 bg-travel-500 hover:bg-travel-600 text-white font-medium rounded-lg text-lg transition-colors"
            >
              Start Planning Now
              <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
              </svg>
            </a>
          </div>
        </div>
      </section>
      
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Index;
