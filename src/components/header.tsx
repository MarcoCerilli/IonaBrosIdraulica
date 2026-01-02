'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  AlertTriangle,
  Phone,
  Menu,
} from 'lucide-react';
import { Logo } from '@/components/logo';
import { Button } from '@/components/ui/button';
import {
  AlertDialog,
  AlertDialogAction,
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
} from '@/components/ui/sheet';
import { cn } from '@/lib/utils';
import { whatsappNumber } from '@/lib/config';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/servizi', label: 'Servizi' },
  { href: '/galleria', label: 'Galleria'},
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
        <Button variant="outline" size="icon" className="md:hidden">
          <Menu className="h-6 w-6" />
          <span className="sr-only">Apri menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="left">
        <div className="flex flex-col gap-6 pt-12">
          {navLinks.map((link) => (
            <SheetClose asChild key={link.href}>
              <Link
                href={link.href}
                className={cn(
                  'text-lg font-medium transition-colors hover:text-primary',
                  pathname === link.href ? 'text-primary' : 'text-foreground'
                )}
              >
                {link.label}
              </Link>
            </SheetClose>
          ))}
        </div>
      </SheetContent>
    </Sheet>
  );
  
  const emergencyButton = (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button className="bg-accent text-accent-foreground hover:bg-accent/90">
          <AlertTriangle className="mr-2 size-4" />
          Contattaci Subito Per Intervento
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
          <a href={`tel:${whatsappNumber}`} className="flex items-center gap-3 rounded-lg bg-primary px-6 py-3 text-2xl font-bold text-primary-foreground">
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
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 px-4 py-3 shadow-sm backdrop-blur-sm md:px-6">
      <div className="container mx-auto flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <Logo />
        </Link>
        {desktopNav}
        <div className="flex items-center gap-4">
          {emergencyButton}
          {mobileNav}
        </div>
      </div>
    </header>
  );
}
