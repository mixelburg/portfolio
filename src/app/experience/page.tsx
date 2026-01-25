'use client';

import { Box, IconButton, Stack, Typography } from '@mui/joy';
import { experiences } from '@/app/experience/experience';
import { ExperienceCard } from '@/app/experience/ExperienceCard';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import Link from 'next/link';
import { darkslate, primary } from '@/theme';

const Page = () => {
  return (
    <Box
      sx={{
        m: 'auto',
        p: { xs: 2, sm: 3, md: 4 },
        width: '100%',
        maxWidth: '800px',
        minHeight: '100vh',
      }}
    >
      <Stack gap={4}>
        <Stack direction="row" alignItems="center" gap={2}>
          <IconButton
            component={Link}
            href="/"
            sx={{
              bgcolor: darkslate[500],
              border: `1px solid ${darkslate[400]}`,
              '&:hover': {
                bgcolor: darkslate[500],
                borderColor: primary[500],
              },
            }}
          >
            <ArrowBackIcon />
          </IconButton>
          <Typography level="h2" fontWeight="bold">
            Experience
          </Typography>
        </Stack>

        <Stack gap={2}>
          {experiences.map((experience, index) => (
            <ExperienceCard key={experience.name} {...experience} index={index} />
          ))}
        </Stack>
      </Stack>
    </Box>
  );
};

export default Page;
