'use client';
import Image from 'next/image';
import { m } from 'framer-motion';
import { useRouter } from 'next/navigation';
import AppIcon from '@/public/images/pokedex.png';

import { varHover } from './animate/variants';

export default function LogoLink() {
  const router = useRouter();

  const handleOnLogoClick = () => {
    router.push('/');
  };
  return (
    <m.div onClick={ handleOnLogoClick } style={ { cursor: 'pointer' } } whileHover="hover" variants={ varHover(1.1) }>
      <Image src={ AppIcon } alt="Pokedex" width={ 40 } height={ 40 } />
    </m.div>
  );
}
