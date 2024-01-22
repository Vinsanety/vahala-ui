import type { ReactNode } from 'react';

import {
  TextField as MuiTextField,
  TextFieldProps as MuiTextFieldProps,
} from '@mui/material';
import { styled } from '@mui/material/styles';

export type TextFieldProps = MuiTextFieldProps & {
  /**
   * Textfield children are only present when using the `select` prop
   */
  children?: ReactNode;
  /**
   * HTML id attribute
   */
  id?: String;
  /**
   * Required input label
   */
  label: ReactNode;
  /**
   * Displayed in the input before the user enters a value
   */
  placeholder?: String;
  /**
   * Default value for pre-filled inputs
   */
  defaultValue?: String;
  /**
   * Helper text
   */
  helperText?: String;
  /**
   * On change function to handle value changes to input
   */
  onChange?: Function;
  /**
   * Multiline used for the textarea input
   */
  multiline?: Boolean;
  /**
   * Select used for the select input
   */
  select?: Boolean;
  /**
   * Mui prop distinguishing if full width of container
   */
  fullWidth?: Boolean;
  /**
   * Focused boolean
   */
  focused?: Boolean;
  /**
   * Disabled boolean
   */
  disabled?: Boolean;
  /**
   * Error boolean to be triggered when validations are not met
   */
  error?: Boolean;
};

const TextFieldStyles = styled(MuiTextField)<TextFieldProps>(({ theme }) => ({
  // TextField Wrapper
  marginTop: theme.spacing(4),
  // Label
  '.MuiFormLabel-root': {
    fontSize: '1.375rem',
    marginTop: theme.spacing(-4),
    marginLeft: theme.spacing(-1),
    '&::first-letter': {
      textTransform: 'capitalize',
    },
  },
  // Input
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
    // Textarea
    '&.MuiInputBase-multiline': {
      padding: theme.spacing(2),
    },
  },
  // Select
  '.MuiSelect-select': {
    backgroundColor: 'transparent',
    padding: '1rem',
    '&.MuiSelect-filled.MuiInputBase-input.MuiFilledInput-input:focus': {
      backgroundColor: 'transparent',
    },
  },
  // HelperText
  '.MuiFormHelperText-root': {
    margin: '0.25rem 0 0 0.25rem',
  },
}));

export function TextField({
  children,
  id,
  label,
  placeholder,
  defaultValue,
  helperText,
  onChange,
  multiline,
  select,
  fullWidth,
  focused,
  disabled,
  error,
}: TextFieldProps) {
  return (
    <TextFieldStyles
      id={id}
      variant="filled"
      label={label}
      defaultValue={defaultValue}
      placeholder={placeholder}
      helperText={helperText}
      multiline={multiline}
      select={select}
      fullWidth={fullWidth}
      rows={multiline && 4}
      onChange={onChange}
      focused={focused}
      disabled={disabled}
      error={error}
      InputLabelProps={{ shrink: true }}
    >
      {children}
    </TextFieldStyles>
  );
}
