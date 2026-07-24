import type { Metadata } from 'next';
import './globals.css';
import { Toaster } from '@/components/ui/toaster';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { WhatsAppButton } from '@/components/whatsapp-button';
import { CallToAction } from '@/components/call-to-action';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { CookieBanner } from '@/components/cookie-banner';


export const metadata: Metadata = {
  title: 'IonaBrosImpianti Srls di Iona Alessandro | Pronto Intervento Idraulico a Terracina',
  description: 'Idraulico a Terracina. IonaBrosIdraulica offre servizi di pronto intervento, riparazioni idrauliche, spurghi e installazioni. Servizio rapido e professionale.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="it">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700&family=Space+Grotesk:wght@400;700&display=swap" rel="stylesheet" />
      </head>
      <body className="font-body bg-background text-foreground antialiased dark">
        <div className="flex min-h-dvh flex-col">
          <Header />
          <main className="flex-1">
            {children}
          </main>
          <Footer />
        </div>
        <WhatsAppButton />
        <CookieBanner />
        <Toaster />
      </body>
    </html>
  );
}
