"use client";
import React from 'react';
import { Grid2 as Grid, Skeleton, Stack } from '@mui/material';

export function ProductGridSkeleton({ count = 12 }: { count?: number }) {
  return (
    <Grid container spacing={2} columns={{ xs: 2, sm: 8, md: 12 }}>
      {Array.from({ length: count }).map((_,i) => (
        <Grid key={i} size={{ xs: 1, sm: 4, md: 3 }}>
          <Stack spacing={1.2} sx={{ p:1.5 }}>
            <Skeleton variant="rounded" height={220} animation="wave" />
            <Skeleton variant="text" width="60%" />
            <Skeleton variant="text" width="80%" />
            <Skeleton variant="text" width="40%" />
          </Stack>
        </Grid>
      ))}
    </Grid>
  );
}
