'use client';

import { Box, Stack, Typography } from '@mui/joy';
import { Card } from '@/components/Card';

export const AboutCard = () => {
  const skills = [
    'React',
    'TypeScript',
    'Next.js',
    'Node.js',
    'NestJS',
    'PostgreSQL',
    'Docker',
  ];

  return (
    <Card>
      <Stack gap={2} height="100%">
        <Typography level="h4" fontWeight="bold" sx={{ m: 0 }}>
          About me
        </Typography>

        <Typography level="body-sm" sx={{ fontWeight: 300 }}>
          Hi, I'm Ivan, a full-stack software developer based in Israel.
        </Typography>

        <Box>
          <Typography level="body-sm" sx={{ fontWeight: 300 }}>
            My primary tools of choice include:
          </Typography>
          <Box component="ul" sx={{ m: 0, mt: 1, pl: 2.5 }}>
            {skills.map((skill) => (
              <Box component="li" key={skill}>
                <Typography level="body-sm" sx={{ fontWeight: 300 }}>
                  {skill}
                </Typography>
              </Box>
            ))}
          </Box>
        </Box>

        <Typography level="body-sm" sx={{ fontWeight: 300 }}>
          I specialize in doing magic
        </Typography>
      </Stack>
    </Card>
  );
};
