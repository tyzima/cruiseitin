
import React from 'react';
import { ShipIcon } from './ui/Icons';

const Header: React.FC = () => {
  return (
    <header className="bg-white shadow-sm sticky top-0 z-10">
      <div className="max-w-2xl mx-auto p-4 flex items-center space-x-3">
        <ShipIcon className="w-8 h-8 text-blue-600" />
        <span className="text-xl font-bold text-gray-800 tracking-tight">Cruise Planner</span>
      </div>
    </header>
  );
};

export default Header;
