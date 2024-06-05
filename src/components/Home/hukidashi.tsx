import React, { useEffect, useState, ReactNode } from 'react';
import { Orbitron } from 'next/font/google';

const orbitronFont = Orbitron({
  weight: '400',
  subsets: ['latin'],
});

interface HukidashiProps {
  children: ReactNode;
}

const Hukidashi: React.FC<HukidashiProps> = ({ children }) => {
  return (
    <div className="relative w-full max-w-lg p-6 bg-purple-800 rounded-lg border border-gray-500">
      <div
        className="absolute inset-0 border border-purple-600 rounded-lg"
        style={{
          clipPath:
            'polygon(5% 0%, 95% 0%, 100% 5%, 100% 95%, 95% 100%, 5% 100%, 0% 95%, 0% 5%)',
        }}
      ></div>
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-full flex justify-between items-center px-6">
        <div className="w-20 h-2 bg-purple-700"></div>
        <div className="w-20 h-2 bg-purple-700"></div>
      </div>
      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-full flex justify-between items-center px-6">
        <div className="w-20 h-2 bg-purple-700"></div>
        <div className="w-20 h-2 bg-purple-700"></div>
      </div>
      <div className="relative z-10 p-4 bg-purple-900 rounded-lg opacity-80">
        {children}
        <div className={`${orbitronFont.className} text-white`}>...........................................4...</div>
      </div>
    </div>
  );
};
export default Hukidashi