import React, { useState } from 'react';
import { itineraryData } from './data/itineraryData';
import DayCard from './components/DayCard';
import { ItineraryDay } from './types';
import Footer from './components/Footer';

const App: React.FC = () => {
  const [openDayIndex, setOpenDayIndex] = useState<number | null>(0);

  const handleToggleDay = (index: number) => {
    setOpenDayIndex(openDayIndex === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-gray-100 font-sans text-gray-800">
      <main className="max-w-2xl mx-auto p-4 pb-24">
        <div className="space-y-4">
          {itineraryData.itinerary.map((day: ItineraryDay, index: number) => (
            <DayCard
              key={day.day}
              dayData={day}
              isOpen={openDayIndex === index}
              onToggle={() => handleToggleDay(index)}
            />
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default App;