'use client';

import { useEffect, useState } from 'react';
import { Box, Stack, Typography } from '@mui/joy';
import { Card } from '@/components/Card';
import { darkslate } from '@/theme';

export const TimeCard = () => {
  const [myTime, setMyTime] = useState<string>('');
  const [visitorTime, setVisitorTime] = useState<string>('');
  const [visitorTz, setVisitorTz] = useState<string>('');

  useEffect(() => {
    const updateTimes = () => {
      const now = new Date();

      // Israel time (IST/IDT)
      const israelTime = now.toLocaleTimeString('en-US', {
        timeZone: 'Asia/Jerusalem',
        hour: 'numeric',
        minute: '2-digit',
        hour12: true,
      });
      setMyTime(israelTime);

      // Visitor time
      const visitorTimeStr = now.toLocaleTimeString('en-US', {
        hour: 'numeric',
        minute: '2-digit',
        hour12: true,
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
    <Card>
      <Stack gap={2} justifyContent="center" height="100%">
        <Box>
          <Typography level="body-sm" sx={{ color: darkslate[300], m: 0 }}>
            my time
          </Typography>
          <Stack direction="row" alignItems="baseline" gap={1}>
            <Typography
              level="h3"
              fontWeight="bold"
              sx={{ fontVariantNumeric: 'tabular-nums' }}
            >
              {myTime || '--:--'}
            </Typography>
            <Typography level="body-sm" sx={{ color: darkslate[300] }}>
              IST
            </Typography>
          </Stack>
        </Box>

        <Box>
          <Typography level="body-sm" sx={{ color: darkslate[300], m: 0 }}>
            your time
          </Typography>
          <Stack direction="row" alignItems="baseline" gap={1}>
            <Typography
              level="h3"
              fontWeight="bold"
              sx={{ fontVariantNumeric: 'tabular-nums' }}
            >
              {visitorTime || '--:--'}
            </Typography>
            <Typography level="body-sm" sx={{ color: darkslate[300] }}>
              {visitorTz}
            </Typography>
          </Stack>
        </Box>
      </Stack>
    </Card>
  );
};
