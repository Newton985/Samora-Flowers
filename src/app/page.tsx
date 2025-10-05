"use client";
import React from "react";
import { Box, Container } from "@mui/material";
import TopContactBar from "@/components/ui/TopContactBar";
import StoreAppBar from "@/components/ui/AppBar";
import Footer from "@/components/ui/Footer";
import HeroSection from "@/components/app/HeroSection";
import OccasionsGrid from "@/components/app/OccasionsGrid";
import DualPromos from "@/components/app/DualPromos";
import FeatureList from "@/components/app/FeatureList";
import BestSellersSection from "@/components/app/BestSellersSection";
import PromoBanner from "@/components/app/PromoBanner";
import TestimonialsSection from "@/components/app/TestimonialsSection";
import MetricsStrip from "@/components/app/MetricsStrip";
import ProductCarousel from "@/components/app/ProductCarousel";
import BlogSection from "@/components/app/BlogSection";
import InstagramGallery from "@/components/app/InstagramGallery";
import FAQAccordion from "@/components/app/FAQAccordion";
import NewsletterSignup from "@/components/app/NewsletterSignup";

export default function HomePage() {
  return (
    <main>
      {/* Top bars */}
      <TopContactBar />
      <StoreAppBar />

      <Box paddingX={{ xs: 0, md: 2, lg: 4 }}>
        {/* Modular Hero Section */}
        <HeroSection />

        {/* Modular Occasions Grid */}
        <Container
          maxWidth="xl"
          sx={{ pt: { xs: 7, md: 10 }, bgcolor: "background.default" }}
        >
          <OccasionsGrid />
        </Container>

        {/* Dual Promos Section */}
        <Container maxWidth="xl">
          <DualPromos />
        </Container>

        {/* Feature Strip (Modular) */}
        <Container maxWidth="xl">
          <FeatureList />
        </Container>

        {/* Best Sellers (Modular) */}
        <Container maxWidth="xl">
          <BestSellersSection />
        </Container>

        {/* Promo Banner (Modular) */}
        <Container maxWidth="xl">
          <PromoBanner />
        </Container>

        {/* Metrics / Stats Strip */}
        <Container maxWidth="xl">
          <MetricsStrip />
        </Container>

        {/* Weekly Deals Carousel */}
        <Container maxWidth="xl">
          <ProductCarousel
            title="Weekly Deals"
            subtitle="Fresh savings on seasonal picks"
          />
        </Container>

        {/* New Arrivals Carousel */}
        <Container maxWidth="xl">
          <ProductCarousel
            title="New Arrivals"
            subtitle="Latest curated bouquets"
          />
        </Container>

        {/* Testimonials (Modular) */}
        <Container maxWidth="xl">
          <TestimonialsSection />
        </Container>

        {/* Blog Section */}
        <Container maxWidth="xl">
          <BlogSection />
        </Container>

        {/* Instagram Gallery */}
        <Container maxWidth="xl">
          <InstagramGallery />
        </Container>

        {/* FAQ Section */}
        <Container maxWidth="xl">
          <FAQAccordion />
        </Container>

        {/* Newsletter (Modular) */}
        <Container maxWidth="xl">
          <NewsletterSignup />
        </Container>
      </Box>

      {/* Footer */}
      <Footer />
    </main>
  );
}
