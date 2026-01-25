'use client';

import { forwardRef } from 'react';
import { Stack, Typography } from '@mui/material';
import { Card } from '@/components/Card';
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';
import { primary } from '@/theme';

export const ProjectsCard = forwardRef<HTMLDivElement>((_, ref) => {
  return (
    <Card ref={ref} href="https://github.com/mixelburg?tab=repositories">
      <Stack direction="row" justifyContent="space-between" alignItems="flex-start" height="100%">
        <Typography variant="h6" fontWeight="bold" sx={{ m: 0 }}>
          Projects
        </Typography>
        <ArrowOutwardIcon
          sx={{
            transition: 'transform 0.1s ease, color 0.1s ease',
            '.MuiBox-root:hover &': {
              color: primary[500],
              transform: 'translate(2px, -2px)',
            },
          }}
        />
      </Stack>
    </Card>
  );
});
