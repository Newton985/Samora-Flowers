'use client';

import { useState } from 'react';
import { 
  Box, 
  Tabs, 
  Tab, 
  Typography, 
  Stack, 
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Divider
} from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel({ children, value, index, ...other }: TabPanelProps) {
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`product-tabpanel-${index}`}
      aria-labelledby={`product-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ pt: 3 }}>
          {children}
        </Box>
      )}
    </div>
  );
}

interface ProductTabsProps {
  description?: string;
  sku?: string;
  tags?: string[];
  shareUrls?: Record<string, string>;
}

export default function ProductTabs({ description, sku, tags }: ProductTabsProps) {
  const [activeTab, setActiveTab] = useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setActiveTab(newValue);
  };

  // Mock features for description
  const productFeatures = [
    "100% Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    "Ut at nunc vel nisi gravida dictum.",
    "Donec non velit sed risus tincidunt suscipit.",
    "Cras laoreet lacus in dui posuere fringilla."
  ];

  return (
    <Box sx={{ width: '100%', mt: 4 }}>
      {/* Tab Navigation */}
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs 
          value={activeTab} 
          onChange={handleChange}
          variant="scrollable"
          scrollButtons="auto"
          sx={{
            '& .MuiTab-root': {
              textTransform: 'none',
              fontWeight: 600,
              fontSize: { xs: '1rem', md: '1.25rem' },
              color: 'text.secondary',
              opacity: 0.6,
              py: 2,
              px: { xs: 2, md: 4 },
            },
            '& .Mui-selected': {
              color: 'primary.main !important',
              opacity: 1,
            },
            '& .MuiTabs-indicator': {
              height: 4,
              borderRadius: '10px 10px 0 0',
              bgcolor: 'primary.main',
            },
          }}
        >
          <Tab label="Description" />
          <Tab label="Additional Information" />
          <Tab label="Review" />
        </Tabs>
      </Box>

      {/* Description Tab */}
      <TabPanel value={activeTab} index={0}>
        <Stack spacing={3}>
          {/* Main Description */}
          <Typography 
            variant="body1" 
            color="text.secondary"
            sx={{ 
              lineHeight: 1.75,
              fontSize: { xs: '1rem', md: '1.125rem' }
            }}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud 
            exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </Typography>
          
          <Typography 
            variant="body1" 
            color="text.secondary"
            sx={{ 
              lineHeight: 1.75,
              fontSize: { xs: '1rem', md: '1.125rem' }
            }}
          >
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque 
            laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi 
            architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas 
            sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione 
            voluptatem sequi nesciunt.
          </Typography>

          {/* Features List */}
          <List sx={{ py: 2 }}>
            {productFeatures.map((feature, index) => (
              <ListItem key={index} sx={{ px: 0, py: 0.5 }}>
                <ListItemIcon sx={{ minWidth: 40 }}>
                  <CheckCircleIcon color="success" sx={{ fontSize: 20 }} />
                </ListItemIcon>
                <ListItemText 
                  primary={feature}
                  primaryTypographyProps={{
                    color: 'text.secondary',
                    fontSize: { xs: '1rem', md: '1.125rem' },
                  }}
                />
              </ListItem>
            ))}
          </List>
        </Stack>
      </TabPanel>

      {/* Additional Information Tab */}
      <TabPanel value={activeTab} index={1}>
        <Stack spacing={2} divider={<Divider />}>
          <Box sx={{ display: 'flex', py: 1 }}>
            <Typography 
              variant="body1" 
              sx={{ 
                fontWeight: 600,
                minWidth: 120,
                color: 'text.primary'
              }}
            >
              Material:
            </Typography>
            <Typography variant="body1" color="text.secondary">
              Fresh seasonal blooms
            </Typography>
          </Box>
          
          <Box sx={{ display: 'flex', py: 1 }}>
            <Typography 
              variant="body1" 
              sx={{ 
                fontWeight: 600,
                minWidth: 120,
                color: 'text.primary'
              }}
            >
              Care:
            </Typography>
            <Typography variant="body1" color="text.secondary">
              Keep in cool, indirect sunlight
            </Typography>
          </Box>

          <Box sx={{ display: 'flex', py: 1 }}>
            <Typography 
              variant="body1" 
              sx={{ 
                fontWeight: 600,
                minWidth: 120,
                color: 'text.primary'
              }}
            >
              Lifespan:
            </Typography>
            <Typography variant="body1" color="text.secondary">
              7-10 days with proper care
            </Typography>
          </Box>

          {sku && (
            <Box sx={{ display: 'flex', py: 1 }}>
              <Typography 
                variant="body1" 
                sx={{ 
                  fontWeight: 600,
                  minWidth: 120,
                  color: 'text.primary'
                }}
              >
                SKU:
              </Typography>
              <Typography variant="body1" color="text.secondary">
                {sku}
              </Typography>
            </Box>
          )}

          {tags && tags.length > 0 && (
            <Box sx={{ display: 'flex', py: 1 }}>
              <Typography 
                variant="body1" 
                sx={{ 
                  fontWeight: 600,
                  minWidth: 120,
                  color: 'text.primary'
                }}
              >
                Categories:
              </Typography>
              <Typography variant="body1" color="text.secondary">
                {tags.join(', ')}
              </Typography>
            </Box>
          )}
        </Stack>
      </TabPanel>

      {/* Review Tab */}
      <TabPanel value={activeTab} index={2}>
        <Stack spacing={3} alignItems="center" sx={{ py: 4 }}>
          <Typography variant="h6" color="text.secondary">
            No reviews yet
          </Typography>
          <Typography variant="body2" color="text.secondary" textAlign="center">
            Be the first to review this product and help other customers make their decision.
          </Typography>
        </Stack>
      </TabPanel>
    </Box>
  );
}