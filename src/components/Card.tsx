'use client';

import { Box } from '@mui/material';
import { SxProps, Theme } from '@mui/material/styles';
import { forwardRef, ReactNode } from 'react';
import { darkslate, primary } from '@/theme';

type CardProps = {
  children: ReactNode;
  href?: string;
  sx?: SxProps<Theme>;
};

export const Card = forwardRef<HTMLDivElement, CardProps>(({ children, href, sx }, ref) => {
  const content = (
    <Box
      ref={ref}
      sx={{
        bgcolor: darkslate[500],
        borderRadius: 2,
        border: `1px solid ${darkslate[400]}`,
        p: 3,
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
        sx={{
          textDecoration: 'none',
          color: 'inherit',
          display: 'contents',
        }}
      >
        {content}
      </Box>
    );
  }

  return content;
});
