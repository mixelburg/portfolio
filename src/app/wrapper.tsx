'use client';

import { PropsWithChildren } from 'react';
import { Box } from '@mui/joy';
import { GridBackground } from '@/components/GridBackground';
import { darkslate } from '@/theme';

export const Wrapper = (props: PropsWithChildren) => {
  return (
    <Box
      sx={{
        width: '100dvw',
        minHeight: '100dvh',
        bgcolor: darkslate[700],
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        overflowX: 'hidden',
      }}
    >
      <GridBackground />
      {props.children}
    </Box>
  );
};
