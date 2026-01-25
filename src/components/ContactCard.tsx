'use client';

import { forwardRef } from 'react';
import { Box, Link, Stack, Typography } from '@mui/material';
import { Card } from '@/components/Card';
import { darkslate } from '@/theme';

export const ContactCard = forwardRef<HTMLDivElement>((_, ref) => {
  return (
    <Card ref={ref}>
      <Stack height="100%" gap={2}>
        <Typography variant="h6" fontWeight="bold">
          Let's start working together!
        </Typography>

        <Box component="address" sx={{ fontStyle: 'normal' }}>
          <Typography variant="body2" sx={{ color: darkslate[300] }}>
            Contact Details
          </Typography>
          <Typography variant="body2">me@kroha.dev</Typography>
          <Typography variant="body1">Israel</Typography>
        </Box>

        <Box>
          <Typography variant="body2" sx={{ color: darkslate[300] }}>
            Socials
          </Typography>
          <Box component="ul" sx={{ listStyle: 'none', p: 0, m: 0 }}>
            <li>
              <Link
                href="https://www.linkedin.com/in/mixelburg"
                target="_blank"
                sx={{ color: 'white', textDecoration: 'none', '&:hover': { textDecoration: 'underline' } }}
              >
                LinkedIn
              </Link>
            </li>
            <li>
              <Link
                href="https://github.com/mixelburg"
                target="_blank"
                sx={{ color: 'white', textDecoration: 'none', '&:hover': { textDecoration: 'underline' } }}
              >
                GitHub
              </Link>
            </li>
          </Box>
        </Box>
      </Stack>
    </Card>
  );
});
