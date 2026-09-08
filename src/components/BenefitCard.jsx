import React from 'react';
import { motion } from 'framer-motion';

function BenefitCard({ icon: Icon, title, description, index = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="bg-muted rounded-xl p-6 transition-all duration-300 hover:bg-muted/80"
    >
      <div className="mb-3 inline-flex items-center justify-center w-12 h-12 rounded-lg bg-primary/20 text-primary">
        <Icon className="w-6 h-6" />
      </div>
      <h3 className="text-lg font-semibold mb-2 text-foreground">{title}</h3>
      <p className="text-sm text-muted-foreground leading-relaxed">{description}</p>
    </motion.div>
  );
}

export default BenefitCard;