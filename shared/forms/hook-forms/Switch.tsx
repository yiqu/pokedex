import { Controller } from 'react-hook-form';

import Switch from '@mui/material/Switch';
import { red } from '@mui/material/colors';
import Typography from '@mui/material/Typography';
import FormControl from '@mui/material/FormControl';
import type { SwitchProps } from '@mui/material/Switch';
import FormHelperText from '@mui/material/FormHelperText';
import FormControlLabel from '@mui/material/FormControlLabel';

export interface HFSwitchProps {
  name: string;
  label: string;
  formcontrolSize?: 'small' | 'medium';
  helperText?: string;
  control: any;
  labelProps?: any;
}

export type SwitchFieldProps = HFSwitchProps & SwitchProps;

function HFSwitch({ name, label, control, helperText, formcontrolSize, labelProps, ...props }: SwitchFieldProps) {
  return (
    <Controller
      name={ name }
      control={ control }
      render={ ({ field, fieldState: { invalid, isTouched, isDirty, error }, formState }) => {
        return (
          <FormControl size={ formcontrolSize ?? 'medium' }>
            <FormControlLabel
              control={ <Switch id={ `${name}-switch` } { ...props } { ...field } name={ name } checked={ field.value } /> }
              label={ label }
              { ...labelProps }
            />
            <FormHelperText id={ `${name}-helper-text` } error={ !!error } sx={ { ml: 0 } }>
              {
                <Typography variant="caption" color={ red } component="span">
                  { ' ' }
                  { error ? error.message : helperText }{ ' ' }
                </Typography>
              }
            </FormHelperText>
          </FormControl>
        );
      } }
    />
  );
}

export default HFSwitch;
