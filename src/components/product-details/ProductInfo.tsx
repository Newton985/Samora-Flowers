import { Box, Typography, Stack, Chip, Rating, Divider, IconButton } from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { Product } from '@/types/product';
import { currencyFormat } from '@/utils/currencyFormat';

interface ProductInfoProps {
  product: Product;
}

export default function ProductInfo({ product }: ProductInfoProps) {
  return (
    <Stack spacing={3}>
      {/* Category */}
      <Typography 
        variant="h6" 
        color="text.secondary"
        sx={{ 
          textTransform: 'capitalize',
          fontSize: { xs: '1rem', md: '1.125rem' },
          opacity: 0.7
        }}
      >
        {product.category}
      </Typography>

      {/* Title and Stock Status */}
      <Stack spacing={2}>
        <Box sx={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: 2 }}>
          <Typography 
            variant="h4" 
            component="h1"
            sx={{ 
              fontWeight: 600,
              fontSize: { xs: '1.75rem', md: '2rem' },
              lineHeight: 1.2,
              flex: 1
            }}
          >
            {product.name}
          </Typography>
          
          {/* Wishlist Icon */}
          <IconButton
            sx={{
              border: 1,
              borderColor: 'divider',
              borderRadius: '50%',
              p: 1.5,
              mt: 0.5,
            }}
          >
            <FavoriteBorderIcon />
          </IconButton>
        </Box>

        {/* Stock Status */}
        <Chip
          label={product.available ? "In Stock" : "Out of Stock"}
          color={product.available ? "success" : "error"}
          variant="outlined"
          sx={{
            borderRadius: 25,
            alignSelf: 'flex-start',
            fontWeight: 500,
            px: 1,
          }}
        />
      </Stack>

      {/* Rating */}
      <Stack direction="row" spacing={1} alignItems="center">
        <Rating 
          value={product.rating || 0} 
          precision={0.1} 
          readOnly 
          size="small"
          sx={{ color: '#FFC107' }}
        />
        <Typography variant="body1" color="text.primary" fontWeight={500}>
          {product.rating?.toFixed(1)} ({product.ratingCount} Review{product.ratingCount !== 1 ? 's' : ''})
        </Typography>
      </Stack>

      {/* Price */}
      <Stack direction="row" spacing={2} alignItems="baseline">
        <Typography 
          variant="h4" 
          component="span"
          sx={{ 
            fontWeight: 600,
            fontSize: { xs: '1.5rem', md: '1.75rem' }
          }}
        >
          ${currencyFormat(product.price)}
        </Typography>
        {product.originalPrice && (
          <Typography 
            variant="h5"
            component="span"
            sx={{ 
              textDecoration: 'line-through',
              color: 'text.secondary',
              opacity: 0.6,
              fontSize: { xs: '1.25rem', md: '1.5rem' }
            }}
          >
            ${currencyFormat(product.originalPrice)}
          </Typography>
        )}
      </Stack>

      {/* Description */}
      <Typography 
        variant="body1" 
        color="text.secondary"
        sx={{ 
          lineHeight: 1.7,
          fontSize: { xs: '1rem', md: '1.125rem' }
        }}
      >
        {product.description}
      </Typography>

      <Divider sx={{ my: 2 }} />

      {/* Product Meta */}
      <Stack spacing={1.5}>
        {product.sku && (
          <Typography variant="body1" color="text.secondary">
            <Box component="span" sx={{ fontWeight: 600, color: 'text.primary' }}>
              SKU:
            </Box>{' '}
            {product.sku}
          </Typography>
        )}
        
        {product.tags && product.tags.length > 0 && (
          <Typography variant="body1" color="text.secondary">
            <Box component="span" sx={{ fontWeight: 600, color: 'text.primary' }}>
              Tags:
            </Box>{' '}
            {product.tags.join(', ')}
          </Typography>
        )}

        {/* Share Links */}
        {product.shareUrls && (
          <Box>
            <Typography 
              variant="body1" 
              color="text.secondary"
              sx={{ display: 'inline', mr: 1 }}
            >
              <Box component="span" sx={{ fontWeight: 600, color: 'text.primary' }}>
                Share:
              </Box>
            </Typography>
            <Stack direction="row" spacing={0.5} sx={{ display: 'inline-flex' }}>
              {Object.entries(product.shareUrls).map(([platform, url]) => (
                <IconButton
                  key={platform}
                  component="a"
                  href={url}
                  size="small"
                  sx={{
                    width: 30,
                    height: 30,
                    bgcolor: platform === 'facebook' ? '#1877F2' : 
                             platform === 'twitter' ? '#1DA1F2' :
                             platform === 'instagram' ? '#E4405F' :
                             platform === 'pinterest' ? '#BD081C' : 'grey.400',
                    color: 'white',
                    '&:hover': {
                      opacity: 0.8,
                    },
                  }}
                >
                  <Typography variant="caption" sx={{ fontSize: '0.7rem', fontWeight: 'bold' }}>
                    {platform.charAt(0).toUpperCase()}
                  </Typography>
                </IconButton>
              ))}
            </Stack>
          </Box>
        )}
      </Stack>
    </Stack>
  );
}