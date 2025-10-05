"use client";
import { Box, Button, Grid2 as Grid, IconButton, Link, Stack, TextField, Typography, alpha } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import XIcon from "@mui/icons-material/X";
import InstagramIcon from "@mui/icons-material/Instagram";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import { useTheme } from "@mui/material/styles";

const listCompany = [
  ["About Us", "/about"],
  ["Careers", "/careers"],
  ["Blog", "/blogs"],
  ["Contact", "/contact"],
] as const;

const listShop = [
  ["All Flowers", "/shop"],
  ["Occasions", "/occasions"],
  ["Deals", "/deals"],
  ["Gift Cards", "/gift-cards"],
] as const;

export default function Footer() {
  const theme = useTheme();
  return (
    <Box component="footer" sx={{ mt: { xs: 8, md: 12 }, bgcolor: 'primary.main', color: 'primary.contrastText', position: 'relative' }}>
      {/* Decorative gradient overlay */}
      <Box sx={{ position: 'absolute', inset: 0, background: 'radial-gradient(circle at 30% 20%, rgba(255,144,231,0.25), transparent 60%)' }} aria-hidden />
      <Box sx={{ position: 'relative', maxWidth: 1440, mx: 'auto', px: { xs: 2, sm: 3, md: 6 }, py: { xs: 6, md: 10 } }}>
        <Grid container spacing={{ xs: 6, md: 8 }}>
          <Grid size={{ xs: 12, md: 4 }}>
            <Stack spacing={3}>
              <Typography variant="h5" sx={{ fontWeight: 700, color: 'secondary.main' }}>Flower Shop<span style={{ color: theme.palette.common.white }}>.</span></Typography>
              <Typography variant="body2" sx={{ opacity: 0.85, maxWidth: 360 }}>
                Your trusted destination for fresh bouquets and curated floral gifts, delivered with care.
              </Typography>
              <Stack direction="row" spacing={1}>
                {[{icon:<FacebookIcon fontSize="small"/>, label:'Facebook'}, {icon:<XIcon fontSize="small"/>, label:'X'}, {icon:<InstagramIcon fontSize="small"/>, label:'Instagram'}, {icon:<WhatsAppIcon fontSize="small"/>, label:'WhatsApp'}].map(s => (
                  <IconButton key={s.label} aria-label={s.label} size="small" sx={{
                    bgcolor: alpha('#FFFFFF',0.15),
                    color: 'common.white',
                    '&:hover': { bgcolor: alpha('#FFFFFF',0.28) },
                    transition: 'background-color .25s'
                  }}>{s.icon}</IconButton>
                ))}
              </Stack>
            </Stack>
          </Grid>
          <Grid size={{ xs: 6, md: 2 }}>
            <Stack spacing={2}>
              <Typography variant="subtitle1" fontWeight={700}>Company</Typography>
              {listCompany.map(([label, href]) => (
                <Link key={label} href={href} underline="none" sx={{ color: 'primary.contrastText', opacity: 0.85, fontSize: 14, '&:hover': { opacity: 1, textDecoration: 'underline' }}}>{label}</Link>
              ))}
            </Stack>
          </Grid>
          <Grid size={{ xs: 6, md: 2 }}>
            <Stack spacing={2}>
              <Typography variant="subtitle1" fontWeight={700}>Shop</Typography>
              {listShop.map(([label, href]) => (
                <Link key={label} href={href} underline="none" sx={{ color: 'primary.contrastText', opacity: 0.85, fontSize: 14, '&:hover': { opacity: 1, textDecoration: 'underline' }}}>{label}</Link>
              ))}
            </Stack>
          </Grid>
          <Grid size={{ xs: 12, md: 4 }}>
            <Stack spacing={3}>
              <Typography variant="subtitle1" fontWeight={700}>Stay in the loop</Typography>
              <Stack direction={{ xs: 'column', sm: 'row' }} spacing={1.5}>
                <TextField
                  placeholder="Your email address"
                  fullWidth
                  size="small"
                  InputProps={{ sx: { color: 'common.white', '& input::placeholder': { opacity: 0.7, color: 'inherit' } } }}
                  sx={{
                    '& .MuiOutlinedInput-root': {
                      bgcolor: alpha('#FFFFFF',0.10),
                      borderRadius: 150,
                      backdropFilter: 'blur(4px)',
                      '& fieldset': { borderColor: 'rgba(255,255,255,0.25)' },
                      '&:hover fieldset': { borderColor: 'rgba(255,255,255,0.45)' },
                      '&.Mui-focused fieldset': { borderColor: '#FF90E7' }
                    }
                  }}
                />
                <Button variant="contained" color="secondary" sx={{ whiteSpace: 'nowrap', borderRadius: 150, px: 4 }}>Subscribe</Button>
              </Stack>
              <Typography variant="caption" sx={{ opacity: 0.75, lineHeight: 1.6 }}>
                By subscribing, you agree to our Terms & Privacy Policy.
              </Typography>
              <Stack spacing={1.2}>
                <Typography variant="subtitle1" fontWeight={700}>Contact</Typography>
                <Typography variant="body2" sx={{ opacity: 0.9 }}>+123-456-789</Typography>
                <Typography variant="body2" sx={{ opacity: 0.9 }}>support@flowershop.com</Typography>
                <Typography variant="body2" sx={{ opacity: 0.9 }}>123 Blossom St, Garden City</Typography>
              </Stack>
            </Stack>
          </Grid>
        </Grid>
      </Box>
      <Box sx={{ position: 'relative', borderTop: '1px solid rgba(255,255,255,0.25)', px: { xs: 2, sm: 3, md: 6 }, py: 2 }}>
        <Box sx={{ maxWidth: 1440, mx: 'auto', display: 'flex', flexDirection: { xs: 'column', md: 'row' }, gap: 2, alignItems: { xs: 'flex-start', md: 'center' }, justifyContent: 'space-between' }}>
          <Typography variant="caption" sx={{ opacity: 0.8 }}>
            © {new Date().getFullYear()} Flower Shop. All rights reserved.
          </Typography>
          <Stack direction="row" spacing={3} flexWrap="wrap" sx={{ '& a': { fontSize: 12 } }}>
            {['Privacy Policy','Terms of Service','Cookies'].map(item => (
              <Link key={item} href="#" underline="none" sx={{ color: 'primary.contrastText', opacity: 0.85, '&:hover': { opacity: 1, textDecoration: 'underline' } }}>{item}</Link>
            ))}
          </Stack>
        </Box>
      </Box>
    </Box>
  );
}
