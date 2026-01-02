"use client";
import React from 'react';
import { motion } from 'framer-motion';

export const InfiniteCarousel = ({ children, speed = 80 }: { children: React.ReactNode, speed?: number }) => {
  return (
    <div className="relative w-full overflow-hidden py-10">
      <motion.div
        className="flex w-max"
        animate={{ x: ["0%", "-50%"] }}
        transition={{
          duration: speed,
          repeat: Infinity,
          ease: "linear",
        }}
        // Opzionale: si ferma quando passi il mouse sopra
        whileHover={{ opacity: 1 }} 
      >
        <div className="flex shrink-0 gap-8 px-4">{children}</div>
        <div className="flex shrink-0 gap-8 px-4">{children}</div>
      </motion.div>
      
      {/* Rimosse le sfumature se preferisci un look netto */}
    </div>
  );
};