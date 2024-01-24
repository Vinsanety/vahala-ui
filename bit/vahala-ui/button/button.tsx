import { ReactNode } from 'react';
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
  /**
   * HTML id attribute
   */
  id?: String;
  /**
   * onClick handler
   */
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
  transition: 'all 0.25s ease-in-out, outline 0.1s ease',

  // Primary Button
  '&.MuiButton-containedPrimary, &.MuiButton-contained': {
    '@media (pointer: fine)': {
      '&:hover': {
        boxShadow: theme.shadows[8],
      },
    },
    '&.Mui-focusVisible': {
      outline: `0.375rem solid ${theme.palette.primary[100]}`,
    },
    '&:active': {
      color: theme.palette.common.white,
      backgroundColor: theme.palette.primary.light,
    },
  },

  // Secondary Button
  '&.MuiButton-outlined, &.MuiButton-outlinedSecondary': {
    border: `0.125rem solid ${theme.palette.secondary.main}`,
    '@media (pointer: fine)': {
      '&:hover': {
        color: theme.palette.common.white,
        backgroundColor: theme.palette.secondary.main,
      },
    },
    '&.Mui-focusVisible': {
      outline: `0.375rem solid ${theme.palette.secondary[100]}`,
    },
    '&:active': {
      color: theme.palette.common.white,
      backgroundColor: theme.palette.secondary.light,
      border: `0.125rem solid ${theme.palette.secondary.light}`,
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
      outline: `0.375rem solid ${theme.palette.primary[100]}`,
    },
    '&:active': {
      color: theme.palette.common.white,
      backgroundColor: theme.palette.primary.light,
      boxShadow: theme.shadows[6],
    },
  },
}));

export function Button({
  children,
  id,
  onClick,
  color = 'primary',
  disabled = false,
  disableRipple = true,
  variant = 'contained',
  ...props
}: ButtonProps) {
  return (
    <ButtonStyles
      id={id}
      className="vuiButton"
      onClick={onClick}
      color={color}
      disabled={disabled}
      disableRipple={disableRipple}
      variant={color === 'primary' ? variant : 'outlined'}
      {...props}
    >
      {children}
    </ButtonStyles>
  );
}
