import { useState, useEffect } from 'react';
import { Activity } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function VisitorCounter() {
  const [count, setCount] = useState(null);
  const [glitch, setGlitch] = useState(false);

  useEffect(() => {
    const trackVisit = () => {
      const visitorKey = 'portfolio_visitor_id';
      const countKey = 'portfolio_visit_count';

      let visitorId = localStorage.getItem(visitorKey);

      // Se for novo visitante (no navegador)
      if (!visitorId) {
        visitorId = `v_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
        localStorage.setItem(visitorKey, visitorId);

        let currentCount = Number(localStorage.getItem(countKey)) || 0;
        currentCount += 1;
        localStorage.setItem(countKey, currentCount);
      }

      const total = Number(localStorage.getItem(countKey)) || 1;

      setGlitch(true);
      setTimeout(() => {
        setCount(total);
        setGlitch(false);
      }, 300);
    };

    trackVisit();
  }, []);

  return (
    <div className="flex items-center gap-2 font-mono text-xs text-muted-foreground">
      <Activity className="w-3 h-3 text-primary" />
      <span className="uppercase tracking-widest">Visitors</span>
      <span className="text-primary font-semibold">
        <AnimatePresence mode="wait">
          {glitch ? (
            <motion.span
              key="glitch"
              initial={{ opacity: 1 }}
              animate={{ opacity: [1, 0, 1, 0, 1] }}
              transition={{ duration: 0.3 }}
              className="inline-block"
            >
              {'█'.repeat(3)}
            </motion.span>
          ) : (
            <motion.span
              key="count"
              initial={{ opacity: 0, y: -5 }}
              animate={{ opacity: 1, y: 0 }}
            >
              {count !== null ? String(count).padStart(4, '0') : '----'}
            </motion.span>
          )}
        </AnimatePresence>
      </span>
    </div>
  );
}