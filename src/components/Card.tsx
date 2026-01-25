'use client';

import { Box } from '@mui/material';
import { SxProps, Theme } from '@mui/material/styles';
import { forwardRef, ReactNode } from 'react';
import { darkslate, primary } from '@/theme';

type CardProps = {
  children: ReactNode;
  href?: string;
  sx?: SxProps<Theme>;
  className?: string;
  target?: string;
};

export const Card = forwardRef<HTMLDivElement, CardProps>(({ children, href, sx, className, target }, ref) => {
  const content = (
    <Box
      ref={ref}
      className={`cursor-target ${className ?? ''}`}
      sx={{
        bgcolor: darkslate[500],
        borderRadius: 1,
        border: `1px solid ${darkslate[400]}`,
        p: 2,
        height: '100%',
        position: 'relative',
        overflow: 'hidden',
        transition: 'border-color 0.3s ease, transform 0.3s ease',
        '&:hover': {
          borderColor: primary[500],
        },
        ...sx,
      }}
    >
      {children}
    </Box>
  );

  if (href) {
    return (
      <Box
        component="a"
        href={href}
        className={className}
        target={target ?? undefined}
        sx={{
          textDecoration: 'none',
          color: 'inherit',
          display: 'contents',
          cursor: 'none'
        }}
      >
        {content}
      </Box>
    );
  }

  return content;
});
