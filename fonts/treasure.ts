import localFont from 'next/font/local';

export const TreasureMapText = localFont({
  src: [
    {
      path: '../public/fonts/treasure-map/Treasuremap.ttf',
      weight: '400',
      style: 'normal',
    }
  ],
  preload: true,
  fallback: ['system-ui', 'arial']
});