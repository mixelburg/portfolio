import { FC } from 'react';
import { Stack, Typography } from '@mui/joy';
import { experiences } from '@/app/experience/experience';
import { ExperienceCard } from '@/app/experience/ExperienceCard';
import NoSsr from '@/coponents/NoSsr';

const Page: FC = () => {
  return <>
    <Stack
      spacing={3.5}
      sx={{
        pt: { xs: 5, sm: '20vh' },
      }}
    >
      <Stack direction="row" justifyContent="center">
        <Typography
          level="h2"
          sx={{
            animation: 'fadeIn 2s ease-out forwards',
            '@keyframes fadeIn': {
              '0%': {
                opacity: 0,
              },
              '100%': {
                opacity: 1,
              },
            },
          }}
        >
          Experience
        </Typography>
      </Stack>

      <NoSsr>
        <Stack spacing={2}>
          {
            experiences.map(((experience, index) => (
              <ExperienceCard key={experience.name} {...experience} index={index} />
            )))
          }
        </Stack>
      </NoSsr>
    </Stack>
  </>;
};

export default Page;