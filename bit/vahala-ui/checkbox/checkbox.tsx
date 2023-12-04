import {
  Checkbox as MuiCheckbox,
  CheckboxProps as MuiCheckboxProps,
  FormControlLabel,
} from '@mui/material';
import { styled } from '@mui/material/styles';

export type CheckboxProps = MuiCheckboxProps & {
  /**
   * Mui Color
   */
  color?: 'primary' | 'error' | 'success';
  /**
   * Requrired label, associated with the checkbox for a11y.
   */
  label: String;
  /**
   * Mui size
   */
  size?: 'medium' | 'small';
  /**
   * Indicates if defaultChecked
   */
  defaultChecked?: Boolean;
  /**
   * Indicates if required
   */
  // required?: Boolean;
  /**
   * Indicates if disabled
   */
  disabled?: Boolean;
  /**
   * Disable Mui ripple; default to true
   */
  disableRipple?: Boolean;
};

const CheckboxStyles = styled(MuiCheckbox)<CheckboxProps>(({ theme }) => ({
  height: '1.75rem',
  width: '1.75rem',
  marginRight: '0.5rem',
  padding: 0,
  borderRadius: '0.25rem',
  '@media (hover: hover)': {
    '&:hover': {
      color: `${theme.palette.primary.dark}`,
    },
  },
  '&.Mui-focusVisible, &.Mui-focusVisible.MuiCheckbox-colorError': {
    color: `${theme.palette.primary.dark}`,
  },
  '&.MuiCheckbox-colorError': {
    color: `${theme.palette.error.main}`,
    '&.Mui-checked': {
      color: `${theme.palette.primary.main}`,
    },
  },
  '& .MuiSvgIcon-root': {
    fontSize: '2.25rem',
  },
}));

export function Checkbox({
  color = 'primary',
  label,
  size = 'medium',
  defaultChecked = false,
  // required,
  disabled = false,
  disableRipple = true,
}: CheckboxProps) {
  return (
    <FormControlLabel
      className="vuiCheckbox"
      sx={{
        ml: 0,
        pt: 2.5,
        px: 0,
        '@media (hover: hover)': {
          '&:hover .MuiCheckbox-root:not(.Mui-disabled)': {
            color: `primary.dark`,
          },
        },
        '& .MuiFormControlLabel-label': {
          fontSize: '1.125rem',
        },
      }}
      control={
        <CheckboxStyles
          color={color}
          label={label}
          size={size}
          defaultChecked={defaultChecked}
          // required={required}
          disabled={disabled}
          disableRipple={disableRipple}
        />
      }
      label={label}
    />
  );
}
