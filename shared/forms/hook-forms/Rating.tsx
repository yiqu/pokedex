import omit from 'lodash/omit';
import { Controller } from 'react-hook-form';

import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import type { RatingProps } from '@mui/material';

export interface HFRatingFieldProps {
  name: string;
  control: any;
  clearField?: (name: string) => void;
}

export type FieldProps = HFRatingFieldProps & RatingProps;

function HFRatingField({ name, control, clearField, ...props }: FieldProps) {
  return (
    <Controller
      name={ name }
      control={ control }
      render={ ({ field, fieldState: { invalid, isTouched, isDirty, error }, formState }) => {
        
        // convert input value to number for Rating component
        const numberValue = field.value ? parseInt(field.value) : 0;
        return (
          <Box>
            <Rating id={ name } { ...props } { ...omit(field, ['value']) } value={ numberValue } size="medium" />
          </Box>
        );
      } }
    />
  );
}

export default HFRatingField;
