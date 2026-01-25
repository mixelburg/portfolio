import { Box } from '@mui/joy';
import Grid from '@mui/material/Grid';
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
          <IntroCard />
        </Grid>
        <Grid size={{ xs: 12, md: 6, lg: 3 }}>
          <AboutCard />
        </Grid>

        <Grid size={{ xs: 12, md: 6, lg: 3 }}>
          <ContactCard />
        </Grid>
        <Grid size={{ xs: 12, md: 6, lg: 3 }}>
          <TimeCard />
        </Grid>
        <Grid size={{ xs: 12, md: 6, lg: 3 }}>
          <OpenSourceCard />
        </Grid>

        <Grid size={{ xs: 12, md: 6, lg: 3 }}>
          <SkillsCard />
        </Grid>
        <Grid size={{ xs: 12, md: 6, lg: 3 }}>
          <NowCard />
        </Grid>
        <Grid size={{ xs: 12, md: 6, lg: 3 }}>
          <ProjectsCard />
        </Grid>
        <Grid size={{ xs: 12, md: 6, lg: 3 }}>
          <ExperienceLinkCard />
        </Grid>
      </Grid>
    </Box>
  );
};

export default Page;
