'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ShieldAlert, X } from 'lucide-react';
import Link from 'next/link';

export function CookieBanner() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookieConsent');
    if (!consent) {
      // Delay showing the banner slightly for better UX
      const timer = setTimeout(() => setIsVisible(true), 1500);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookieConsent', 'accepted');
    setIsVisible(false);
  };

  const handleDecline = () => {
    localStorage.setItem('cookieConsent', 'declined');
    setIsVisible(false);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 150, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 150, opacity: 0 }}
          transition={{ type: 'spring', damping: 25, stiffness: 200 }}
          className="fixed bottom-0 left-0 right-0 z-50 p-4 md:p-6 pointer-events-none flex justify-center"
        >
          <div className="bg-card/95 backdrop-blur-xl border border-primary/20 shadow-2xl rounded-2xl p-6 max-w-4xl w-full pointer-events-auto flex flex-col md:flex-row items-start md:items-center gap-6 relative overflow-hidden">
             {/* Decorative background element */}
             <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full blur-3xl -z-10 translate-x-10 -translate-y-10"></div>
             
            <div className="flex-1 text-sm text-muted-foreground z-10">
              <div className="flex items-center gap-2 mb-2 text-foreground font-headline font-semibold text-lg">
                <ShieldAlert className="h-5 w-5 text-accent" />
                La tua Privacy è importante
              </div>
              <p className="leading-relaxed">
                Utilizziamo i cookie per migliorare la tua esperienza di navigazione, offrirti contenuti personalizzati e analizzare il nostro traffico. Cliccando su "Accetta tutti", acconsenti al nostro utilizzo dei cookie. Leggi la nostra <Link href="#" className="text-primary font-medium hover:underline transition-all">Privacy Policy</Link> per maggiori dettagli.
              </p>
            </div>
            <div className="flex flex-row md:flex-col gap-3 w-full md:w-auto min-w-[140px] shrink-0 z-10">
              <Button onClick={handleAccept} className="w-full font-semibold shadow-lg hover:shadow-primary/25 transition-all">
                Accetta tutti
              </Button>
              <Button onClick={handleDecline} variant="outline" className="w-full bg-background/50 hover:bg-background">
                Solo necessari
              </Button>
            </div>
            <button 
              onClick={handleDecline} 
              className="absolute top-4 right-4 p-1 rounded-full bg-secondary/50 text-muted-foreground hover:text-foreground hover:bg-secondary transition-colors md:hidden z-10"
              aria-label="Chiudi"
            >
                <X className="h-4 w-4" />
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
