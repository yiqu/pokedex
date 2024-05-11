'use client';

import type { Route } from 'next';
import { useTransition } from 'react';
import { LIMIT_SIZE } from '@/lib/api/items.api';
import { useRouter, usePathname, useSearchParams } from 'next/navigation';

import Stack from '@mui/material/Stack';
import Pagination from '@mui/material/Pagination';

import styles from './items-paginator.module.css';

type DataPaginatorProps = {
  totalCount?: number;
};

export default function DataPaginator({ totalCount }: DataPaginatorProps) {
  const [, startTransition] = useTransition();
  const router = useRouter();
  const pathname = usePathname();
  const queryParams = useSearchParams();
  const pageParam = queryParams.get('page') ?? '1';
  const currentPage: number = pageParam ? parseInt(pageParam) : 1;

  if (totalCount === undefined) {
    return null;
  }

  const handleOnPageChange = (event: React.ChangeEvent<unknown>, page: number) => {
    startTransition(() => {
      router.push(`${pathname}?page=${page}` as Route);
    });
  };

  const pagesCount: number = Math.ceil(totalCount / LIMIT_SIZE);

  return (
    <Stack
      direction="column"
      justifyContent="start"
      alignItems="start"
      spacing={ 2 }
      className={ styles['sticky-position'] }
    >
      <Pagination
        count={ pagesCount }
        page={ currentPage }
        showFirstButton
        showLastButton
        onChange={ handleOnPageChange }
        siblingCount={ 6 }
        boundaryCount={ 3 }
      />
    </Stack>
  );
}
