import localFont from 'next/font/local';

export const BlackpearlText = localFont({
  src: [
    {
      path: '../public/fonts/blackpearl/Blackpearl.ttf',
      weight: '400',
      style: 'normal',
    }
  ],
  preload: true,
  fallback: ['system-ui', 'arial']
});