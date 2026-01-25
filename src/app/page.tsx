'use client';

import { Box, Stack } from '@mui/material';
import Grid from '@mui/material/Grid';
import { Fade } from '@mui/material';
import { IntroCard } from '@/components/IntroCard';
import { AboutCard } from '@/components/AboutCard';
import { ContactCard } from '@/components/ContactCard';
import { TimeCard } from '@/components/TimeCard';
import { ExperienceLinkCard } from '@/components/ExperienceLinkCard';
import { NowCard } from '@/components/NowCard';
import { ProjectsCard } from '@/components/ProjectsCard';
import { SkillsCard } from '@/components/SkillsCard';
import { OpenSourceCard } from '@/components/OpenSourceCard';

const Page = () => {
  return (
    <Box
      component="main"
      sx={{
        m: 'auto',
        p: { xs: 1, sm: 2, md: 3 },
        width: '100%',
        maxWidth: '1200px',
      }}
    >
      <Grid container spacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid size={{ xs: 12, md: 6, lg: 9 }}>
          <Fade in timeout={500} style={{ transitionDelay: '100ms' }}>
            <IntroCard />
          </Fade>
        </Grid>
        <Grid size={{ xs: 12, md: 6, lg: 3 }}>
          <Fade in timeout={500} style={{ transitionDelay: '200ms' }}>
            <AboutCard />
          </Fade>
        </Grid>

        <Grid size={{ xs: 12, md: 6, lg: 3 }}>
          <Fade in timeout={500} style={{ transitionDelay: '300ms' }}>
            <ContactCard />
          </Fade>
        </Grid>
        <Grid size={{ xs: 12, md: 6, lg: 3 }}>
          <Stack spacing={{ xs: 1, sm: 2, md: 3 }}>
            <Fade in timeout={500} style={{ transitionDelay: '400ms' }}>
              <TimeCard />
            </Fade>
            <Fade in timeout={500} style={{ transitionDelay: '500ms' }}>
              <NowCard />
            </Fade>
          </Stack>
        </Grid>
        <Grid size={{ xs: 12, md: 6, lg: 3 }}>
          <Fade in timeout={500} style={{ transitionDelay: '600ms' }}>
            <OpenSourceCard />
          </Fade>
        </Grid>

        <Grid size={{ xs: 12, md: 6, lg: 3 }}>
          <Fade in timeout={500} style={{ transitionDelay: '700ms' }}>
            <SkillsCard />
          </Fade>
        </Grid>
        <Grid size={{ xs: 12, md: 6, lg: 3 }}>
          <Stack gap={{ xs: 1, sm: 2, md: 3 }}>
            <Fade in timeout={500} style={{ transitionDelay: '800ms' }}>
              <ProjectsCard />
            </Fade>
            <Fade in timeout={500} style={{ transitionDelay: '900ms' }}>
              <ExperienceLinkCard />
            </Fade>
          </Stack>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Page;
