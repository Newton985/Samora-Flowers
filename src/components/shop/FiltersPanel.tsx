"use client";
import React from "react";
import {
  Box,
  Stack,
  Typography,
  Divider,
  FormGroup,
  FormControlLabel,
  Checkbox,
  Slider,
  Chip,
  Collapse,
  IconButton,
} from "@mui/material";
import ExpandMoreRoundedIcon from "@mui/icons-material/ExpandMoreRounded";
import { productFacetOptions } from "@/backend/actions/product-utils";

export interface FiltersState {
  categories: string[];
  occasions: string[];
  price: number[]; // [min, max]
  tags: string[];
}

interface FiltersPanelProps {
  value: FiltersState;
  onChange: (next: FiltersState) => void;
  disabled?: boolean;
}

const sectionSx = { pt: 1, pb: 2 };

function ToggleSection({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  const [open, setOpen] = React.useState(true);
  return (
    <Box sx={sectionSx}>
      <Stack
        direction="row"
        alignItems="center"
        justifyContent="space-between"
        onClick={() => setOpen((o) => !o)}
        sx={{ cursor: "pointer" }}
      >
        <Typography variant="subtitle2" fontWeight={600}>
          {title}
        </Typography>
        <IconButton
          size="small"
          aria-label={open ? `Collapse ${title}` : `Expand ${title}`}
          sx={{
            transform: open ? "rotate(180deg)" : "rotate(0deg)",
            transition: "transform .2s",
          }}
        >
          <ExpandMoreRoundedIcon fontSize="small" />
        </IconButton>
      </Stack>
      <Collapse in={open} unmountOnExit>
        <Box mt={1}>{children}</Box>
      </Collapse>
      <Divider sx={{ mt: 2 }} />
    </Box>
  );
}

export const defaultFilters: FiltersState = {
  categories: [],
  occasions: [],
  price: [productFacetOptions.price.min, productFacetOptions.price.max],
  tags: [],
};

export function FiltersPanel({ value, onChange, disabled }: FiltersPanelProps) {
  const update = (partial: Partial<FiltersState>) =>
    onChange({ ...value, ...partial });

  const toggleInArray = (key: keyof FiltersState, item: string) => {
    const arr = new Set(value[key] as string[]);
    if (arr.has(item)) arr.delete(item);
    else arr.add(item);
    update({ [key]: Array.from(arr) } as any);
  };

    return (
      <Box aria-label="Filters" role="form" sx={{ position: { md: 'sticky' }, top: { md: 88 } }}>
      <Typography variant="h6" mb={1} fontWeight={700}>
        Filters
      </Typography>
      <Divider />
      <ToggleSection title="Categories">
        <FormGroup>
          {productFacetOptions.categories.map((c) => (
            <FormControlLabel
              key={c}
              control={
                <Checkbox
                  size="small"
                  checked={value.categories.includes(c)}
                  onChange={() => toggleInArray("categories", c)}
                  disabled={disabled}
                />
              }
              label={c}
            />
          ))}
        </FormGroup>
      </ToggleSection>
      <ToggleSection title="Occasions">
        <FormGroup>
          {productFacetOptions.occasions.map((o) => (
            <FormControlLabel
              key={o}
              control={
                <Checkbox
                  size="small"
                  checked={value.occasions.includes(o!)}
                  onChange={() => toggleInArray("occasions", o!)}
                  disabled={disabled}
                />
              }
              label={o}
            />
          ))}
        </FormGroup>
      </ToggleSection>
      <ToggleSection title="Price Range">
        <Slider
          size="small"
          value={value.price}
          onChange={(_, val) => update({ price: val as number[] })}
          min={productFacetOptions.price.min}
          max={productFacetOptions.price.max}
          valueLabelDisplay="auto"
          disabled={disabled}
        />
      </ToggleSection>
      <ToggleSection title="Tags">
        <Stack direction="row" flexWrap="wrap" gap={1}>
          {productFacetOptions.tags.map((tag) => {
            const active = value.tags.includes(tag);
            return (
              <Chip
                key={tag}
                size="small"
                label={tag}
                color={active ? "primary" : "default"}
                onClick={() => toggleInArray("tags", tag)}
                disabled={disabled}
                variant={active ? "filled" : "outlined"}
              />
            );
          })}
        </Stack>
      </ToggleSection>
    </Box>
  );
}
