import { Box, Typography, Stack, Card, CardContent } from '@mui/material';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import HeadsetMicIcon from '@mui/icons-material/HeadsetMic';

const features = [
  {
    icon: <LocalShippingIcon sx={{ fontSize: 40 }} />,
    title: 'Free Shipping',
    description: 'Free shipping for order above $50',
    color: '#5E00A5',
  },
  {
    icon: <AccountBalanceWalletIcon sx={{ fontSize: 40 }} />,
    title: 'Flexible Payment',
    description: 'Multiple secure payment options',
    color: '#5E00A5',
  },
  {
    icon: <HeadsetMicIcon sx={{ fontSize: 40 }} />,
    title: '24x7 Support',
    description: 'We support online all days.',
    color: '#FF90E7',
  },
];

export default function ProductFeatures() {
  return (
    <Box sx={{ py: 6 }}>
      <Stack spacing={6}>
        {features.map((feature, index) => (
          <Card
            key={index}
            elevation={0}
            sx={{
              bgcolor: 'transparent',
            }}
          >
            <CardContent sx={{ p: 0 }}>
              <Stack direction="row" spacing={2} alignItems="flex-start">
                {/* Icon */}
                <Box
                  sx={{
                    width: 56,
                    height: 56,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    bgcolor: feature.color === '#FF90E7' ? 'secondary.main' : 'primary.main',
                    borderRadius: '50%',
                    color: feature.color === '#FF90E7' ? 'text.primary' : 'white',
                    flexShrink: 0,
                  }}
                >
                  {feature.icon}
                </Box>

                {/* Content */}
                <Stack spacing={0.5} sx={{ flex: 1 }}>
                  <Typography 
                    variant="h6"
                    sx={{ 
                      fontWeight: 700,
                      fontSize: { xs: '1.125rem', md: '1.25rem' },
                      color: 'text.primary'
                    }}
                  >
                    {feature.title}
                  </Typography>
                  <Typography 
                    variant="body2"
                    color="text.secondary"
                    sx={{ 
                      lineHeight: 1.75,
                      fontSize: { xs: '0.875rem', md: '1rem' }
                    }}
                  >
                    {feature.description}
                  </Typography>
                </Stack>
              </Stack>
            </CardContent>
          </Card>
        ))}
      </Stack>
    </Box>
  );
}