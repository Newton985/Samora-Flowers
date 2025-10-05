"use client";
import React from 'react';
import { Box, Accordion, AccordionSummary, AccordionDetails, Typography, Stack } from '@mui/material';
import ExpandMoreRoundedIcon from '@mui/icons-material/ExpandMoreRounded';

interface FAQItem { q: string; a: string; }

const FAQS: FAQItem[] = [
  { q: 'How long do the flowers stay fresh?', a: 'Most bouquets remain fresh 5–7 days with regular water changes and cool placement.' },
  { q: 'Do you offer same-day delivery?', a: 'Yes, for orders placed before 2 PM local time in eligible delivery zones.' },
  { q: 'Can I customize a bouquet?', a: 'Absolutely. Contact support or add notes during checkout for customization requests.' },
  { q: 'What if I am not satisfied?', a: 'Reach out within 24 hours and we will arrange a replacement or suitable resolution.' },
];

export default function FAQAccordion() {
  return (
    <Box component="section" role="region" aria-labelledby="faq-heading" sx={{ py: { xs: 7, md: 10 } }}>
      <Stack spacing={1} sx={{ mb: 3 }}>
        <Typography id="faq-heading" component="h2" variant="h4" fontWeight={800}>Frequently Asked Questions</Typography>
        <Typography variant="body1" color="text.secondary">Answers to common queries</Typography>
      </Stack>
      <Box>
        {FAQS.map((f, i) => (
          <Accordion key={i} disableGutters square={false} sx={{ mb: 1, borderRadius: 2, '&:before': { display: 'none' }, border: '1px solid', borderColor: 'divider', overflow: 'hidden' }}>
            <AccordionSummary expandIcon={<ExpandMoreRoundedIcon />} aria-controls={`faq-${i}-content`} id={`faq-${i}-header`}>
              <Typography fontWeight={600}>{f.q}</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography variant="body2" color="text.secondary">{f.a}</Typography>
            </AccordionDetails>
          </Accordion>
        ))}
      </Box>
    </Box>
  );
}
