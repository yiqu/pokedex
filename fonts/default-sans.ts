import localFont from 'next/font/local';

export const DefaultSans = localFont({
  src: [
    {
      path: '../public/fonts/GoogleSans/GoogleSans-Regular.ttf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../public/fonts/GoogleSans/GoogleSans-Italic.ttf',
      weight: '400',
      style: 'Italic',

    },
    {
      path: '../public/fonts/GoogleSans/GoogleSans-MediumItalic.ttf',
      weight: '500',
      style: 'Italic',

    },
    {
      path: '../public/fonts/GoogleSans/GoogleSans-Medium.ttf',
      weight: '500',
      style: 'normal',

    },
    {
      path: '../public/fonts/GoogleSans/GoogleSans-BoldItalic.ttf',
      weight: '700',
      style: 'Italic',

    },
    {
      path: '../public/fonts/GoogleSans/GoogleSans-Bold.ttf',
      weight: '700',
      style: 'normal',

    },
  ],
  preload: true,
  fallback: ['system-ui', 'arial']
});