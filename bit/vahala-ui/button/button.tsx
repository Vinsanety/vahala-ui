import React, { ReactNode } from 'react';
import {
  Button as MuiButton,
  ButtonProps as MuiButtonProps,
} from '@mui/material';

export type ButtonProps = MuiButtonProps & {
  /**
   * Children the Button; often the button label
   */
  children?: ReactNode;
  /**
   * Mui colors
   */
  color?:
    | 'inherit'
    | 'primary'
    | 'secondary'
    | 'success'
    | 'error'
    | 'info'
    | 'warning'
    | string;
  /**
   * Disabled button prop
   */
  disabled?: Boolean;
  /**
   * Disable Mui ripple; default to true
   */
  disableRipple?: Boolean;
  /**
   * Mui variants; contained is primary, outlined is secondary
   */
  variant?: 'contained' | 'outlined' | 'text' | string;
};

export function Button({
  children,
  color = 'primary',
  disabled = false,
  disableRipple = true,
  variant = 'contained',
}: ButtonProps) {
  return (
    <MuiButton
      color={color}
      disabled={disabled}
      disableRipple={disableRipple}
      variant={color === 'primary' ? variant : 'outlined'}
    >
      {children}
    </MuiButton>
  );
}
