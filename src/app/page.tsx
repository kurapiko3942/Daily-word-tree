
"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import LottieAnimation from '../components/LottieAnimation';
import Image from 'next/image';
import spaceRain from "../../public/spaceRain.png";

export default function Home() {
  const [isProfileHovered, setIsProfileHovered] = useState(false);
  const [isWorksHovered, setIsWorksHovered] = useState(false);
  const [isHistoryHovered, setIsHistoryHovered] = useState(false);

  return (
    <div className='overflow: scroll'>
      <div className='bg-black text-white sticky top-0'>Launch Our Worlds</div>
      <div className='relative h-[68vh] bg-[url("/ImageImg.webp")] before:absolute before:inset-0 before:bg-black before:opacity-50 before:content-[""]'>
        <div className='absolute inset-0'>
          <Image 
            src={spaceRain} 
            alt="猫は最高に可愛い"
            height={550}
            className='absolute right-0 '
          />
        </div>
      </div>

      <div className='min-h-screen flex flex-col'>
        <Link href="/Profile">
          <div
            className='border border-black hover:bg-gray-300 flex relative'
            onMouseEnter={() => setIsProfileHovered(true)}
            onMouseLeave={() => setIsProfileHovered(false)}
          >
            <div className='text-4xl p-5'>Profile</div>
            <div className='absolute right-20 '>
            <LottieAnimation isHovered={isProfileHovered} />
            </div>
          </div>
        </Link>
        <Link href="/Works">
          <div
            className='border border-black hover:bg-gray-300 flex relative'
            onMouseEnter={() => setIsWorksHovered(true)}
            onMouseLeave={() => setIsWorksHovered(false)}
          >
            <div className='text-4xl p-5 '>WORKS</div>
            <div className='absolute right-20'>
            <LottieAnimation isHovered={isWorksHovered} />
            </div>
          </div>
        </Link>
        <Link href="/History">
          <div
            className='border border-black hover:bg-gray-300 flex relative'
            onMouseEnter={() => setIsHistoryHovered(true)}
            onMouseLeave={() => setIsHistoryHovered(false)}
          >
            <div className='text-4xl p-5 hover:animate-pulse'>HISTORY</div>
            <div className='absolute right-20'>
            <LottieAnimation isHovered={isHistoryHovered} />
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
}
