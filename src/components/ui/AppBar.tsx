"use client";

import React from "react";
import NextLink from "next/link";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Divider from "@mui/material/Divider";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import FavoriteBorderRoundedIcon from "@mui/icons-material/FavoriteBorderRounded";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";

// Brand mark with consistent sizing and token usage
function BrandMark() {
  const theme = useTheme();
  return (
    <Box
      display="flex"
      alignItems="center"
      gap={0.75}
      component={NextLink}
      href="/"
      sx={{ textDecoration: "none" }}
    >
      <Box
        sx={{
          width: { xs: 36, md: 44 },
          height: { xs: 36, md: 44 },
          borderRadius: "50%",
          bgcolor: "primary.main",
          display: "grid",
          placeItems: "center",
          boxShadow: "0px 2px 4px rgba(0,0,0,0.15)",
        }}
      >
        <Box
          component="span"
          sx={{
            fontWeight: 700,
            lineHeight: 1,
            fontSize: { xs: 14, md: 16 },
            color: "common.white",
          }}
        >
          ✿
        </Box>
      </Box>
      <Typography
        variant="h6"
        sx={{
          fontSize: { xs: 18, md: 26 },
          fontWeight: 600,
          color: theme.palette.primary.main,
          letterSpacing: 0.5,
          display: "flex",
          alignItems: "baseline",
        }}
      >
        Samora Flowers
        <Typography component="span" sx={{ color: "text.primary" }}>
          .{" "}
        </Typography>
      </Typography>
    </Box>
  );
}

const navItems: { label: string; href: string }[] = [
  { label: "Home", href: "/" },
  { label: "Shop", href: "/shop" },
  { label: "About Us", href: "/about" },
  { label: "Contact Us", href: "/contact" },
  { label: "Blogs", href: "/blogs" },
];

export default function AppBar() {
  const theme = useTheme();
  const isMdUp = useMediaQuery(theme.breakpoints.up("md"));
  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (next: boolean) => () => setOpen(next);

  return (
    <MuiAppBar
      position="sticky"
      elevation={0}
      sx={{
        bgcolor: "background.paper",
        color: "text.primary",
        borderBottom: "1px solid",
        borderColor: "divider",
        backdropFilter: "blur(6px)",
      }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters sx={{ minHeight: { xs: 70, md: 92 }, gap: 2 }}>
          {/* Left: Mobile menu button */}
          {!isMdUp && (
            <IconButton
              aria-label="Open navigation"
              edge="start"
              onClick={toggleDrawer(true)}
              sx={{ mr: 1 }}
            >
              <MenuRoundedIcon sx={{ width: 24, height: 24 }} />
            </IconButton>
          )}

          {/* Brand */}
          <BrandMark />

          {/* Center: Nav + Search (desktop only) */}
          {isMdUp && (
            <Stack
              direction="row"
              spacing={4}
              sx={{ ml: 5, flexGrow: 1 }}
              alignItems="center"
            >
              {navItems.map((item) => {
                const active = item.href === "/"; // placeholder active logic
                return (
                  <Link
                    key={item.href}
                    component={NextLink}
                    href={item.href}
                    underline="none"
                    sx={{
                      position: "relative",
                      fontSize: 16,
                      fontWeight: active ? 700 : 500,
                      color: active ? "primary.main" : "text.primary",
                      py: 0.5,
                      "&:after": active
                        ? {
                            content: '""',
                            position: "absolute",
                            left: 0,
                            right: 0,
                            bottom: -6,
                            height: 3,
                            borderRadius: 3,
                            background:
                              "linear-gradient(90deg,#5E00A5,#FF90E7)",
                          }
                        : undefined,
                      "&:hover": { color: "primary.main" },
                    }}
                  >
                    {item.label}
                  </Link>
                );
              })}
              <Box sx={{ flexGrow: 1 }} />
              <TextField
                placeholder="Search for flowers..."
                variant="outlined"
                size="small"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <SearchRoundedIcon sx={{ color: "text.secondary" }} />
                    </InputAdornment>
                  ),
                }}
                sx={{
                  minWidth: 340,
                  "& .MuiOutlinedInput-root": {
                    borderRadius: 150,
                    background: "#FFFFFF",
                    boxShadow: "0 0 0 1px rgba(36,36,36,0.08) inset",
                    "&:hover": {
                      boxShadow: "0 0 0 1px rgba(36,36,36,0.20) inset",
                    },
                    "&.Mui-focused": {
                      boxShadow: "0 0 0 2px rgba(94,0,165,0.35) inset",
                    },
                  },
                }}
              />
            </Stack>
          )}

          {/* Right: Actions */}
          <Stack
            direction="row"
            spacing={1.5}
            sx={{ ml: "auto" }}
            alignItems="center"
          >
            <IconButton
              aria-label="Search"
              size="large"
              sx={{ color: "text.primary" }}
            >
              <SearchRoundedIcon sx={{ width: 24, height: 24 }} />
            </IconButton>
            <IconButton
              aria-label="Cart"
              size="large"
              sx={{ color: "text.primary" }}
            >
              <ShoppingBagOutlinedIcon sx={{ width: 24, height: 24 }} />
            </IconButton>
            {isMdUp && (
              <IconButton
                aria-label="Account"
                size="large"
                sx={{ color: "text.primary" }}
              >
                <AccountCircleOutlinedIcon sx={{ width: 24, height: 24 }} />
              </IconButton>
            )}
          </Stack>
        </Toolbar>
      </Container>

      {/* Mobile drawer */}
      <Drawer
        anchor="left"
        open={open}
        onClose={toggleDrawer(false)}
        PaperProps={{ sx: { width: 320, bgcolor: "background.paper" } }}
      >
        <Box
          role="presentation"
          onClick={toggleDrawer(false)}
          onKeyDown={toggleDrawer(false)}
        >
          <Stack
            direction="row"
            alignItems="center"
            justifyContent="space-between"
            sx={{ px: 2, py: 2 }}
          >
            <BrandMark />
          </Stack>
          <Divider />
          <Box sx={{ px: 2, py: 2 }}>
            <TextField
              fullWidth
              placeholder="Search for flowers..."
              variant="outlined"
              size="small"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <SearchRoundedIcon sx={{ color: "text.secondary" }} />
                  </InputAdornment>
                ),
              }}
              sx={{ "& .MuiOutlinedInput-root": { borderRadius: 999 } }}
            />
          </Box>
          <List>
            {navItems.map((item) => (
              <ListItem key={item.href} disablePadding>
                <ListItemButton component={NextLink} href={item.href}>
                  <ListItemText
                    primary={item.label}
                    primaryTypographyProps={{ fontWeight: 600 }}
                  />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
          <Divider />
          <Stack direction="row" spacing={1} sx={{ px: 2, py: 1 }}>
            {[
              { icon: <SearchRoundedIcon />, label: "Search" },
              { icon: <FavoriteBorderRoundedIcon />, label: "Wishlist" },
              { icon: <ShoppingBagOutlinedIcon />, label: "Cart" },
              { icon: <AccountCircleOutlinedIcon />, label: "Account" },
            ].map((i) => (
              <IconButton key={i.label} aria-label={i.label}>
                {i.icon}
              </IconButton>
            ))}
          </Stack>
        </Box>
      </Drawer>
    </MuiAppBar>
  );
}
