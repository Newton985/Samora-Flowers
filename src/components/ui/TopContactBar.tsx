"use client";
import { Box, IconButton, Stack, Typography, Fade } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import XIcon from "@mui/icons-material/X";
import InstagramIcon from "@mui/icons-material/Instagram";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import React from "react";

interface TopContactBarProps {
  promoText?: string;
  showDismiss?: boolean;
}

// Figma: 84px desktop bar originally for contact/promo; we condense to ~48px height while keeping message centered.
export default function TopContactBar({
  promoText = "Sign up and GET 25% OFF for your first order. Sign up now",
  showDismiss = true,
}: TopContactBarProps) {
  const [open, setOpen] = React.useState(true);
  const handleClose = () => setOpen(false);

  return (
    <Fade in={open} unmountOnExit>
      <Box
        component="section"
        role="banner"
        sx={{
          width: "100%",
          bgcolor: "primary.main",
          color: "primary.contrastText",
          px: { xs: 1, sm: 2 },
          py: 0.5,
        }}
      >
        <Stack
          direction="row"
          alignItems="center"
          gap={1}
          sx={{
            maxWidth: 1440,
            mx: "auto",
            minHeight: 48,
          }}
        >
          {/* Left (optional dismiss) */}
            {showDismiss && (
              <IconButton
                aria-label="Dismiss promotion"
                size="small"
                onClick={handleClose}
                sx={{ color: "primary.contrastText", opacity: 0.85, '&:hover': { opacity: 1 } }}
              >
                <CloseRoundedIcon fontSize="small" />
              </IconButton>
            )}
          {/* Center message */}
          <Typography
            variant="subtitle2"
            sx={{
              fontWeight: 400,
              flexGrow: 1,
              textAlign: { xs: "center", sm: "center" },
              fontSize: { xs: 14, sm: 16 },
              lineHeight: 1.6,
              px: { xs: 1, sm: 2 },
            }}
          >
            {promoText.split(/(GET 25% OFF|Sign up now)/).map((seg, i) => {
              if (seg === "GET 25% OFF") {
                return (
                  <Typography
                    key={i}
                    component="span"
                    sx={{ fontWeight: 600, color: "secondary.main" }}
                  >
                    {seg}
                  </Typography>
                );
              }
              if (seg === "Sign up now") {
                return (
                  <Typography
                    key={i}
                    component="span"
                    sx={{ fontWeight: 600, textDecoration: "underline", color: "secondary.main", cursor: 'pointer' }}
                  >
                    {seg}
                  </Typography>
                );
              }
              return seg ? <React.Fragment key={i}>{seg}</React.Fragment> : null;
            })}
          </Typography>
          {/* Right social icons */}
          <Stack direction="row" spacing={0.5} sx={{ display: { xs: 'none', sm: 'flex' } }}>
            {[{
              icon: <FacebookIcon fontSize="small" />,
              label: 'Facebook'
            }, { icon: <XIcon fontSize="small" />, label: 'X' }, { icon: <InstagramIcon fontSize="small" />, label: 'Instagram' }, { icon: <WhatsAppIcon fontSize="small" />, label: 'WhatsApp' }].map(({ icon, label }) => (
              <IconButton
                key={label}
                aria-label={label}
                size="small"
                sx={{
                  color: 'primary.contrastText',
                  '&:hover': { backgroundColor: 'rgba(255,255,255,0.15)' },
                }}
              >
                {icon}
              </IconButton>
            ))}
          </Stack>
        </Stack>
      </Box>
    </Fade>
  );
}
