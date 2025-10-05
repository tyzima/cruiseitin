
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white mt-12">
      <div className="max-w-2xl mx-auto p-4 text-center text-sm">
        <p>&copy; {new Date().getFullYear()} Cruise Itinerary. All rights reserved.</p>
        <p className="text-gray-400 mt-1">Bon Voyage!</p>
      </div>
    </footer>
  );
};

export default Footer;
