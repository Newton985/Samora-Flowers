import { notFound } from "next/navigation";
import { fetchProductBySlug } from "@/backend/actions/products";
import TopContactBar from "@/components/ui/TopContactBar";
import StoreAppBar from "@/components/ui/AppBar";
import Footer from "@/components/ui/Footer";

import { Box, Container, Breadcrumbs, Typography, Stack } from "@mui/material";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import Link from "next/link";
import ProductImageGallery from "@/components/product-details/ProductImageGallery";
import ProductInfo from "@/components/product-details/ProductInfo";
import ProductCustomization from "@/components/product-details/ProductCustomization";
import ProductActions from "@/components/product-details/ProductActions";
import ProductTabs from "@/components/product-details/ProductTabs";
import RelatedProducts from "@/components/product-details/RelatedProducts";
import ProductFeatures from "@/components/product-details/ProductFeatures";
import Newsletter from "@/components/product-details/Newsletter";

interface ProductDetailsPageProps {
  params: { slug: string };
}

export default async function ProductDetailsPage({
  params,
}: ProductDetailsPageProps) {
  const product = await fetchProductBySlug(params.slug);

  if (!product) {
    notFound();
  }

  return (
    <>
      <TopContactBar />
      <StoreAppBar />

      <Container maxWidth="lg" sx={{ py: 4 }}>
        {/* Breadcrumb Navigation */}
        <Breadcrumbs
          separator={<NavigateNextIcon fontSize="small" />}
          sx={{ mb: 4 }}
        >
          <Link
            href="/home"
            style={{ textDecoration: "none", color: "inherit", opacity: 0.8 }}
          >
            <Typography color="text.secondary">Home</Typography>
          </Link>
          <Link
            href="/"
            style={{ textDecoration: "none", color: "inherit", opacity: 0.8 }}
          >
            <Typography color="text.secondary">Shop</Typography>
          </Link>
          <Typography color="text.primary">Product Details</Typography>
        </Breadcrumbs>

        {/* Product Details Layout */}
        <Stack spacing={6}>
          {/* Main Product Section */}
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" },
              gap: { xs: 4, md: 6 },
              alignItems: "start",
            }}
          >
            {/* Left Column - Image Gallery */}
            <ProductImageGallery
              images={product.images || [product.image]}
              productName={product.name}
            />

            {/* Right Column - Product Info & Actions */}
            <Stack spacing={3}>
              <ProductInfo product={product} />
              <ProductCustomization
                sizes={product.sizes}
                colors={product.colors}
              />
              <ProductActions
                productId={product.id}
                price={product.price}
                currency={product.currency}
              />
            </Stack>
          </Box>

          {/* Product Tabs */}
          <ProductTabs
            description={product.description}
            sku={product.sku}
            tags={product.tags}
            shareUrls={product.shareUrls}
          />

          {/* Related Products */}
          <RelatedProducts />

          {/* Features Section */}
          <ProductFeatures />

          {/* Newsletter */}
          <Newsletter />
        </Stack>
      </Container>

      <Footer />
    </>
  );
}
