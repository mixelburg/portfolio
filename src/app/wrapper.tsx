import { memo, PropsWithChildren } from 'react';
import { Stack, Typography } from '@mui/joy';
import Link from 'next/link';


type StyledLinkProps = {
  href: string;
  text: string;
}
const StyledLink = memo((props: StyledLinkProps) => {
  return <Link href={props.href} style={{ textDecoration: 'none' }}>
    <Typography
      sx={{
        pl: 3,
        pr: 1,
        color: 'primary.300',
        fontWeight: 'bold',
        fontSize: 20,
        '&:hover': {
          color: 'black',
          bgcolor: 'primary.500',
          fontSize: 22,
        },
      }}
    >
      {props.text}
    </Typography>
  </Link>;
});

export const Wrapper = (props: PropsWithChildren) => {
  return <>
    <Stack
      id="page-root"
      sx={{
        width: '100dvw',
        height: '100dvh',
      }}
    >
      <Stack height="100%" overflow="auto">
        {props.children}
      </Stack>
      <Stack direction="row">
        <Stack
          direction="column"
          pb={2}
          pt={1}
        >
          <StyledLink href={'/about'} text={'ABOUT'} />
          <StyledLink href={'/experience'} text={'EXPERIENCE'} />
        </Stack>
      </Stack>
    </Stack>
  </>;
};