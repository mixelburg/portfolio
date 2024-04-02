'use client';

import { memo, useEffect } from 'react';
import { Card, CardContent, Chip, Stack, Typography } from '@mui/joy';
import dayjs from 'dayjs';
import { animated, useSpring, config } from '@react-spring/web';
import { useLazyWindowSize } from '@/hooks/useLazyWindowSize';


export type ExperienceCardProps = {
  startDate: Date;
  endDate: Date;
  name: string;
  description: string
  index: number;
}

const getDuration = (startDate: Date, endDate: Date): string => {
  const _endDate = dayjs(endDate);
  const _startDate = dayjs(startDate);

  const diffYears = _endDate.diff(startDate, 'year');
  const newStart = _startDate.add(diffYears, 'year');
  const diffMonths = _endDate.diff(newStart, 'month');

  const yearsPart = diffYears ? `${diffYears} y ` : '';
  return yearsPart + `${diffMonths} m`;
};


const maxCardWidth = 400;
export const ExperienceCard = memo((props: ExperienceCardProps) => {
    const duration = getDuration(props.startDate, props.endDate);
    const { width: screenWidth } = useLazyWindowSize();
    const cardWidth = screenWidth > maxCardWidth + 20 ? maxCardWidth : screenWidth - 20;

    const [springs, api] = useSpring(() => ({
      from: { x: -99999 },
    }));

    useEffect(() => {
      if (!screenWidth) return;

      const config = {
        mass: 5, tension: 100, friction: 40
      }
      const leftAnimation = {
        from: { x: 0 - cardWidth },
        to: { x: (screenWidth / 2) - (cardWidth / 2) },
        config
      };
      const rightAnimation = {
        from: { x: screenWidth + cardWidth },
        to: { x: screenWidth / 2 - cardWidth / 2 },
        config
      };
      if (screenWidth) {
        api.start(props.index % 2 ? rightAnimation : leftAnimation);
      }

    }, [cardWidth, screenWidth]);

  return <>
      <animated.div
        style={{
          display: 'flex',
          width: cardWidth,
          ...springs,
        }}
      >
        <Card sx={{ width: cardWidth }}>
          <Stack direction="row" spacing={1} justifyContent="space-between">
            <Typography level="title-sm" fontWeight="bold">
              {props.name}
            </Typography>
            <Chip variant="soft" sx={{ bgcolor: 'background.level1' }}>
              {duration}
            </Chip>
          </Stack>
          <CardContent>
            <Typography level="body-sm">
              {props.description}
            </Typography>
          </CardContent>
        </Card>
      </animated.div>
    </>;
  })
;

