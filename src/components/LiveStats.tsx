import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

interface StatsData {
  views_today: number;
  unique_sessions: number;
}

// Module-level cache to prevent redundant requests within a short timeframe
let statsCache: StatsData | null = null;
let lastFetchTime = 0;
const CACHE_DURATION = 5 * 60 * 1000; // 5 minutes in milliseconds

const LiveStats = () => {
  const [stats, setStats] = useState<StatsData | null>(statsCache);

  useEffect(() => {
    // If we have a valid cache, don't fetch again
    const now = Date.now();
    if (statsCache && (now - lastFetchTime < CACHE_DURATION)) {
      return;
    }

    const fetchStats = async () => {
      const url = import.meta.env.VITE_TINYBIRD_PIPE_URL;
      const token = import.meta.env.VITE_TINYBIRD_TOKEN;

      if (!url || !token) {
        return;
      }

      try {
        const response = await fetch(`${url}?token=${token}`);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const json = await response.json();

        let data: StatsData | null = null;
        if (json.data && Array.isArray(json.data) && json.data.length > 0) {
          data = json.data[0];
        } else if (typeof json.views_today === 'number') {
          data = json;
        }

        if (data && typeof data.views_today === 'number' && typeof data.unique_sessions === 'number') {
          const newStats = {
            views_today: data.views_today,
            unique_sessions: data.unique_sessions,
          };

          // Update cache
          statsCache = newStats;
          lastFetchTime = Date.now();

          setStats(newStats);
        }
      } catch (error) {
        // Silently fail, do not render component
      }
    };

    fetchStats();
  }, []);

  if (!stats) {
    return null;
  }

  return (
    <div className="text-xs text-slate-500 mb-2">
      👁{' '}
      <motion.span
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4 }}
      >
        {stats.views_today}
      </motion.span>
      {' views today · '}
      <motion.span
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4 }}
      >
        {stats.unique_sessions}
      </motion.span>
      {' visitors this month'}
    </div>
  );
};

export default LiveStats;
