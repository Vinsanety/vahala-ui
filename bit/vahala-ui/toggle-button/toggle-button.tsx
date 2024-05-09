import { ReactNode } from 'react';
import {
  ToggleButton as MuiToggleButton,
  ToggleButtonProps as MuiToggleButtonProps,
} from '@mui/material';
import { styled } from '@mui/material/styles';

export type ToggleButtonProps = MuiToggleButtonProps & {
  /**
   * Children the Button; often the button label
   */
  children?: ReactNode;
  /**
   * Required. The value to associate with the button when selected in a ToggleButtonGroup
   */
  value: any;
  /**
   * MUI Disable ripple effect
   */
  disableRipple?: Boolean;
  /**
   * MUI Disable focus ripple effect
   */
  disableFocusRipple?: Boolean;
  /**
   * Callback fired when the state changes
   */
  onChange?: Function;
  /**
   * If true, the button is rendered in an active state
   */
  selected?: Boolean;
};

const ToggleButtonStyles = styled(MuiToggleButton)<ToggleButtonProps>(
  ({ theme }) => ({
    color: theme.palette.primary.dark,
    border: `0.125rem solid ${theme.palette.primary.dark}`,
    borderRadius: 0,
    transition: 'all 0.25s ease-in-out, outline 0.1s ease',

    // Fixes toggle button "jumping" when active/selected
    '&.MuiToggleButtonGroup-grouped:not(:first-of-type)': {
      marginLeft: 0,
      borderLeft: '0 solid transparent',
    },

    // Add border radius to first and last toggle buttons
    '&:first-of-type': {
      borderTopLeftRadius: '0.325rem',
      borderBottomLeftRadius: '0.325rem',
    },
    '&:last-of-type': {
      borderTopRightRadius: '0.325rem',
      borderBottomRightRadius: '0.325rem',
    },

    // Hover state
    '@media (pointer: fine)': {
      '&:hover': {
        color: theme.palette.common.white,
        backgroundColor: theme.palette.primary.dark,
      },
    },

    // Focus state
    '&.Mui-focusVisible': {
      borderRadius: '0.325rem',
      outline: `0.375rem solid ${theme.palette.primary[100]}`,
      zIndex: 1,
    },

    // Active state
    '&:active': {
      color: theme.palette.common.white,
      backgroundColor: theme.palette.primary.light,
    },

    // Selected state
    '&.Mui-selected': {
      color: theme.palette.common.white,
      backgroundColor: theme.palette.primary.main,
      border: `0.125rem solid ${theme.palette.primary.dark}`,
      '&:hover': {
        color: theme.palette.common.white,
        backgroundColor: theme.palette.primary.dark,
      },
      '&:active': {
        color: theme.palette.common.white,
        backgroundColor: theme.palette.primary.light,
      },
    },
  })
);

export function ToggleButton({
  children,
  value,
  disableRipple = true,
  disableFocusRipple = true,
  onChange,
  selected,
  ...props
}: ToggleButtonProps) {
  return (
    <ToggleButtonStyles
      value={value}
      disableRipple={disableRipple}
      disableFocusRipple={disableFocusRipple}
      onChange={onChange}
      selected={selected}
      {...props}
    >
      {children}
    </ToggleButtonStyles>
  );
}
