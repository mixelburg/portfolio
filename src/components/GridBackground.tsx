'use client';

import { Box } from '@mui/joy';
import { darkslate } from '@/theme';

export const GridBackground = () => {
  return (
    <Box
      sx={{
        position: 'fixed',
        top: 0,
        left: '50%',
        transform: 'translateX(-50%)',
        width: '101vw',
        height: '100vh',
        zIndex: -1,
        backgroundImage: `
          linear-gradient(90deg, ${darkslate[400]} 1px, transparent 1px),
          linear-gradient(${darkslate[400]} 1px, transparent 1px)
        `,
        backgroundSize: '80px 80px',
        backgroundPosition: 'center',
        maskImage: 'linear-gradient(-360deg, transparent 40%, white)',
        WebkitMaskImage: 'linear-gradient(-360deg, transparent 40%, white)',
      }}
    />
  );
};
