import type { ReactNode } from 'react';

import {
  Card as MuiCard,
  CardProps as MuiCardProps,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from '@mui/material';
import { styled } from '@mui/material/styles';
import { Button } from '@vahalawebdesign/vahala-ui.button';

export type CardProps = MuiCardProps & {
  /**
   * Children of card will be placed at bottom cardContent and above the cardActions
   */
  children?: ReactNode;
  /**
   * Card title
   */
  cardTitle?: string;
  /**
   * Card content
   */
  cardContent?: ReactNode;
  /**
   * Src of the image used in cardMedia
   */
  cardMediaSrc?: string;
  /**
   * Image to be displayed as a background image. Either image or src prop must be specified. Note that caller must specify height otherwise the image will not be visible.
   */
  cardMediaImage?: string;
  /**
   * Accessibility title of the image
   */
  cardMediaTitle?: string;
  /**
   * String used in primary button
   */
  primaryButtonText?: string;
  /**
   * String used in secondary button
   */
  textButtonText?: string;
};

const CardStyles = styled(MuiCard)<CardProps>(() => ({
  display: 'flex',
  flexDirection: 'column',
  gap: '0.5rem',
  padding: '1rem',
  borderRadius: '0.325rem',
  '.MuiCardContent-root, .MuiCardContent-root:last-child': {
    padding: 0,
  },
}));

export function Card({
  children,
  cardTitle,
  cardContent,
  cardMediaImage,
  cardMediaSrc,
  cardMediaTitle,
  primaryButtonText,
  textButtonText,
}: CardProps) {
  return (
    <CardStyles elevation={2}>
      {(cardMediaImage || cardMediaSrc) && (
        <CardMedia
          sx={{ height: 320, width: '100%' }}
          src={cardMediaSrc}
          image={cardMediaImage}
          title={cardMediaTitle}
        />
      )}

      {(children || cardTitle || cardContent) && (
        <CardContent>
          {cardTitle && (
            <Typography variant="h5" component="div">
              {cardTitle}
            </Typography>
          )}
          {cardContent && (
            <Typography sx={{ pt: 1 }} variant="body2" color="text.secondary">
              {cardContent}
            </Typography>
          )}

          {children}
        </CardContent>
      )}

      {(primaryButtonText || textButtonText) && (
        <CardActions
          sx={{
            display: 'flex',
            flexDirection: 'row-reverse',
            gap: '0.5rem',
          }}
        >
          <Button size="small">{primaryButtonText}</Button>
          <Button size="small" variant="text">
            {textButtonText}
          </Button>
        </CardActions>
      )}
    </CardStyles>
  );
}
