'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import type { ImagePlaceholder } from '@/lib/placeholder-images';

export function CallToAction({ image }: { image?: ImagePlaceholder }) {
  return (
    <section className="relative w-full overflow-hidden bg-background py-16 md:py-24 lg:py-32">
      {image && (
        <Image
          src={image.imageUrl}
          alt={image.description}
          fill
          className="object-cover opacity-30"
          data-ai-hint={image.imageHint}
        />
      )}
      <div className="container relative z-10 grid items-center justify-center gap-4 px-4 text-center md:px-6">
        <div className="space-y-3">
          <h2 className="font-headline text-3xl font-bold tracking-tighter text-primary sm:text-4xl md:text-5xl">
            Pronto a risolvere i tuoi problemi idraulici?
          </h2>
          <p className="mx-auto max-w-[600px] text-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            Non lasciare che un piccolo problema diventi un grande danno. Contattaci oggi per un preventivo gratuito e senza impegno.
          </p>
        </div>
        <div className="flex flex-col justify-center gap-2 min-[400px]:flex-row">
          <Link href="/contatti">
            <Button size="lg">
              Richiedi un Preventivo
            </Button>
          </Link>
          <Link href="/servizi">
            <Button variant="secondary" size="lg">
              Scopri i nostri Servizi
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
