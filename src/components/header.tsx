'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  AlertTriangle,
  Phone,
  Menu,
} from 'lucide-react';
import { motion } from 'framer-motion';
import { Logo } from '@/components/logo';
import { Button } from '@/components/ui/button';
import {
  AlertDialog,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from '@/components/ui/alert-dialog';
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetClose,
  SheetTitle,
} from '@/components/ui/sheet';
import { cn } from '@/lib/utils';
import { whatsappNumber } from '@/lib/config';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/servizi', label: 'Servizi' },
  { href: '/galleria', label: 'Galleria' },
  { href: '/contatti', label: 'Contatti' },
];

export function Header() {
  const pathname = usePathname();

  const desktopNav = (
    <nav className="hidden items-center gap-6 text-sm font-medium md:flex">
      {navLinks.map((link) => (
        <Link
          key={link.href}
          href={link.href}
          className={cn(
            'transition-colors hover:text-primary',
            pathname === link.href ? 'text-primary' : 'text-muted-foreground'
          )}
        >
          {link.label}
        </Link>
      ))}
    </nav>
  );

  const mobileNav = (
  <Sheet>
    <SheetTrigger asChild>
      <Button variant="outline" size="icon" className="md:hidden shrink-0">
        <Menu className="h-6 w-6" />
        <span className="sr-only">Apri menu</span>
      </Button>
    </SheetTrigger>
    <SheetContent side="right" className="w-[300px] sm:w-[400px]">
      <SheetTitle className="sr-only">Menu di navigazione</SheetTitle>
      <div className="flex flex-col gap-8 pt-10">
        
        {/* INSERISCI IL LOGO QUI */}
        <div className="px-2 border-b pb-6">
          <Logo />
        </div>

        {/* Link di navigazione */}
        <nav className="flex flex-col gap-4">
          {navLinks.map((link) => (
            <SheetClose asChild key={link.href}>
              <Link
                href={link.href}
                className={cn(
                  'text-xl font-semibold transition-colors hover:text-primary',
                  pathname === link.href ? 'text-primary' : 'text-foreground'
                )}
              >
                {link.label}
              </Link>
            </SheetClose>
          ))}
        </nav>
      </div>
    </SheetContent>
  </Sheet>
);

  const emergencyButton = (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        {/* Su mobile diventa un cerchio con la cornetta (h-10 w-10), su desktop torna lungo */}
        <Button className="bg-accent text-accent-foreground hover:bg-accent/90 shrink-0 h-10 w-10 p-0 sm:h-auto sm:w-auto sm:px-4 sm:py-2">
          <Phone className="size-5 sm:mr-2 sm:size-4" />
          <span className="hidden sm:inline text-sm">Contattaci Subito Per Intervento</span>
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Emergenza Idraulica?</AlertDialogTitle>
          <AlertDialogDescription>
            Per assistenza immediata con problemi urgenti come tubi rotti o grosse perdite, chiamaci direttamente. Siamo disponibili 24/7.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <div className="flex flex-col items-center justify-center gap-4 py-4">
          <a
            href={`tel:${whatsappNumber}`}
            className="flex items-center gap-3 rounded-lg bg-primary px-6 py-3 text-2xl font-bold text-primary-foreground"
          >
            <Phone />
            <span>{whatsappNumber}</span>
          </a>
          <p className="text-sm text-muted-foreground">Premi per chiamare ora.</p>
        </div>
        <AlertDialogFooter>
          <AlertDialogCancel>Chiudi</AlertDialogCancel>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );

  return (
    <motion.header 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="sticky top-0 z-50 w-full border-b border-primary/10 bg-background/60 shadow-sm backdrop-blur-md"
    >
      {/* container px-4 e h-16 per dare aria e allineamento perfetto */}
      <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6">
        
        {/* Logo con shrink-0 così il testo non va mai a capo anche se lungo */}
        <Link href="/" className="flex shrink-0 items-center gap-2">
          <Logo />
        </Link>

        {desktopNav}

        {/* Gruppo pulsanti mobile distanziato bene dal logo */}
        <div className="flex items-center gap-2 sm:gap-4">
          {emergencyButton}
          {mobileNav}
        </div>
      </div>
    </motion.header>
  );
}