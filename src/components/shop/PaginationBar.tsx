"use client";
import React from 'react';
import { Stack, Pagination } from '@mui/material';

interface PaginationBarProps {
  page: number;
  totalPages: number;
  onChange: (page: number) => void;
  disabled?: boolean;
}

export function PaginationBar({ page, totalPages, onChange, disabled }: PaginationBarProps) {
  if (totalPages <= 1) return null;
  return (
    <Stack alignItems="center" sx={{ py: 4 }}>
      <Pagination count={totalPages} page={page} onChange={(_,p)=> onChange(p)} disabled={disabled} color="primary" shape="rounded" />
    </Stack>
  );
}
