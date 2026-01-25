import { Box } from '@mui/joy';
import { IntroCard } from '@/components/IntroCard';
import { AboutCard } from '@/components/AboutCard';
import { ContactCard } from '@/components/ContactCard';
import { TimeCard } from '@/components/TimeCard';
import { ExperienceLinkCard } from '@/components/ExperienceLinkCard';
import { NowCard } from '@/components/NowCard';
import { ProjectsCard } from '@/components/ProjectsCard';
import { SkillsCard } from '@/components/SkillsCard';

const Page = () => {
  return (
    <Box
      component="main"
      sx={{
        m: 'auto',
        p: { xs: 1, sm: 2, md: 3 },
        width: '100%',
        maxWidth: '1200px',
        display: 'grid',
        gap: { xs: 1, sm: 2, md: 3 },
        gridTemplateColumns: {
          xs: '1fr',
          md: 'repeat(2, 1fr)',
          lg: 'repeat(4, 1fr)',
        },
        gridAutoRows: {
          xs: 'auto',
          lg: 'minmax(80px, auto)',
        },
        minHeight: { lg: '100vh' },
        maxHeight: { lg: '800px' },
        overflow: 'hidden',
      }}
    >
      <IntroCard />
      <AboutCard />
      <ContactCard />
      <TimeCard />
      <ExperienceLinkCard />
      <NowCard />
      <ProjectsCard />
      <SkillsCard />
    </Box>
  );
};

export default Page;
