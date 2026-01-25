'use client';

import { forwardRef } from 'react';
import { Box, Chip, Stack, Typography } from '@mui/material';
import { Card } from '@/components/Card';
import { darkslate, primary } from '@/theme';

export const SkillsCard = forwardRef<HTMLDivElement>((_, ref) => {
  const skills = [
    'React',
    'TypeScript',
    'Next.js',
    'NestJS',
    'Node.js',
    'PostgreSQL',
    'Docker',
    'GraphQL',
    'Jotai',
    'AWS',
  ];

  return (
    <Card ref={ref}>
      <Stack gap={2} height="100%">
        <Typography variant="h6" fontWeight="bold" sx={{ m: 0 }}>
          Tech Stack
        </Typography>
        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
          {skills.map((skill) => (
            <Chip
              key={skill}
              variant="outlined"
              size="small"
              label={skill}
              sx={{
                bgcolor: darkslate[900],
                borderColor: darkslate[400],
                color: 'white',
                '&:hover': {
                  borderColor: primary[500],
                },
              }}
            />
          ))}
        </Box>
      </Stack>
    </Card>
  );
});
