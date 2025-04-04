
import React from 'react';
import { Globe } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-travel-700 text-white pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Globe className="h-6 w-6 text-white" />
              <span className="text-xl font-bold">WanderWise</span>
            </div>
            <p className="text-travel-100 mb-4">
              AI-powered travel planning that creates personalized itineraries tailored to your preferences.
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-bold mb-4">Features</h4>
            <ul className="space-y-2 text-travel-100">
              <li><a href="#" className="hover:text-white transition-colors">AI Itineraries</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Budget Planning</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Weather Integration</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Local Recommendations</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-bold mb-4">Company</h4>
            <ul className="space-y-2 text-travel-100">
              <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Press</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-bold mb-4">Legal</h4>
            <ul className="space-y-2 text-travel-100">
              <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Terms of Service</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Cookie Policy</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-travel-600 mt-8 pt-6 text-center text-travel-200 text-sm">
          <p>© {new Date().getFullYear()} WanderWise AI Journeys. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
