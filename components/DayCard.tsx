import React, { useState, useEffect } from 'react';
import { ItineraryDay } from '../types';
import LocationList from './LocationList';
import Map from './Map';
import Weather from './Weather';
import { CalendarIcon, ChevronDownIcon, MapPinIcon, EatsIcon, AttractionIcon, MapIcon } from './ui/Icons';

interface DayCardProps {
  dayData: ItineraryDay;
  isOpen: boolean;
  onToggle: () => void;
}

const DayCard: React.FC<DayCardProps> = ({ dayData, isOpen, onToggle }) => {
  const [activeTab, setActiveTab] = useState<'eats' | 'attractions'>('eats');
  const [showMap, setShowMap] = useState(false);
  const [dayNumber, ...locationParts] = dayData.day.split(': ');
  const location = locationParts.join(': ');

  const hasEats = dayData.eats && dayData.eats.length > 0;
  const hasAttractions = dayData.attractions && dayData.attractions.length > 0;

  useEffect(() => {
    if (isOpen) {
        // Reset map when a new card is opened
        setShowMap(false);
        // Set a sensible default tab
        if (!hasEats && hasAttractions) {
            setActiveTab('attractions');
        } else {
            setActiveTab('eats');
        }
    }
  }, [isOpen, hasEats, hasAttractions]);

  const allLocations = [...dayData.eats, ...dayData.attractions];

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300 ease-in-out">
      <button
        onClick={onToggle}
        className="w-full p-4 text-left flex justify-between items-center focus:outline-none focus:ring-2 focus:ring-blue-500"
        aria-expanded={isOpen}
      >
        <div className="flex items-center space-x-4">
          <div className="flex-shrink-0 text-blue-600">
            <CalendarIcon />
          </div>
          <div>
            <p className="font-semibold text-gray-500 text-sm">{dayNumber}</p>
            <h2 className="text-lg font-bold text-gray-900">{location}</h2>
          </div>
        </div>
        <ChevronDownIcon
          className={`w-6 h-6 text-gray-500 transition-transform duration-300 ${
            isOpen ? 'transform rotate-180' : ''
          }`}
        />
      </button>
      <div
        className={`transition-all duration-500 ease-in-out overflow-hidden ${
          isOpen ? 'max-h-[5000px]' : 'max-h-0'
        }`}
      >
        <div className="px-4 pb-4 border-t border-gray-200">
          <div className="flex items-start space-x-3 text-sm text-gray-600 mt-4 bg-gray-50 p-3 rounded-md">
            <MapPinIcon className="w-5 h-5 mt-0.5 text-gray-500 flex-shrink-0" />
            <div>
              <span className="font-semibold">Port Address:</span> {dayData.port_address}
            </div>
          </div>

          {/* Weather Section - Always visible */}
          <div className="mt-4">
            <Weather 
              lat={dayData.port_lat} 
              lng={dayData.port_lng} 
              dayString={dayData.day} 
            />
          </div>

          {allLocations.length > 0 && (
            <div className="mt-4">
                 <button 
                    onClick={() => setShowMap(!showMap)}
                    className="w-full flex items-center justify-center space-x-2 p-2 bg-blue-50 text-blue-700 rounded-md hover:bg-blue-100 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                    <MapIcon className="w-5 h-5"/>
                    <span className="font-semibold text-sm">{showMap ? 'Hide Map' : 'View on Map'}</span>
                </button>

                {showMap && (
                    <div className="mt-4 rounded-lg overflow-hidden h-80 border border-gray-200">
                         <Map 
                            port={{
                                name: 'Cruise Port',
                                lat: dayData.port_lat,
                                lng: dayData.port_lng
                            }} 
                            locations={allLocations} 
                        />
                    </div>
                )}
            </div>
          )}
          
          {(hasEats || hasAttractions) && (
            <div className="mt-4 border-b border-gray-200">
              <nav className="-mb-px flex space-x-6" aria-label="Tabs">
                {hasEats && (
                   <button
                   onClick={() => setActiveTab('eats')}
                   aria-current={activeTab === 'eats' ? 'page' : undefined}
                   className={`flex items-center space-x-2 whitespace-nowrap py-3 px-1 border-b-2 font-medium text-sm focus:outline-none ${
                     activeTab === 'eats'
                       ? 'border-blue-600 text-blue-600'
                       : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                   }`}
                 >
                   <EatsIcon className="w-5 h-5" />
                   <span>Eats</span>
                 </button>
                )}
                {hasAttractions && (
                  <button
                    onClick={() => setActiveTab('attractions')}
                    aria-current={activeTab === 'attractions' ? 'page' : undefined}
                    className={`flex items-center space-x-2 whitespace-nowrap py-3 px-1 border-b-2 font-medium text-sm focus:outline-none ${
                      activeTab === 'attractions'
                        ? 'border-blue-600 text-blue-600'
                        : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                    }`}
                  >
                    <AttractionIcon className="w-5 h-5" />
                    <span>Attractions</span>
                  </button>
                )}
              </nav>
            </div>
          )}

          <div className="mt-4">
            {activeTab === 'eats' && hasEats && <LocationList items={dayData.eats} />}
            {activeTab === 'attractions' && hasAttractions && <LocationList items={dayData.attractions} />}
          </div>

        </div>
      </div>
    </div>
  );
};

export default DayCard;