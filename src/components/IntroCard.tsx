'use client';

import { Box, IconButton, Link, Stack, Typography } from '@mui/joy';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { Card } from '@/components/Card';
import { darkslate, primary } from '@/theme';

export const IntroCard = () => {
  return (
    <Card>
      <Stack direction={{ xs: 'column', md: 'row' }} justifyContent="space-between" height="100%" gap={2}>
        <Stack justifyContent="space-between" height="100%" gap={2} flex={1}>
          <Stack>
            <Typography
              level="body-sm"
              sx={{ color: darkslate[300], m: 0 }}
            >
              welcome
            </Typography>
            <Typography level="body-md" sx={{ mt: 1 }}>
              Hi, I'm <Typography color='primary' component="span" fontWeight="bold">Ivan Kroha</Typography>, a full-stack software developer with a strong focus on building scalable applications, clean architecture, and great user experiences.
            </Typography>
            <Typography level="body-md" sx={{ mt: 2 }}>
              Feel free to reach out if you have any project in mind, want to collaborate, or just want to say hello.
            </Typography>
          </Stack>

          <Stack direction={{ xs: 'column', lg: 'row' }} gap={2}>
            <Stack direction="row" gap={1}>
              <IconButton
                component="a"
                href="https://github.com/mixelburg"
                target="_blank"
                aria-label="GitHub profile"
                sx={{
                  bgcolor: darkslate[900],
                  border: `1px solid ${primary[500]}`,
                  boxShadow: `3px 3px 0 ${primary[500]}`,
                  borderRadius: 'md',
                  px: 2.5,
                  '&:hover': {
                    bgcolor: darkslate[900],
                    color: primary[500],
                  },
                  '&:active': {
                    boxShadow: 'none',
                    transform: 'translate(3px, 3px)',
                  },
                }}
              >
                <GitHubIcon />
              </IconButton>
              <IconButton
                component="a"
                href="https://www.linkedin.com/in/mixelburg"
                target="_blank"
                aria-label="LinkedIn profile"
                sx={{
                  bgcolor: darkslate[900],
                  border: `1px solid ${primary[500]}`,
                  boxShadow: `3px 3px 0 ${primary[500]}`,
                  borderRadius: 'md',
                  px: 2.5,
                  '&:hover': {
                    bgcolor: darkslate[900],
                    color: primary[500],
                  },
                  '&:active': {
                    boxShadow: 'none',
                    transform: 'translate(3px, 3px)',
                  },
                }}
              >
                <LinkedInIcon />
              </IconButton>
            </Stack>
            <Box
              component="a"
              href="mailto:me@kroha.dev"
              sx={{
                bgcolor: darkslate[900],
                border: `1px solid ${primary[500]}`,
                boxShadow: `3px 3px 0 ${primary[500]}`,
                borderRadius: 'md',
                px: 2.5,
                py: 1,
                textDecoration: 'none',
                color: 'white',
                fontWeight: 'bold',
                display: 'inline-flex',
                alignItems: 'center',
                whiteSpace: 'nowrap',
                transition: 'all 0.1s ease',
                '&:hover': {
                  color: primary[500],
                },
                '&:active': {
                  boxShadow: 'none',
                  transform: 'translate(3px, 3px)',
                },
              }}
            >
              Contact me
            </Box>
          </Stack>
        </Stack>
        <Box
          component="img"
          src="/racoon.webp"
          alt="Racoon mascot"
          sx={{
            display: { xs: 'none', md: 'block' },
            width: 200,
            height: 200,
            objectFit: 'contain',
          }}
        />
      </Stack>
    </Card>
  );
};
