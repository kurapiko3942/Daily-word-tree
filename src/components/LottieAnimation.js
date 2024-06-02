// components/LottieAnimation.js
"use client";

import React, { useEffect, useRef } from 'react';
import { Player } from '@lottiefiles/react-lottie-player';

const LottieAnimation = ({ isHovered }) => {
  const playerRef = useRef(null);

  useEffect(() => {
    if (isHovered) {
      playerRef.current.play();
    } else {
      playerRef.current.stop();
    }
  }, [isHovered]);

  return (
    <Player
      ref={playerRef}
      loop
      src="/Looking.json" // publicディレクトリ内のファイルを指定
      style={{ height: '80px', width: '80px' }} // アニメーションのサイズを調整
    />
  );
};

export default LottieAnimation;
