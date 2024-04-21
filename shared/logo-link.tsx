'use client';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import AppIcon from '@/public/images/pokedex.png';

export default function LogoLink() {
  const router = useRouter();

  const handleOnLogoClick = () => {
    router.push('/');
  };
  return (
    <div onClick={ handleOnLogoClick } style={ { cursor: 'pointer' } }>
      <Image src={ AppIcon } alt="Pokedex" width={ 40 } height={ 40 } />
    </div>
  );
}
