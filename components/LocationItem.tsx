import React from 'react';
import { Location } from '../types';
import Tag from './ui/Tag';
import { CarIcon, MapPinIcon } from './ui/Icons';

interface LocationItemProps {
  item: Location;
}

const LocationItem: React.FC<LocationItemProps> = ({ item }) => {
  const uberLink = `https://m.uber.com/ul/?action=setPickup&pickup=my_location&dropoff[formatted_address]=${encodeURIComponent(
    item.address
  )}&dropoff[latitude]=${item.lat}&dropoff[longitude]=${item.lng}`;

  return (
    <div className="bg-white border border-gray-200 rounded-lg overflow-hidden flex flex-col sm:flex-row shadow-sm hover:shadow-lg transition-shadow duration-300">
      <div className="flex-shrink-0 h-40 sm:h-auto sm:w-32">
        <img
          className="w-full h-full object-cover"
          src={item.image_url || 'https://picsum.photos/300/200'}
          alt={item.name}
          loading="lazy"
        />
      </div>
      <div className="p-4 flex flex-col justify-between flex-grow">
        <div>
          <div className="flex justify-between items-start">
            <h4 className="text-md font-bold text-gray-900 leading-tight pr-2">{item.name}</h4>
            <Tag type={item.type} />
          </div>
           <p className="mt-2 text-sm text-gray-700">{item.description}</p>
          <div className="mt-2 flex items-start text-xs text-gray-600 space-x-2">
            <MapPinIcon className="w-4 h-4 mt-0.5 flex-shrink-0 text-gray-400" />
            <a 
              href={uberLink} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="hover:underline hover:text-blue-600 transition-colors duration-200"
            >
              {item.address}
            </a>
          </div>
        </div>
        <div className="mt-3 pt-3 border-t border-gray-100 flex items-center text-xs text-gray-500 space-x-2">
          <CarIcon className="w-4 h-4 flex-shrink-0 text-gray-400" />
          <span>{item.distance}</span>
        </div>
      </div>
    </div>
  );
};

export default LocationItem;