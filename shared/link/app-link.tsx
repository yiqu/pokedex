import Link from 'next/link';
import type { Route } from 'next';
import type { ReactNode } from 'react';
//import { Link } from 'next-view-transitions';

interface AppLinkProps {
  href: string;
  title: ReactNode;
}

export default function AppLink({ href, title }: AppLinkProps) {
  return <Link href={ href as Route }>{ title }</Link>;
}
