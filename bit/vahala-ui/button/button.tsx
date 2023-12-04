import React, { ReactNode } from 'react';
import {
  Button as MuiButton,
  ButtonProps as MuiButtonProps,
} from '@mui/material';
import { styled } from '@mui/material/styles';

export type ButtonProps = MuiButtonProps & {
  /**
   * Children the Button; often the button label
   */
  children?: ReactNode;
  onClick?: () => void;
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
   * Disabled button
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

const ButtonStyles = styled(MuiButton)<ButtonProps>(({ theme }) => ({
  fontSize: '1rem',
  padding: '0.5625rem 1.5rem',
  borderRadius: '0.325rem',
  transition: 'all 0.4s ease',

  // Primary Button
  '&.MuiButton-containedPrimary, &.MuiButton-contained': {
    '@media (pointer: fine)': {
      '&:hover': {
        boxShadow: theme.shadows[8],
      },
    },
    '&.Mui-focusVisible': {
      backgroundColor: theme.palette.primary.dark,
      outline: `0.1875rem solid ${theme.palette.primary.light}`,
    },
    '&:active': {
      color: theme.palette.common.white,
      backgroundColor: theme.palette.primary.light,
    },
  },

  // Secondary Button
  '&.MuiButton-outlined, &.MuiButton-outlinedSecondary': {
    '@media (pointer: fine)': {
      '&:hover': {
        color: theme.palette.common.white,
        backgroundColor: theme.palette.secondary.dark,
      },
    },
    '&.Mui-focusVisible': {
      color: theme.palette.common.white,
      backgroundColor: theme.palette.secondary.dark,
      outline: `0.1875rem solid ${theme.palette.secondary.light}`,
    },
    '&:active': {
      color: theme.palette.common.white,
      backgroundColor: theme.palette.secondary.dark,
      boxShadow: theme.shadows[6],
    },
  },

  // Text Button
  '&.MuiButton-text': {
    '@media (pointer: fine)': {
      '&:hover': {
        color: theme.palette.common.white,
        backgroundColor: theme.palette.primary.dark,
      },
    },
    '&.Mui-focusVisible': {
      color: theme.palette.common.white,
      backgroundColor: theme.palette.primary.dark,
      outline: `0.1875rem solid ${theme.palette.primary.light}`,
    },
    '&:active': {
      color: theme.palette.common.white,
      backgroundColor: theme.palette.primary.dark,
      boxShadow: theme.shadows[6],
    },
  },
}));

export function Button({
  children,
  onClick,
  color = 'primary',
  disabled = false,
  disableRipple = true,
  variant = 'contained',
}: ButtonProps) {
  return (
    <ButtonStyles
      className="vuiButton"
      onClick={onClick}
      color={color}
      disabled={disabled}
      disableRipple={disableRipple}
      variant={color === 'primary' ? variant : 'outlined'}
    >
      {children}
    </ButtonStyles>
  );
}
