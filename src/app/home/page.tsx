"use client";
import React from "react";
import { Box, Container } from "@mui/material";
import StoreAppBar from "@/components/ui/AppBar";
import Footer from "@/components/ui/Footer";
import HeroSection from "@/components/app/HeroSection";
import OccasionsGrid from "@/components/app/OccasionsGrid";
import BestSellersSection from "@/components/app/BestSellersSection";
import TestimonialsSection from "@/components/app/TestimonialsSection";
import ProductCarousel from "@/components/app/ProductCarousel";
import BlogSection from "@/components/app/BlogSection";
import FAQAccordion from "@/components/app/FAQAccordion";

export default function HomePage() {
  return (
    <main>
      <StoreAppBar />

      <Box paddingX={{ xs: 0, md: 2, lg: 4 }}>
        {/* Modular Hero Section */}
        <HeroSection />

        {/* Modular Occasions Grid */}
        <Container maxWidth="xl" sx={{ pt: { xs: 1, md: 5 } }}>
          <OccasionsGrid />
        </Container>

        {/* Dual Promos Section */}
        {/* <Container maxWidth="xl">
          <DualPromos />
        </Container> */}

        {/* Feature Strip (Modular) */}
        {/* <Container maxWidth="xl">
          <FeatureList />
        </Container> */}

        {/* Weekly Deals Carousel */}
        <Container maxWidth="xl">
          <ProductCarousel
            title="Weekly Deals"
            subtitle="Fresh savings on seasonal picks"
          />
        </Container>

        {/* Best Sellers (Modular) */}
        <Container maxWidth="xl">
          <BestSellersSection />
        </Container>

        {/* Promo Banner (Modular) */}
        {/* <Container maxWidth="xl">
          <PromoBanner />
        </Container> */}

        {/* Metrics / Stats Strip */}
        {/* <Container maxWidth="xl">
          <MetricsStrip />
        </Container> */}

        {/* Testimonials (Modular) */}
        <Container maxWidth="xl">
          <TestimonialsSection />
        </Container>

        {/* Blog Section */}
        {/* <Container maxWidth="xl">
          <BlogSection />
        </Container> */}

        {/* Instagram Gallery */}
        {/* <Container maxWidth="xl">
          <InstagramGallery />
        </Container> */}

        {/* FAQ Section */}
        <Container maxWidth="xl">
          <FAQAccordion />
        </Container>

        {/* Newsletter (Modular) */}
        {/* <Container maxWidth="xl">
          <NewsletterSignup />
        </Container> */}
      </Box>

      {/* Footer */}
      <Footer />
    </main>
  );
}
