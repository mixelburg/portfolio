import { Link, Stack, Typography } from '@mui/joy';
import { colors } from '@/colors';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const Page = () => {

  return <>
    <Stack p={2} alignItems="center" width="100dvw" height="100dvh" pt="20vh">
      <Stack spacing={2}>
        <Typography level="h1" component="div">
          Hi, my name is <Typography sx={{ color: 'primary.300' }}>Ivan Kroha</Typography>
        </Typography>

        <Stack spacing={0.5}>
          <Stack direction="row" spacing={1}>
            <Typography level="body-lg">
              You can find me at
            </Typography>
            <Typography sx={{ color: colors.blue[400] }} fontWeight="bold" level="body-lg">
              me@kroha.dev
            </Typography>
          </Stack>

          <Stack direction="row" spacing={0.5} fontSize={25}>
            <Typography level="body-lg">
              or here
            </Typography>
            <Link fontSize="inherit" target="_blank" href="https://github.com/mixelburg">
              <GitHubIcon fontSize="inherit" />
            </Link>
            <Link fontSize="inherit" target="_blank" href="https://www.linkedin.com/in/mixelburg">
              <LinkedInIcon fontSize="inherit" />
            </Link>
          </Stack>
        </Stack>


      </Stack>
    </Stack>
  </>;
};

export default Page;