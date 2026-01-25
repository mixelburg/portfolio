'use client';

import { Box, Chip, Stack, Typography } from '@mui/joy';
import { Card } from '@/components/Card';
import { darkslate, primary } from '@/theme';

export const SkillsCard = () => {
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
    <Card colSpan={1} rowSpan={2}>
      <Stack gap={2} height="100%">
        <Typography level="h4" fontWeight="bold" sx={{ m: 0 }}>
          Tech Stack
        </Typography>
        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
          {skills.map((skill) => (
            <Chip
              key={skill}
              variant="soft"
              size="sm"
              sx={{
                bgcolor: darkslate[900],
                border: `1px solid ${darkslate[400]}`,
                color: 'white',
                '&:hover': {
                  borderColor: primary[500],
                },
              }}
            >
              {skill}
            </Chip>
          ))}
        </Box>
      </Stack>
    </Card>
  );
};
