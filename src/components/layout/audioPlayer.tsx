"use client"
// components/AudioPlayer.tsx
import React, { useEffect, useRef } from 'react';

const AudioPlayer: React.FC = () => {
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    const handlePlay = async () => {
      try {
        if (audioRef.current) {
          await audioRef.current.play();
        }
      } catch (error) {
        console.error('Autoplay failed:', error);
      }
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            handlePlay();
          }
        });
      },
      { threshold: 0.5 } // 50%表示されたときに再生をトリガー
    );

    if (audioRef.current) {
      observer.observe(audioRef.current);
    }

    return () => {
      if (audioRef.current) {
        observer.unobserve(audioRef.current);
      }
    };
  }, []);

  return (
    <div>
      <audio ref={audioRef} src="/audio/yuueiMetroporisu.mp3" loop />
      {/* 追加のボタンを表示して、手動で再生可能に */}
      <button onClick={() => audioRef.current?.play()}>Play Manually</button>
    </div>
  );
};

export default AudioPlayer;
