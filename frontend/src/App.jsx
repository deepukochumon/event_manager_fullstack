import React from 'react';
import { Alert, Box, Container, Typography } from '@mui/material';

export default function App() {
  return (
    <Container maxWidth="lg" sx={{ py: 8 }}>
      <Alert severity="info" sx={{ mb: 3 }}>
        Frontend shell initialized. Next batch will add the full event management UI and API integration.
      </Alert>
      <Box>
        <Typography variant="h4" gutterBottom>
          Event Manager
        </Typography>
        <Typography color="text.secondary">
          A responsive React dashboard for managing events, registrations, venues, attendees, and analytics.
        </Typography>
      </Box>
    </Container>
  );
}