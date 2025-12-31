'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { PlaceHolderImages } from '@/lib/placeholder-images';

const ctaImage = PlaceHolderImages.find((img) => img.id === 'cta-bg');

export function CallToAction() {
  return (
    <section className="relative w-full overflow-hidden py-16 md:py-24 lg:py-32">
      {ctaImage && (
        <Image
          src={ctaImage.imageUrl}
          alt={ctaImage.description}
          fill
          className="object-contain opacity-10"
          data-ai-hint={ctaImage.imageHint}
        />
      )}
      <div className="container relative z-10 grid items-center justify-center gap-4 px-4 text-center md:px-6">
        <div className="space-y-3">
          <h2 className="font-headline text-3xl font-bold tracking-tighter text-primary sm:text-4xl md:text-5xl">
            Pronto a risolvere i tuoi problemi idraulici?
          </h2>
          <p className="mx-auto max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            Non lasciare che un piccolo problema diventi un grande danno. Contattaci oggi per un preventivo gratuito e senza impegno.
          </p>
        </div>
        <div className="flex flex-col gap-2 min-[400px]:flex-row justify-center">
          <Button asChild size="lg">
            <Link href="/contatti">Richiedi un Preventivo</Link>
          </Button>
          <Button asChild variant="secondary" size="lg">
            <Link href="/servizi">Scopri i nostri Servizi</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
