'use client';

import * as React from "react"
import { Star } from "lucide-react"

import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import Autoplay from "embla-carousel-autoplay"

const testimonials = [
  {
    name: "Marco Rossi",
    location: "Terracina",
    text: "Servizio impeccabile e velocissimo! Avevo una perdita in bagno nel cuore della notte e sono intervenuti subito. Consigliatissimi.",
    rating: 5,
  },
  {
    name: "Giulia Bianchi",
    location: "San Felice Circeo",
    text: "Professionisti veri. Hanno rifatto l'impianto di riscaldamento con grande precisione e pulizia. Preventivo rispettato al centesimo.",
    rating: 5,
  },
  {
    name: "Luca Verdi",
    location: "Sabaudia",
    text: "Ho usato l'assistente virtuale per descrivere il problema alla caldaia ed è stato utilissimo per capire subito l'entità del guasto prima del loro arrivo.",
    rating: 4,
  },
  {
    name: "Francesca Neri",
    location: "Terracina Centro",
    text: "Onesti, puntuali e competenti. Ormai sono il mio punto di riferimento per qualsiasi problema idraulico in casa.",
    rating: 5,
  },
]

export function TestimonialCarousel() {
  const plugin = React.useRef(
    Autoplay({ delay: 4000, stopOnInteraction: true })
  )

  return (
    <Carousel
      plugins={[plugin.current]}
      className="w-full max-w-4xl mx-auto"
      onMouseEnter={plugin.current.stop}
      onMouseLeave={plugin.current.reset}
    >
      <CarouselContent>
        {testimonials.map((testimonial, index) => (
          <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3 pl-4">
            <div className="p-1 h-full">
              <Card className="h-full bg-card/80 backdrop-blur-sm border-primary/10 hover:border-primary/30 transition-colors">
                <CardContent className="flex flex-col h-full justify-between p-6">
                  <div>
                    <div className="flex gap-1 mb-4">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <Star
                          key={i}
                          className={`w-4 h-4 ${
                            i < testimonial.rating
                              ? "fill-primary text-primary"
                              : "text-muted-foreground"
                          }`}
                        />
                      ))}
                    </div>
                    <p className="text-muted-foreground italic mb-6 leading-relaxed">
                      "{testimonial.text}"
                    </p>
                  </div>
                  <div>
                    <p className="font-semibold">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">
                      {testimonial.location}
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <div className="hidden sm:block">
        <CarouselPrevious className="-left-12" />
        <CarouselNext className="-right-12" />
      </div>
    </Carousel>
  )
}
