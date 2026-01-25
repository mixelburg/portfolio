'use client';

import { memo } from 'react';
import { Box, Chip, Stack, Typography } from '@mui/material';
import dayjs from 'dayjs';
import { darkslate, primary } from '@/theme';

export type ExperienceCardProps = {
  startDate: Date;
  endDate: Date;
  name: string;
  description: string;
  index: number;
};

const getDuration = (startDate: Date, endDate: Date): string => {
  const _endDate = dayjs(endDate);
  const _startDate = dayjs(startDate);

  const diffYears = _endDate.diff(startDate, 'year');
  const newStart = _startDate.add(diffYears, 'year');
  const diffMonths = _endDate.diff(newStart, 'month');

  const yearsPart = diffYears ? `${diffYears} y ` : '';
  return yearsPart + `${diffMonths} m`;
};

const formatDate = (date: Date): string => {
  return dayjs(date).format('MMM YYYY');
};

export const ExperienceCard = memo((props: ExperienceCardProps) => {
  const duration = getDuration(props.startDate, props.endDate);
  const isPresent = dayjs(props.endDate).isSame(dayjs(), 'month');

  return (
    <Box
      sx={{
        bgcolor: darkslate[500],
        borderRadius: 2,
        border: `1px solid ${darkslate[400]}`,
        p: 3,
        transition: 'border-color 0.3s ease',
        '&:hover': {
          borderColor: primary[500],
        },
      }}
    >
      <Stack gap={2}>
        <Stack
          direction={{ xs: 'column', sm: 'row' }}
          justifyContent="space-between"
          alignItems={{ xs: 'flex-start', sm: 'center' }}
          gap={1}
        >
          <Typography variant="h6" fontWeight="bold">
            {props.name}
          </Typography>
          <Stack direction="row" gap={1} alignItems="center">
            <Typography variant="body2" sx={{ color: darkslate[300] }}>
              {formatDate(props.startDate)} - {isPresent ? 'Present' : formatDate(props.endDate)}
            </Typography>
            <Chip
              variant="outlined"
              size="small"
              label={duration}
              sx={{
                bgcolor: darkslate[900],
                borderColor: darkslate[400],
                color: 'white',
              }}
            />
          </Stack>
        </Stack>
        <Typography variant="body1" sx={{ color: darkslate[100] }}>
          {props.description}
        </Typography>
      </Stack>
    </Box>
  );
});
