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
   * Requrired label, associated with the checkbox for a11y
   */
  label: String;
  /**
   * Controlled checked boolean of checkbox
   */
  checked?: Boolean;
  /**
   * onChange handler
   */
  onChange?: Function;
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
  required?: Boolean;
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
    outline: `0.375rem solid ${theme.palette.primary[100]}`,
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
  checked,
  onChange,
  size = 'medium',
  defaultChecked = false,
  required,
  disabled = false,
  disableRipple = true,
  ...props
}: CheckboxProps) {
  return (
    <FormControlLabel
      className="vuiCheckbox"
      sx={{
        '@media (hover: hover)': {
          '&:hover .MuiCheckbox-root:not(.Mui-disabled)': {
            color: `primary.dark`,
          },
        },
      }}
      control={
        <CheckboxStyles
          color={color}
          label={label}
          checked={checked}
          onChange={onChange}
          size={size}
          defaultChecked={defaultChecked}
          disabled={disabled}
          disableRipple={disableRipple}
          {...props}
        />
      }
      label={required ? `${label}*` : label}
    />
  );
}
