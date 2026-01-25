"use client";

import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";
import { Stack, Typography } from "@mui/material";
import { forwardRef } from "react";
import { Card } from "@/components/Card";
import { primary } from "@/theme";

export const ExperienceLinkCard = forwardRef<HTMLDivElement>((_, ref) => {
  return (
    <Card ref={ref} href="/experience">
      <Stack direction="row" justifyContent="space-between" alignItems="flex-start" height="100%">
        <Typography variant="h6" fontWeight="bold" sx={{ m: 0 }}>
          Experience
        </Typography>
        <ArrowOutwardIcon
          sx={{
            transition: "transform 0.1s ease, color 0.1s ease",
            ".MuiBox-root:hover &": {
              color: primary[500],
              transform: "translate(2px, -2px)",
            },
          }}
        />
      </Stack>
    </Card>
  );
});
