
import React from 'react';

interface TagProps {
  type: 'tourist' | 'hidden gem';
}

const Tag: React.FC<TagProps> = ({ type }) => {
  const baseClasses = 'text-xs font-semibold px-2 py-1 rounded-full capitalize';
  const typeClasses = type === 'tourist' 
    ? 'bg-blue-100 text-blue-800' 
    : 'bg-green-100 text-green-800';

  return (
    <span className={`${baseClasses} ${typeClasses}`}>
      {type}
    </span>
  );
};

export default Tag;
