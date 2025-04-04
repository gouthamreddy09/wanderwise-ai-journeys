
import React from 'react';
import { LucideIcon } from 'lucide-react';

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

const FeatureCard = ({ icon: Icon, title, description }: FeatureCardProps) => {
  return (
    <div className="bg-white rounded-xl shadow-md p-6 trip-card border border-gray-100">
      <div className="h-12 w-12 bg-travel-50 rounded-lg flex items-center justify-center mb-4">
        <Icon className="h-6 w-6 text-travel-500" />
      </div>
      <h3 className="text-xl font-semibold mb-2 text-gray-900">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

export default FeatureCard;
