'use client';

import { Box, Stack, Typography, Link } from '@mui/joy';
import { Card } from '@/components/Card';
import { darkslate, primary } from '@/theme';

export const NowCard = () => {
  return (
    <Card colSpan={1} rowSpan={1} sx={{ p: 2 }}>
      <Stack gap={1}>
        <Stack direction="row" justifyContent="space-between" alignItems="flex-start">
          <Stack direction="row" alignItems="center" gap={1}>
            <Typography level="h4" fontWeight="bold" sx={{ m: 0 }}>
              Now
            </Typography>
            <Link
              href="https://sive.rs/nowff"
              target="_blank"
              sx={{
                color: darkslate[300],
                fontSize: '0.75rem',
                textDecoration: 'none',
                '&:hover': { textDecoration: 'underline' },
              }}
            >
              what's that?
            </Link>
          </Stack>
          <Box sx={{ position: 'relative', width: 12, height: 12 }}>
            <Box
              sx={{
                position: 'absolute',
                inset: 0,
                borderRadius: '50%',
                bgcolor: primary[400],
                animation: 'ping 1s cubic-bezier(0, 0, 0.2, 1) infinite',
                opacity: 0.75,
                '@keyframes ping': {
                  '75%, 100%': {
                    transform: 'scale(2)',
                    opacity: 0,
                  },
                },
              }}
            />
            <Box
              sx={{
                position: 'relative',
                width: 12,
                height: 12,
                borderRadius: '50%',
                bgcolor: primary[500],
              }}
            />
          </Box>
        </Stack>
        <Typography level="body-xs">
          Currently working full-time at CodeValue
        </Typography>
      </Stack>
    </Card>
  );
};
