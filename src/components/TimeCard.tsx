'use client';

import { forwardRef, useEffect, useState } from 'react';
import { Box, Stack, Typography } from '@mui/material';
import { Card } from '@/components/Card';
import { darkslate } from '@/theme';

export const TimeCard = forwardRef<HTMLDivElement>((_, ref) => {
  const [myTime, setMyTime] = useState<string>('');
  const [visitorTime, setVisitorTime] = useState<string>('');
  const [visitorTz, setVisitorTz] = useState<string>('');

  useEffect(() => {
    const updateTimes = () => {
      const now = new Date();

      // Israel time (IST/IDT)
      const israelTime = now.toLocaleTimeString('en-US', {
        timeZone: 'Asia/Jerusalem',
        hour: '2-digit',
        minute: '2-digit',
        hour12: false,
      });
      setMyTime(israelTime);

      // Visitor time
      const visitorTimeStr = now.toLocaleTimeString('en-US', {
        hour: '2-digit',
        minute: '2-digit',
        hour12: false,
      });
      setVisitorTime(visitorTimeStr);

      // Get visitor timezone offset
      const offset = -now.getTimezoneOffset() / 60;
      const tzStr = `GMT${offset >= 0 ? '+' : ''}${offset}`;
      setVisitorTz(tzStr);
    };

    updateTimes();
    const interval = setInterval(updateTimes, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <Card ref={ref}>
      <Stack gap={2} justifyContent="center" height="100%">
        <Box>
          <Typography variant="body2" sx={{ color: darkslate[300], m: 0 }}>
            my time
          </Typography>
          <Stack direction="row" alignItems="baseline" gap={1}>
            <Typography
              variant="h4"
              fontWeight="bold"
              sx={{ fontVariantNumeric: 'tabular-nums' }}
            >
              {myTime || '--:--'}
            </Typography>
            <Typography variant="body2" sx={{ color: darkslate[300] }}>
              IST
            </Typography>
          </Stack>
        </Box>

        <Box>
          <Typography variant="body2" sx={{ color: darkslate[300], m: 0 }}>
            your time
          </Typography>
          <Stack direction="row" alignItems="baseline" gap={1}>
            <Typography
              variant="h4"
              fontWeight="bold"
              sx={{ fontVariantNumeric: 'tabular-nums' }}
            >
              {visitorTime || '--:--'}
            </Typography>
            <Typography variant="body2" sx={{ color: darkslate[300] }}>
              {visitorTz}
            </Typography>
          </Stack>
        </Box>
      </Stack>
    </Card>
  );
});
