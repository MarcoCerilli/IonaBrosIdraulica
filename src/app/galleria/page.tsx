"use client";

import Image from "next/image";
import { GalleryImages, PlaceHolderImages } from "@/lib/placeholder-images";
import { CallToAction } from "@/components/call-to-action";
import { InfiniteCarousel } from "@/components/InfiniteCarousel";


const galleryHeroImage = GalleryImages.find((img) => img.id === 'gallery-10');
const ctaImage = PlaceHolderImages.find((img) => img.id === "cta-galleria");

export default function GalleryPage() {
  return (
    <>
      <section className="relative h-[45vh] min-h-[350px] w-full overflow-hidden bg-slate-900">
        {/* SFONDO: L'immagine occupa tutto lo spazio */}
        {galleryHeroImage && (
          <Image
            src={galleryHeroImage.imageUrl}
            alt={galleryHeroImage.description}
            fill
            className="object-cover opacity-60" // Regola l'opacità per vedere più o meno l'immagine
            priority
            sizes="100vw"
          />
        )}

        {/* EFFETTO SFUMATURA: Un overlay blu che scurisce l'immagine dal basso */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#001524] via-transparent to-[#001524]/50" />

        {/* Testo sopra tutto */}
        <div className="relative z-10 flex h-full flex-col items-center justify-center text-center text-primary-foreground">
          <div className="container px-4 md:px-6">
            <h1 className="font-headline text-4xl font-bold tracking-tight drop-shadow-2xl sm:text-6xl">
              Galleria Lavori
            </h1>
            <div className="mx-auto mt-6 h-1 w-24 bg-secondary rounded-full"></div>{" "}
            {/* Linea decorativa */}
            <p className="mx-auto mt-6 max-w-[700px] text-lg font-medium text-white/90 drop-shadow-md md:text-xl">
              Scopri la qualità dei nostri interventi attraverso le immagini dei
              nostri cantieri.
            </p>
          </div>
        </div>
      </section>

      <section className="w-full py-16 bg-slate-50 overflow-hidden">
        {/* VELOCITÀ IMPOSTATA A 80 PER ESSERE MOLTO LENTA */}
        <InfiniteCarousel speed={80}>
          {GalleryImages.map((image) => (
            <div
              key={image.id}
              className="relative h-[400px] w-[400px] flex-shrink-0 overflow-hidden rounded-2xl border border-gray-200 shadow-lg"
            >
              <Image
                src={image.imageUrl}
                alt={image.description || "Lavoro svolto da IonaBrosIdraulica"}
                fill
                className="object-cover"
                sizes="400px"
              />
              {image.description && (
                <div className="absolute inset-x-0 bottom-0 bg-black/50 p-6">
                  <p className="text-sm font-medium text-white text-center">
                    {image.description}
                  </p>
                </div>
              )}
            </div>
          ))}
        </InfiniteCarousel>
      </section>

      <CallToAction image={ctaImage} />
    </>
  );
}
