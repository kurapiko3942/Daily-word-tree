
"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import LottieAnimation from '../components/LottieAnimation';
import Image from 'next/image';
import spaceRain from "../../public/spaceRain.png";
import CurrentCard from '@/components/Home/currentCard';
import Hukidashi from '@/components/Home/hukidashi';
import AudioPlayer from '@/components/layout/audioPlayer';


export default function Home() {
  const [isProfileHovered, setIsProfileHovered] = useState(false);
  const [isWorksHovered, setIsWorksHovered] = useState(false);
  const [isHistoryHovered, setIsHistoryHovered] = useState(false);
  //スペースレインちゃんとお話しする機能（（吹き出し表示）
  const [isTalking, setIsTalking] = useState(false);

  const handleImageClick = () => {
    setIsTalking(!isTalking);
  };
  

  return (
    <div className='overflow: scroll'>
      <div className=' bg-black text-white sticky top-0'>
        <div className='flex '>
        <div >Launch Our Worlds</div>
        <div className='absolute right-3'>
        <AudioPlayer/>
        </div>
        </div>
      </div>
      <div className='relative h-[68vh] bg-[url("/ImageImg.webp")] before:absolute before:inset-0 before:bg-black before:opacity-50 before:content-[""]'>

      <div className=''>
        <div className='flex absolute inset-0 '>
          <div className='flex relative m-4 items-center '>
            <CurrentCard/>
          </div>
          
          <Image 
            src={spaceRain} 
            alt="猫は最高に可愛い"
            height={550}
            className='absolute right-0 '
            onClick={handleImageClick}
          />
          {isTalking && (
              <div className='absolute bottom-10 right-0'>
                <Hukidashi children={true}/>
              </div>
            )}
        </div>
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
