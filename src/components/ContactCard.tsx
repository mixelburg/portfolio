'use client';

import { Box, Link, Stack, Typography } from '@mui/joy';
import { Card } from '@/components/Card';
import { darkslate } from '@/theme';

export const ContactCard = () => {
  return (
    <Card colSpan={1} rowSpan={4}>
      <Stack height="100%" gap={2}>
        <Typography level="h4" fontWeight="bold">
          Let's start working together!
        </Typography>

        <Box component="address" sx={{ fontStyle: 'normal' }}>
          <Typography level="body-sm" sx={{ color: darkslate[300] }}>
            Contact Details
          </Typography>
          <Typography level="body-sm">me@kroha.dev</Typography>
          <Typography level="body-md">Israel</Typography>
        </Box>

        <Box>
          <Typography level="body-sm" sx={{ color: darkslate[300] }}>
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
};
