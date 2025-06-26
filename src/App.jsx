import React, { useState } from 'react';
import ShortenerForm from './components/ShortenerForm';
import StatisticsPage from './components/StatisticsPage';

export default function App() {
  const [stats, setStats] = useState([]);

  const handleShorten = (urls) => {
    const results = urls.map((url, index) => {
      const short = Math.random().toString(36).substr(2, 5);
      const now = new Date();
      const expiry = new Date(now.getTime() + url.validity * 60000);
      return {
        ...url,
        shortUrl: `http://localhost:3000/${short}`,
        createdAt: now.toISOString(),
        expiresAt: expiry.toISOString(),
        clicks: []
      };
    });
    setStats(results);
  };

  return (
    <>
      <ShortenerForm onShorten={handleShorten} />
      <StatisticsPage stats={stats} />
    </>
  );
}

