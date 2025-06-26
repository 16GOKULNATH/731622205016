import React, { useState } from 'react';
import { TextField, Button, Box, Typography } from '@mui/material';
import Logger from '../middleware/Logger';

export default function ShortenerForm({ onShorten }) {
  const [urls, setUrls] = useState([{ longUrl: '', validity: '', shortcode: '' }]);

  const handleChange = (index, field, value) => {
    const updated = [...urls];
    updated[index][field] = value;
    setUrls(updated);
  };

  const handleSubmit = () => {
    const payload = urls.map((entry, i) => {
      Logger(`Submitting URL #${i + 1}`, entry);
      return {
        ...entry,
        validity: entry.validity ? parseInt(entry.validity) : 30
      };
    });
    onShorten(payload);
  };

  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h5" gutterBottom>URL Shortener</Typography>
      {urls.map((entry, i) => (
        <Box key={i} sx={{ mb: 2 }}>
          <TextField
            label="Original URL"
            fullWidth
            value={entry.longUrl}
            onChange={(e) => handleChange(i, 'longUrl', e.target.value)}
            sx={{ mb: 1 }}
          />
          <TextField
            label="Validity (in minutes)"
            type="number"
            fullWidth
            value={entry.validity}
            onChange={(e) => handleChange(i, 'validity', e.target.value)}
            sx={{ mb: 1 }}
          />
          <TextField
            label="Preferred Shortcode (optional)"
            fullWidth
            value={entry.shortcode}
            onChange={(e) => handleChange(i, 'shortcode', e.target.value)}
          />
        </Box>
      ))}
      <Button variant="contained" onClick={handleSubmit}>Shorten</Button>
    </Box>
  );
}
