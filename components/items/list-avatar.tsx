'use client';

import type { Route } from 'next';
import { m } from 'framer-motion';
import { useRouter } from 'next/navigation';


export default function ListPokemonAvatar({ children, name, id }: {name: string, id: number, children: React.ReactNode }) {
  const router = useRouter();

  const handleOnNavigate = () => {
    router.push(`/items/${name}__${id}` as Route); 
  };

  return (
    <m.div initial={ false } whileHover={ { scale: 1.1, rotate: 30 } } onClick={ handleOnNavigate } style={ {cursor: 'pointer'} }>
      { children }
    </m.div>
  );
}
