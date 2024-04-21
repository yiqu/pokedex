import localFont from 'next/font/local';

export const RumIsGoneText = localFont({
  src: [
    {
      path: '../public/fonts/rumisgone/TheRumIsGone.ttf',
      weight: '400',
      style: 'normal',
    }
  ],
  preload: true,
  fallback: ['system-ui', 'arial']
});