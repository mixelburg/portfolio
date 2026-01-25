'use client';

import { Stack, Typography } from '@mui/joy';
import { Card } from '@/components/Card';
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';
import Link from 'next/link';
import { primary } from '@/theme';

export const ExperienceLinkCard = () => {
  return (
    <Link href="/experience" style={{ textDecoration: 'none', color: 'inherit', display: 'contents' }}>
      <Card>
        <Stack direction="row" justifyContent="space-between" alignItems="flex-start" height="100%">
          <Typography level="h4" fontWeight="bold" sx={{ m: 0 }}>
            Experience
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
    </Link>
  );
};
