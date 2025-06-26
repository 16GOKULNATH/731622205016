import React from 'react';
import { Box, Typography } from '@mui/material';

export default function StatisticsPage({ stats }) {
  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h5" gutterBottom>Statistics</Typography>
      {stats.map((s, i) => (
        <Box key={i} sx={{ mb: 2 }}>
          <Typography><strong>Short URL:</strong> {s.shortUrl}</Typography>
          <Typography><strong>Created:</strong> {s.createdAt}</Typography>
          <Typography><strong>Expires:</strong> {s.expiresAt}</Typography>
          <Typography><strong>Clicks:</strong> {s.clicks.length}</Typography>
          <Typography><strong>Click Details:</strong></Typography>
          <ul>
            {s.clicks.map((click, j) => (
              <li key={j}>
                {click.timestamp} | {click.source} | {click.location}
              </li>
            ))}
          </ul>
        </Box>
      ))}
    </Box>
  );
}

