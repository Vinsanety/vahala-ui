import type { ReactNode } from 'react';

import {
  TextField as MuiTextField,
  TextFieldProps as MuiTextFieldProps,
} from '@mui/material';
import { styled } from '@mui/material/styles';

export type TextFieldProps = MuiTextFieldProps & {
  // children?: ReactNode;
  /**
   * Required input label
   */
  label: ReactNode;
  /**
   * Displayed in the input before the user enters a value
   */
  placeholder?: String;
};

const TextFieldStyles = styled(MuiTextField)<TextFieldProps>(({ theme }) => ({
  marginTop: theme.spacing(5),
  '.MuiFormLabel-root': {
    marginTop: theme.spacing(-6),
    marginLeft: theme.spacing(-1),
  },
}));

export function TextField({ label, placeholder }: TextFieldProps) {
  return (
    <TextFieldStyles
      label={label}
      placeholder={placeholder}
      InputLabelProps={{ shrink: false }}
    />
  );
}
