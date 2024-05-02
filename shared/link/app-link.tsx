import Link from 'next/link';
import type { Route } from 'next';
import type { ReactNode } from 'react';

import Stack from '@mui/material/Stack';
//import { Link } from 'next-view-transitions';

interface AppLinkProps {
  href: string;
  title: ReactNode;
  icon?: ReactNode;
  scroll?: boolean;
}

export default function AppLink({ href, title, icon = null, scroll = true }: AppLinkProps) {
  return (
    <Link href={ href as Route } style={ { width: '100%' } } className="text-link" scroll={ scroll }>
      <Stack direction="row" justifyContent="start" alignItems="center">
        { icon && (
          <Stack mr={ 1 } direction="column" justifyContent="center" alignItems="center">
            { icon }
          </Stack>
        ) }
        { title }
      </Stack>
    </Link>
  );
}
