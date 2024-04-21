import { RumIsGoneText } from '@/fonts/rum';
import { DefaultSans } from '@/fonts/default-sans';
import { TreasureMapText } from '@/fonts/treasure';
import { BlackpearlText } from '@/fonts/blackpearl';
import { DefaultSansText } from '@/fonts/default-sans-text';
import { DefaultSansDisplay } from '@/fonts/default-sans-display';

import type { Palette } from '@mui/material/styles';
import type { TypographyOptions } from '@mui/material/styles/createTypography';

export const APP_BODY_COLOR = '#202124';
export const APP_TEXT_COLOR = '#222';
export const APP_HEADER_COLOR = '#1f1f1f';
export const GREY_TEXT = '#5e5e5e';

export function remToPx(value: string) {
  return Math.round(parseFloat(value) * 16);
}

export function pxToRem(value: number) {
  return `${value / 16}rem`;
}

export function responsiveFontSizes({ sm, md, lg }: { sm: number; md: number; lg: number }) {
  return {
    '@media (min-width:600px)': {
      fontSize: pxToRem(sm),
    },
    '@media (min-width:900px)': {
      fontSize: pxToRem(md),
    },
    '@media (min-width:1200px)': {
      fontSize: pxToRem(lg),
    },
  };
}

declare module '@mui/material/styles' {
  interface TypographyVariants {
    fontSecondaryFamily: React.CSSProperties['fontFamily'];
    fontWeightSemiBold: React.CSSProperties['fontWeight'];

    italic0: React.CSSProperties;
    italic1: React.CSSProperties;
    italic2: React.CSSProperties;
    body0: React.CSSProperties;
    subtitle0: React.CSSProperties;

    blackpearl: React.CSSProperties;
    rum: React.CSSProperties;
    treasure: React.CSSProperties;
  }

  interface TypographyVariantsOptions {
    italic0?: React.CSSProperties;
    italic1?: React.CSSProperties;
    italic2?: React.CSSProperties;
    body0?: React.CSSProperties;
    subtitle0?: React.CSSProperties;
    blackpearl?: React.CSSProperties;
    rum?: React.CSSProperties;
    treasure?: React.CSSProperties;
  }
}
declare module '@mui/material/Typography' {
  interface TypographyPropsVariantOverrides {
    italic0: true;
    italic1: true;
    italic2: true;
    body0: true;
    subtitle0: true;
    blackpearl: true;
    rum: true;
    treasure: true;
  }
}

export const typography: TypographyOptions | ((palette: Palette) => TypographyOptions) | undefined = {
  fontFamily: DefaultSansText.style.fontFamily,
  fontSize: 14,

  subtitle0: {
    fontWeight: 'normal',
    fontSize: '10px',
    color: GREY_TEXT,
  },
  subtitle1: {
    fontWeight: 'normal',
    fontSize: '12px',
    color: GREY_TEXT,
  },
  subtitle2: {
    fontWeight: 'normal',
    fontSize: '14px',
    color: GREY_TEXT,
  },

  italic0: {
    fontSize: '12px',
    fontStyle: 'italic',
    color: APP_TEXT_COLOR,
  },
  italic1: {
    fontSize: '14px',
    fontStyle: 'italic',
    color: APP_TEXT_COLOR,
  },
  italic2: {
    fontSize: '16px',
    fontStyle: 'italic',
    color: APP_TEXT_COLOR,
  },

  body0: {
    fontSize: '12px',
  },
  body1: {
    fontSize: '14px',
  },
  body2: {
    fontSize: '16px',
  },

  blackpearl: {
    fontFamily: BlackpearlText.style.fontFamily,
    fontSize: '14px',
    color: APP_TEXT_COLOR,
  },

  rum: {
    fontFamily: RumIsGoneText.style.fontFamily,
    fontSize: '14px',
    color: APP_TEXT_COLOR,
  },

  treasure: {
    fontFamily: TreasureMapText.style.fontFamily,
    fontSize: '14px',
    color: APP_TEXT_COLOR,
  },

  caption: {
    fontSize: '12px',
    color: GREY_TEXT,
  },

  h1: {
    fontFamily: DefaultSansDisplay.style.fontFamily,
    fontSize: '28px',
    color: APP_HEADER_COLOR,
  },
  h2: {
    fontFamily: DefaultSansDisplay.style.fontFamily,
    fontSize: '26px',
    fontWeight: 500,
    color: APP_HEADER_COLOR,
  },
  h3: {
    fontFamily: DefaultSansDisplay.style.fontFamily,
    fontSize: '22px',
    fontWeight: 500,
    color: APP_HEADER_COLOR,
  },
  h4: {
    fontFamily: DefaultSans.style.fontFamily,
    fontSize: '20px',
    color: APP_HEADER_COLOR,
  },
  h5: {
    fontFamily: DefaultSans.style.fontFamily,
    fontSize: '18px',
    color: APP_HEADER_COLOR,
  },
  h6: {
    fontFamily: DefaultSans.style.fontFamily,
    fontSize: '16px',
    color: APP_HEADER_COLOR,
  },
};
