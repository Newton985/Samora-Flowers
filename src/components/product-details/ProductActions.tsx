'use client';

import { useState } from 'react';
import { 
  Box, 
  Button, 
  IconButton, 
  Typography, 
  Stack,
  Divider
} from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { PriceCurrency } from '@/types/product';
import { currencyFormat } from '@/utils/currencyFormat';
import AddToCartDialog from '@/components/app/AddToCartDialog';

interface ProductActionsProps {
  productId: string;
  price: number;
  currency: PriceCurrency;
  productName?: string;
  productImage?: string;
}

export default function ProductActions({ productId, price, currency, productName, productImage }: ProductActionsProps) {
  const [quantity, setQuantity] = useState(1);
  const [dialogOpen, setDialogOpen] = useState(false);

  const handleQuantityChange = (delta: number) => {
    setQuantity(prev => Math.max(1, prev + delta));
  };

  const handleAddToCart = () => {
    setDialogOpen(true);
  };

  const handleCloseDialog = () => {
    setDialogOpen(false);
  };

  const handleBuyNow = () => {
    // TODO: Implement buy now functionality  
    console.log('Buy now:', { productId, quantity });
  };

  return (
    <Stack spacing={3}>
      <Divider />
      
      {/* Quantity Selector */}
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          border: 1,
          borderColor: 'divider',
          borderRadius: 6,
          p: 1,
          maxWidth: '100%',
          position: 'relative',
        }}
      >
        {/* Decrease Button */}
        <IconButton
          onClick={() => handleQuantityChange(-1)}
          disabled={quantity <= 1}
          sx={{
            border: 1,
            borderColor: 'divider',
            borderRadius: 1.5,
            width: 48,
            height: 48,
            '&:hover': {
              bgcolor: 'grey.50',
            },
          }}
        >
          <RemoveIcon />
        </IconButton>

        {/* Quantity Display */}
        <Typography
          variant="h6"
          sx={{
            fontWeight: 500,
            minWidth: 60,
            textAlign: 'center',
            mx: 2,
          }}
        >
          {quantity}
        </Typography>

        {/* Increase Button */}
        <IconButton
          onClick={() => handleQuantityChange(1)}
          sx={{
            border: 1,
            borderColor: 'divider',
            borderRadius: 1.5,
            width: 48,
            height: 48,
            '&:hover': {
              bgcolor: 'grey.50',
            },
          }}
        >
          <AddIcon />
        </IconButton>
      </Box>

      {/* Action Buttons */}
      <Stack spacing={2}>
        {/* Add to Cart Button */}
        <Button
          variant="contained"
          size="large"
          onClick={handleAddToCart}
          sx={{
            bgcolor: 'primary.main',
            color: 'white',
            py: 2.5,
            borderRadius: 25,
            fontWeight: 600,
            fontSize: '1.125rem',
            textTransform: 'none',
            '&:hover': {
              bgcolor: 'primary.dark',
            },
          }}
        >
          Add To Cart
        </Button>

        {/* Buy Now Button */}
        <Button
          variant="contained"
          size="large"
          onClick={handleBuyNow}
          sx={{
            bgcolor: 'secondary.main',
            color: 'text.primary',
            py: 2.5,
            borderRadius: 25,
            fontWeight: 600,
            fontSize: '1.125rem',
            textTransform: 'none',
            '&:hover': {
              bgcolor: 'secondary.dark',
            },
          }}
        >
          Buy Now
        </Button>
      </Stack>

      <AddToCartDialog
        open={dialogOpen}
        onClose={handleCloseDialog}
        productName={productName}
        productImage={productImage}
      />
    </Stack>
  );
}