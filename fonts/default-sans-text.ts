import localFont from 'next/font/local';

export const DefaultSansText = localFont({
  src: [
    {
      path: '../public/fonts/GoogleSansText/GoogleSansText-Regular.ttf',
      weight: '400',
      style: 'normal',

    },
    {
      path: '../public/fonts/GoogleSansText/GoogleSansText-Italic.ttf',
      weight: '400',
      style: 'Italic',

    },
    {
      path: '../public/fonts/GoogleSansText/GoogleSansText-MediumItalic.ttf',
      weight: '500',
      style: 'Italic',

    },
    {
      path: '../public/fonts/GoogleSansText/GoogleSansText-Medium.ttf',
      weight: '500',
      style: 'normal',

    },
    {
      path: '../public/fonts/GoogleSansText/GoogleSansText-BoldItalic.ttf',
      weight: '700',
      style: 'Italic',

    },
    {
      path: '../public/fonts/GoogleSansText/GoogleSansText-Bold.ttf',
      weight: '700',
      style: 'normal',

    },
  ],
  preload: true,
  fallback: ['system-ui', 'arial']
});