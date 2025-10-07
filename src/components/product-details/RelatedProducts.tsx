import { Box, Typography, Stack } from '@mui/material';
import { fetchProducts } from '@/backend/actions/products';
import ProductCard from '@/components/app/ProductCard';

export default async function RelatedProducts() {
  // Fetch a few related products - in real app this would use category/tags filtering
  const { items: products } = await fetchProducts({ 
    pageSize: 2,
    category: 'bouquets' // Mock related products filter
  });

  if (!products || products.length === 0) {
    return null;
  }

  return (
    <Stack spacing={4} sx={{ mt: 8 }}>
      {/* Section Header */}
      <Stack spacing={2} alignItems="center">
        <Typography 
          variant="h5"
          color="text.primary"
          sx={{ 
            fontWeight: 500,
            fontSize: { xs: '1.25rem', md: '1.5rem' },
            textAlign: 'center'
          }}
        >
          Related Products
        </Typography>
        
        <Typography 
          variant="h3"
          component="h2"
          sx={{ 
            fontWeight: 700,
            fontSize: { xs: '1.75rem', md: '2rem' },
            textAlign: 'center',
            maxWidth: 400
          }}
        >
          Explore{' '}
          <Box component="span" sx={{ color: 'primary.main' }}>
            Related Products
          </Box>
        </Typography>
      </Stack>

      {/* Product Grid */}
      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: { 
            xs: 'repeat(2, 1fr)',
            sm: 'repeat(2, 1fr)',
            md: 'repeat(4, 1fr)' 
          },
          gap: { xs: 2, md: 3 },
          mt: 4,
        }}
      >
        {products.slice(0, 2).map((product) => (
          <ProductCard 
            key={product.id} 
            name={product.name}
            description={product.description}
            price={`$${product.price}`}
            isNew={product.isNew}
            slug={product.slug}
          />
        ))}
      </Box>
    </Stack>
  );
}