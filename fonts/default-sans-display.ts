import localFont from 'next/font/local';

export const DefaultSansDisplay = localFont({
  src: [
    {
      path: '../public/fonts/GoogleSansDisplay/GoogleSansDisplay-Regular.ttf',
      weight: '400',
      style: 'normal',

    },
    {
      path: '../public/fonts/GoogleSansDisplay/GoogleSansDisplay-Italic.ttf',
      weight: '400',
      style: 'Italic',

    },
    {
      path: '../public/fonts/GoogleSansDisplay/GoogleSansDisplay-MediumItalic.ttf',
      weight: '500',
      style: 'Italic',

    },
    {
      path: '../public/fonts/GoogleSansDisplay/GoogleSansDisplay-Medium.ttf',
      weight: '500',
      style: 'normal',

    },
    {
      path: '../public/fonts/GoogleSansDisplay/GoogleSansDisplay-BoldItalic.ttf',
      weight: '700',
      style: 'Italic',

    },
    {
      path: '../public/fonts/GoogleSansDisplay/GoogleSansDisplay-Bold.ttf',
      weight: '700',
      style: 'normal',

    },
  ],
  preload: true,
  fallback: ['system-ui', 'arial']
});