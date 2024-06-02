import React from 'react';

const CurrentCard: React.FC = () => {
  return (
    <div className="bg-dark-bg border border-neon-blue rounded-lg shadow-neon p-4 max-w-md mx-auto my-10">
      <div className="text-neon-blue font-bold text-lg mb-2">Card Title</div>
      <div className="w-full h-40 bg-gray-700 mb-4"></div>
      <div className="text-neon-blue mb-4">
        <p>This is a description of the card. It contains futuristic design elements.</p>
      </div>
      <div className="flex justify-between">
        <button className="bg-neon-blue text-dark-bg py-2 px-4 rounded-lg shadow-neon hover:bg-neon-purple transition-colors">
          Action 1
        </button>
        <button className="bg-neon-blue text-dark-bg py-2 px-4 rounded-lg shadow-neon hover:bg-neon-purple transition-colors">
          Action 2
        </button>
      </div>
    </div>
  );
};

export default CurrentCard;
