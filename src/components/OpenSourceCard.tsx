'use client';

import { Box, Stack, Typography } from '@mui/joy';
import { Card } from '@/components/Card';
import { darkslate, primary } from '@/theme';
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';

interface Project {
  name: string;
  description: string;
  href: string;
}

const projects: Project[] = [
  {
    name: 'useMuiForm',
    description: 'Library adapter for react-hook-form and MUI',
    href: 'https://mixelburg.github.io/useMuiForm/docs',
  },
  {
    name: '@mixelburg/react-ol',
    description: 'Use OpenLayers with deterministic React components',
    href: 'https://mixelburg.github.io/react-ol/docs',
  },
];

export const OpenSourceCard = () => {
  return (
    <Card>
      <Stack gap={2} height="100%">
        <Typography level="h4" fontWeight="bold" sx={{ m: 0 }}>
          Open Source
        </Typography>
        <Stack gap={1.5}>
          {projects.map((project) => (
            <Box
              key={project.name}
              component="a"
              href={project.href}
              target="_blank"
              rel="noopener noreferrer"
              sx={{
                p: 1.5,
                borderRadius: 'md',
                bgcolor: darkslate[900],
                border: `1px solid ${darkslate[400]}`,
                textDecoration: 'none',
                color: 'inherit',
                transition: 'border-color 0.1s ease',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'flex-start',
                gap: 1,
                '&:hover': {
                  borderColor: primary[500],
                  '& .arrow-icon': {
                    color: primary[500],
                    transform: 'translate(2px, -2px)',
                  },
                },
              }}
            >
              <Stack gap={0.5}>
                <Typography level="body-sm" fontWeight="bold" sx={{ color: 'white' }}>
                  {project.name}
                </Typography>
                <Typography level="body-xs" sx={{ color: darkslate[300] }}>
                  {project.description}
                </Typography>
              </Stack>
              <ArrowOutwardIcon
                className="arrow-icon"
                sx={{
                  fontSize: 16,
                  color: darkslate[400],
                  transition: 'transform 0.1s ease, color 0.1s ease',
                  flexShrink: 0,
                }}
              />
            </Box>
          ))}
        </Stack>
      </Stack>
    </Card>
  );
};
