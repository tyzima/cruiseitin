import React from 'react';
import { Location } from '../types';
import LocationItem from './LocationItem';

interface LocationListProps {
  items: Location[];
}

const LocationList: React.FC<LocationListProps> = ({ items }) => {
  return (
    <div className="grid grid-cols-1 gap-4">
      {items.map((item) => (
        <LocationItem key={item.name} item={item} />
      ))}
    </div>
  );
};

export default LocationList;