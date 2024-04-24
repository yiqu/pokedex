import { m } from 'framer-motion';
import type { MotionProps } from 'framer-motion';

import Box from '@mui/material/Box';
import type { BoxProps } from '@mui/material/Box';

import { varContainer } from './variants';

// ----------------------------------------------------------------------

type IProps = BoxProps & MotionProps;

interface Props extends IProps {
  children: React.ReactNode;
  disableAnimatedMobile?: boolean;
}

export default function MotionViewport({ children, disableAnimatedMobile = true, ...other }: Props) {

  return (
    <Box
      component={ m.div }
      initial="initial"
      whileInView="animate"
      viewport={ { once: true, amount: 0.3 } }
      variants={ varContainer() }
      { ...other }
    >
      { children }
    </Box>
  );
}
