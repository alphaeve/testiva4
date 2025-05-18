import React from 'react';
import { Compass } from 'lucide-react';

interface LogoProps {
  light?: boolean;
}

const Logo: React.FC<LogoProps> = ({ light = false }) => {
  return (
    <div className="flex items-center">
      <Compass className={`h-8 w-8 ${light ? 'text-white' : 'text-blue-600'}`} />
      <span className={`ml-2 text-xl font-bold ${light ? 'text-white' : 'text-gray-900'}`}>
        Testiva
      </span>
    </div>
  );
};

export default Logo;