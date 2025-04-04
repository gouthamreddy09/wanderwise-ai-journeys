
import React from 'react';
import { Globe, Menu, X } from 'lucide-react';
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  
  return (
    <nav className="w-full bg-white/90 backdrop-blur-sm py-4 fixed top-0 z-40 shadow-sm">
      <div className="container mx-auto flex items-center justify-between px-4">
        <div className="flex items-center space-x-2">
          <Globe className="h-6 w-6 text-travel-500" />
          <span className="text-xl font-bold text-travel-700">WanderWise</span>
        </div>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <a href="#features" className="text-travel-700 hover:text-travel-500 transition-colors">Features</a>
          <a href="#how-it-works" className="text-travel-700 hover:text-travel-500 transition-colors">How It Works</a>
          <a href="#destinations" className="text-travel-700 hover:text-travel-500 transition-colors">Destinations</a>
          <Button className="bg-travel-500 hover:bg-travel-600 text-white">Get Started</Button>
        </div>
        
        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-travel-700">
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
      
      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden fixed inset-0 top-16 bg-white z-30 p-4">
          <div className="flex flex-col space-y-6 items-center text-center">
            <a href="#features" className="text-travel-700 text-lg font-medium py-2" onClick={() => setIsMenuOpen(false)}>Features</a>
            <a href="#how-it-works" className="text-travel-700 text-lg font-medium py-2" onClick={() => setIsMenuOpen(false)}>How It Works</a>
            <a href="#destinations" className="text-travel-700 text-lg font-medium py-2" onClick={() => setIsMenuOpen(false)}>Destinations</a>
            <Button className="bg-travel-500 hover:bg-travel-600 text-white w-full" onClick={() => setIsMenuOpen(false)}>Get Started</Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
