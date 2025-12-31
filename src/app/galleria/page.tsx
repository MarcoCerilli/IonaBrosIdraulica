'use client';

import Image from 'next/image';
import { GalleryImages } from '@/lib/placeholder-images';
import { Card, CardContent } from '@/components/ui/card';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';

export default function GalleryPage() {
  return (
    <>
      <section className="relative h-[40vh] min-h-[300px] w-full bg-primary">
        <div className="relative z-10 flex h-full flex-col items-center justify-center text-center text-primary-foreground">
          <div className="container px-4 md:px-6">
            <h1 className="font-headline text-4xl font-bold tracking-tight sm:text-5xl">
              Galleria Lavori
            </h1>
            <p className="mx-auto mt-4 max-w-[700px] text-lg text-primary-foreground/80">
              Scopri alcuni dei nostri ultimi progetti e la qualità del nostro lavoro.
            </p>
          </div>
        </div>
      </section>

      <section id="gallery" className="w-full py-12 md:py-24 lg:py-32">
        <div className="container">
          <Carousel
            className="w-full"
            opts={{
              align: 'start',
              loop: true,
            }}
          >
            <CarouselContent>
              {GalleryImages.map((image) => (
                <CarouselItem key={image.id} className="md:basis-1/2 lg:basis-1/3">
                  <div className="p-1">
                    <Card className="overflow-hidden">
                      <CardContent className="relative flex aspect-square items-center justify-center p-0">
                        <Image
                          src={image.imageUrl}
                          alt={image.description}
                          fill
                          className="object-cover transition-transform duration-300 hover:scale-105"
                          data-ai-hint={image.imageHint}
                        />
                         <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                            <p className="text-sm text-white">{image.description}</p>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="absolute left-4 top-1/2 -translate-y-1/2" />
            <CarouselNext className="absolute right-4 top-1/2 -translate-y-1/2" />
          </Carousel>
        </div>
      </section>
    </>
  );
}
