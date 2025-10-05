"use client";
import { Roboto } from "next/font/google";
import { createTheme, responsiveFontSizes } from "@mui/material/styles";

// Design Token Notes (extracted from Figma):
// Colors:
//   Primary Purple: #5E00A5
//   Pink Accent: #FF90E7
//   Neutral Text Primary: #242424
//   Neutral Text Secondary: #484848
//   Background Gray: #F5F5F5
//   Surface / Paper: #FFFFFF
//   Rating Yellow: #FCAF23
//   Divider Stroke (low emphasis): rgba(36,36,36,0.10)
// Typography scale (px): 58, 48, 38, 32, 28, 24, 20, 18, 16, 14, 12
//   Mapping -> h1..h6, subtitle, body, overline
// Radii: 8, 12, 16, 24, Large Pills 150–200 (we normalize as 170 for big pill buttons)
// Spacing: 4pt base (already default in MUI via theme.spacing)
// Shadows: subtle lifted cards (0 4 16 / 0.08), focus ring (0 0 0 3 rgba(94,0,165,.35)) implemented via custom CSS vars.

const roboto = Roboto({
  weight: ["100", "300", "400", "500", "700", "900"],
  subsets: ["latin"],
  display: "swap",
});

let theme = createTheme({
  palette: {
    primary: {
      main: "#5E00A5",
      light: "#9B47FF",
      dark: "#3A0065",
      contrastText: "#FFFFFF",
    },
    secondary: {
      main: "#FF90E7",
      light: "#FFC4F9",
      dark: "#D655B3",
      contrastText: "#242424",
    },
    text: {
      primary: "#242424",
      secondary: "#484848",
    },
    divider: "rgba(36,36,36,0.10)",
    background: {
      default: "#FAFAFA", // slightly lighter than #F5F5F5 for site background but close
      paper: "#FFFFFF",
    },
    warning: { main: "#FCAF23" }, // repurposed for star/yellow
    success: { main: "#2E7D32" },
    error: { main: "#C40C0C" },
    info: { main: "#024CAA" },
    // Custom extended tokens via palette augmentation (module augmentation optional)
    // accent, pink, etc can alias to secondary if needed in sx: color: 'secondary.main'
  },
  shape: {
    borderRadius: 12, // base radius; cards/sections use 16/24 and pills override
  },
  typography: {
    fontFamily: `Inter, Roboto, -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Helvetica Neue', Arial, sans-serif`,
    h1: {
      fontSize: 58,
      fontWeight: 600,
      lineHeight: 1.05,
      letterSpacing: -0.5,
    },
    h2: {
      fontSize: 48,
      fontWeight: 600,
      lineHeight: 1.08,
      letterSpacing: -0.3,
    },
    h3: { fontSize: 38, fontWeight: 600, lineHeight: 1.12 },
    h4: { fontSize: 32, fontWeight: 600, lineHeight: 1.18 },
    h5: { fontSize: 28, fontWeight: 600, lineHeight: 1.22 },
    h6: { fontSize: 24, fontWeight: 600, lineHeight: 1.25 },
    subtitle1: { fontSize: 20, fontWeight: 500, lineHeight: 1.3 },
    subtitle2: { fontSize: 18, fontWeight: 500, lineHeight: 1.35 },
    body1: { fontSize: 16, fontWeight: 400, lineHeight: 1.6 },
    body2: { fontSize: 14, fontWeight: 400, lineHeight: 1.5 },
    caption: {
      fontSize: 12,
      fontWeight: 400,
      lineHeight: 1.4,
      letterSpacing: 0.2,
    },
    button: { fontSize: 18, fontWeight: 600, textTransform: "none" },
  },
  shadows: [
    "none",
    "0px 1px 2px rgba(0,0,0,0.06)",
    "0px 2px 4px rgba(0,0,0,0.06)",
    "0px 4px 10px rgba(0,0,0,0.08)", // custom card
    "0px 6px 16px rgba(0,0,0,0.10)",
    ...Array(20).fill("0 0 0 0 rgba(0,0,0,0)"), // fill remaining to maintain length 25
  ] as any,
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        ":root": {
          "--focus-ring": "0 0 0 3px rgba(94,0,165,0.35)",
        },
        "::selection": {
          background: "#FF90E7",
          color: "#242424",
        },
        body: {
          backgroundColor: "#FAFAFA",
          color: "#242424",
        },
      },
    },
    MuiButton: {
      defaultProps: { disableElevation: true },
      styleOverrides: {
        root: {
          borderRadius: 170,
          paddingInline: 32,
          paddingBlock: 16,
          fontWeight: 600,
          "&:focus-visible": {
            outline: "none",
            boxShadow: "var(--focus-ring)",
          },
        },
        sizeSmall: {
          paddingBlock: 10,
          paddingInline: 20,
          fontSize: 12,
        },
        containedSecondary: {
          color: "#242424",
        },
      },
      // (Optional) custom variants could be added with module augmentation. Removed unsupported 'soft' variant.
    },
    MuiChip: {
      styleOverrides: {
        root: { borderRadius: 24, fontWeight: 500 },
        filled: { backgroundColor: "#FF90E7", color: "#242424" },
      },
    },
    MuiPaper: {
      styleOverrides: {
        rounded: { borderRadius: 24 },
        elevation1: { boxShadow: "0px 4px 10px rgba(0,0,0,0.08)" },
      },
    },
    MuiLink: {
      styleOverrides: {
        root: {
          textDecoration: "none",
          fontWeight: 500,
          "&:hover": { textDecoration: "underline" },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 24,
          boxShadow: "0px 4px 10px rgba(0,0,0,0.08)",
          transition: "transform .25s ease, box-shadow .25s ease",
          "&:hover": {
            transform: "translateY(-2px)",
            boxShadow: "0px 6px 16px rgba(0,0,0,0.10)",
          },
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          "& .MuiOutlinedInput-root": {
            borderRadius: 150,
            background: "#FFFFFF",
          },
        },
      },
    },
    MuiDivider: {
      styleOverrides: {
        root: { borderColor: "rgba(36,36,36,0.10)" },
      },
    },
  },
});

// Improve typography scaling across breakpoints
theme = responsiveFontSizes(theme);

export default theme;
