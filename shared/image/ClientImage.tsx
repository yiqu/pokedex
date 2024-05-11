'use client';

import Image from 'next/image';
import { useState } from 'react';
import type { StaticImageData } from 'next/image';
import AppIcon from '@/public/images/pokedex.png';

export default function ImageClient({ srcUrl }: { srcUrl: string }) {
  const [imgsrc, setImgSrc] = useState<string | StaticImageData>(srcUrl);

  const handleOnError = () => {
    setImgSrc(AppIcon);
  };

  return <Image src={ imgsrc } alt={ 'img' } width={ 50 } height={ 50 } onError={ handleOnError } />;
}
