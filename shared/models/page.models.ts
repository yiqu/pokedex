/**
 * Next page.js related props
 */
export interface PageSearchParams {
  [key: string]: string | string[] | undefined;
}
export interface IPageProps<T = { slug: string}> {
  params: T;
  searchParams: PageSearchParams;
}

export interface ILayoutProps<T = { slug: string}> {
  params: T;
  children: React.ReactNode;
}

export type PageProps<T> = Readonly<IPageProps<T>>;
export type LayoutProps<T> = Readonly<ILayoutProps<T>>;