import React, { useEffect, useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';

function StatCard({ number, label, icon: Icon, index = 0 }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const numericValue = parseInt(number.replace(/\D/g, ''), 10);
  const suffix = number.replace(/[0-9]/g, '');

  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;

    let start = 0;
    const duration = 1500;
    const startTime = performance.now();

    const animate = (currentTime) => {
      const progress = Math.min(
        (currentTime - startTime) / duration,
        1
      );

      const easeOut = 1 - Math.pow(1 - progress, 3);

      start = Math.floor(easeOut * numericValue);
      setCount(start);

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [isInView, numericValue]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{
        duration: 0.6,
        delay: index * 0.15,
      }}
      className="group relative overflow-hidden rounded-2xl border border-primary/20 bg-card p-6 text-center shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:border-primary/40"
    >
      {/* Efecto de fondo */}
      <div className="absolute inset-0 bg-primary/[0.03] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

      <div className="relative">
        {/* Icono */}
        <motion.div
          className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10 transition-all duration-300 group-hover:scale-110"
          whileHover={{ rotate: 5 }}
        >
          <Icon className="h-8 w-8 text-primary" />
        </motion.div>

        {/* Número */}
        <div className="text-5xl font-bold tracking-tight text-foreground">
          {count}
          <span className="text-primary">{suffix}</span>
        </div>

        {/* Texto */}
        <p className="mt-3 text-base leading-relaxed text-muted-foreground">
          {label}
        </p>
      </div>
    </motion.div>
  );
}

export default StatCard;