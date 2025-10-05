"use client";
import React from "react";
import {
  Stack,
  Typography,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from "@mui/material";
import { ProductQuery } from "@/types/product";

export interface SortBarProps {
  total: number;
  sort: ProductQuery["sort"];
  onChange: (sort: ProductQuery["sort"]) => void;
  disabled?: boolean;
}

const options = [
  { value: "newest", label: "Newest" },
  { value: "price-asc", label: "Price: Low to High" },
  { value: "price-desc", label: "Price: High to Low" },
  { value: "rating", label: "Top Rated" },
  { value: "name-asc", label: "Name A-Z" },
  { value: "name-desc", label: "Name Z-A" },
];

export function SortBar({ total, sort, onChange, disabled }: SortBarProps) {
  return (
    <Stack
      direction={{ xs: "column", sm: "row" }}
      spacing={2}
      alignItems={{ xs: "flex-start", sm: "center" }}
      justifyContent="space-between"
      sx={{ py: 1 }}
    >
      <FormControl size="small" sx={{ minWidth: 200 }} disabled={disabled}>
        <InputLabel shrink id="sort-label">Sort By</InputLabel>
        <Select
          labelId="sort-label"
          label="Sort By"
          value={sort || ""}
          onChange={(e) =>
            onChange((e.target.value as ProductQuery["sort"]) || undefined)
          }
          displayEmpty

        >
          <MenuItem value="">
            <em>Default</em>
          </MenuItem>
          {options.map((o) => (
            <MenuItem key={o.value} value={o.value}>
              {o.label}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Stack>
  );
}
