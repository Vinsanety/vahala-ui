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
  defaultValue?: String;
  helperText?: String;
  onChange?: Function;
  focused?: Boolean;
  disabled?: Boolean;
  Error?: Boolean;
};

const TextFieldStyles = styled(MuiTextField)<TextFieldProps>(({ theme }) => ({
  marginTop: theme.spacing(4),
  '.MuiFormLabel-root': {
    fontSize: '1.375rem',
    marginTop: theme.spacing(-4),
    marginLeft: theme.spacing(-1),
    '&::first-letter': {
      textTransform: 'capitalize',
    },
  },
  '.MuiInputBase-root.MuiFilledInput-root': {
    backgroundColor: 'transparent',
    border: `0.125rem solid ${theme.palette.grey[500]}`,
    borderRadius: '0.25rem',
    input: {
      padding: theme.spacing(2),
      '&.Mui-focused': {
        borderColor: theme.palette.primary.main,
      },
    },
    '&:not(.Mui-disabled)': {
      '&:hover': {
        border: `0.125rem solid ${theme.palette.primary.dark}`,
        '&:before': {
          border: 'none',
        },
      },
      '&:before': {
        border: 'none',
      },
      '&:after': {
        border: `0.125rem solid ${theme.palette.primary.main}`,
      },
    },
    '&.Mui-disabled': {
      backgroundColor: theme.palette.grey[200],
      '&:before': {
        borderBottom: 'none',
      },
    },
    '&.Mui-error': {
      '&:after': {
        border: `0.125rem solid ${theme.palette.error.main}`,
      },
    },
  },
  '.MuiFormHelperText-root': {
    margin: '0.25rem 0 0 0.25rem',
  },
}));

export function TextField({
  label,
  placeholder,
  defaultValue,
  helperText,
  onChange,
  focused,
  disabled,
  error,
}: TextFieldProps) {
  return (
    <TextFieldStyles
      variant="filled"
      label={label}
      defaultValue={defaultValue}
      placeholder={placeholder}
      helperText={helperText}
      onChange={onChange}
      focused={focused}
      disabled={disabled}
      error={error}
      InputLabelProps={{ shrink: true }}
    />
  );
}
