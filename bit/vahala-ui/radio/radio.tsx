import {
  Radio as MuiRadio,
  RadioProps as MuiRadioProps,
  FormControlLabel,
} from '@mui/material';
import { styled } from '@mui/material/styles';

export type RadioProps = MuiRadioProps & {
  /**
   * Required label, associated with the checkbox for a11y
   */
  label: String;
  /**
   * Mui Value
   */
  value?: String;
  /**
   * Disable Mui ripple; default to true
   */
  disableRipple?: Boolean;
};

const RadioStyles = styled(MuiRadio)<RadioProps>(({ theme }) => ({
  height: '1.75rem',
  width: '1.75rem',
  marginRight: '0.5rem',
  padding: 0,
  '&.Mui-focusVisible': {
    outline: `0.375rem solid ${theme.palette.primary[100]}`,
  },
  '& .MuiSvgIcon-root': {
    fontSize: '2.25rem',
  },
}));

export function Radio({
  label,
  value,
  disableRipple = true,
  ...props
}: RadioProps) {
  return (
    <FormControlLabel
      className="vuiRadio"
      sx={{
        '@media (hover: hover)': {
          '&:hover .MuiRadio-root:not(.Mui-disabled)': {
            color: `primary.dark`,
          },
        },
      }}
      control={
        <RadioStyles
          label={label}
          value={value}
          disableRipple={disableRipple}
          {...props}
        />
      }
      label={label}
    />
  );
}
