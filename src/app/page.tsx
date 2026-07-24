
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { AIssueAnalyzer } from '@/components/ai-issue-analyzer';
import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Droplets, Plug, Thermometer, Wrench, Clock, ThumbsUp } from 'lucide-react';
import { CallToAction } from '@/components/call-to-action';
import { FadeIn } from '@/components/fade-in';
import { AnimatedCounter } from '@/components/animated-counter';
import { TestimonialCarousel } from '@/components/testimonial-carousel';

const heroImage = PlaceHolderImages.find((img) => img.id === 'hero-plumbing');
const analyzerImage = PlaceHolderImages.find((img) => img.id === 'analyzer-bg');
const servicesOverviewImage = PlaceHolderImages.find((img) => img.id === 'services-overview-bg');
const ctaImage = PlaceHolderImages.find((img) => img.id === 'cta-home');


const featuredServices = [
    {
      icon: <Droplets className="size-8 text-primary" />,
      title: 'Riparazione Perdite',
      description: 'Individuiamo e ripariamo rapidamente le perdite per prevenire danni e risparmiare acqua.',
    },
    {
      icon: <Plug className="size-8 text-primary" />,
      title: 'Pulizia Scarichi',
      description: 'Liberiamo scarichi intasati di lavandini, docce e WC per un flusso d\'acqua regolare.',
    },
    {
      icon: <Thermometer className="size-8 text-primary" />,
      title: 'Servizio Caldaie',
      description: 'Riparazione e installazione per tutti i tipi di caldaie, per garantirti sempre acqua calda.',
    },
];

export default function Home() {
  return (
    <>
      <section className="relative w-full h-[60vh] min-h-[400px] md:h-[70vh]">
        {heroImage && (
          <Image
            src={heroImage.imageUrl}
            alt={heroImage.description}
            fill
            className="object-cover object-center"
            data-ai-hint={heroImage.imageHint}
            priority
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-b from-primary/80 via-black/40 to-black/80" />
        <div className="relative z-10 flex h-full flex-col items-center justify-center text-center text-white">
            <div className="container px-4 md:px-6">
              <FadeIn direction="up">
                <h1 className="font-headline text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl drop-shadow-lg">
                  Idraulico a Terracina? Risolto.
                </h1>
                <p className="mx-auto mt-6 max-w-3xl text-lg text-gray-100 md:text-xl drop-shadow">
                  Servizi idraulici veloci, affidabili e professionali a Terracina e dintorni. La tua emergenza è la nostra priorità.
                </p>
                <div className="mt-10 flex flex-wrap justify-center gap-4">
                  <Link href="/servizi">
                    <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground font-bold shadow-lg shadow-accent/20 transition-all hover:scale-105">Scopri i Nostri Servizi</Button>
                  </Link>
                  <Link href="/contatti">
                    <Button size="lg" variant="outline" className="bg-white/10 backdrop-blur-sm border-white/20 text-white hover:bg-white/20 hover:text-white transition-all hover:scale-105">Richiedi un Preventivo</Button>
                  </Link>
                </div>
              </FadeIn>
            </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="w-full py-12 bg-primary text-primary-foreground relative overflow-hidden">
        <div className="absolute inset-0 bg-white/5 opacity-50 mix-blend-overlay"></div>
        <div className="container px-4 md:px-6 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center divide-y md:divide-y-0 md:divide-x divide-primary-foreground/20">
            <FadeIn direction="up" delay={0.1} className="flex flex-col items-center pt-4 md:pt-0">
              <Clock className="w-8 h-8 mb-4 text-accent" />
              <div className="text-4xl font-bold font-headline mb-2 flex items-center justify-center">
                <AnimatedCounter value={24} suffix="/7" />
              </div>
              <p className="text-primary-foreground/80 font-medium">Pronto Intervento</p>
            </FadeIn>
            <FadeIn direction="up" delay={0.2} className="flex flex-col items-center pt-8 md:pt-0">
              <ThumbsUp className="w-8 h-8 mb-4 text-accent" />
              <div className="text-4xl font-bold font-headline mb-2 flex items-center justify-center">
                <AnimatedCounter value={100} suffix="%" />
              </div>
              <p className="text-primary-foreground/80 font-medium">Clienti Soddisfatti</p>
            </FadeIn>
            <FadeIn direction="up" delay={0.3} className="flex flex-col items-center pt-8 md:pt-0">
              <Wrench className="w-8 h-8 mb-4 text-accent" />
              <div className="text-4xl font-bold font-headline mb-2 flex items-center justify-center">
                <AnimatedCounter value={15} suffix="+" />
              </div>
              <p className="text-primary-foreground/80 font-medium">Anni di Esperienza</p>
            </FadeIn>
          </div>
        </div>
      </section>

      <section id="services-overview" className="relative w-full py-16 md:py-24 lg:py-32">
        {servicesOverviewImage && (
            <div className="absolute inset-0">
                <Image
                    src={servicesOverviewImage.imageUrl}
                    alt={servicesOverviewImage.description}
                    fill
                    className="object-cover"
                    data-ai-hint={servicesOverviewImage.imageHint}
                />
                <div className="absolute inset-0 bg-black/60"></div>
            </div>
        )}
        <div className="relative container z-10 px-4 md:px-6">
            <FadeIn direction="up" className="mx-auto max-w-3xl text-center">
                <h2 className="font-headline text-3xl font-bold tracking-tight text-white sm:text-4xl">I Nostri Servizi Principali</h2>
                <p className="mt-4 text-gray-300 text-lg">
                    Dalle emergenze alle installazioni, copriamo ogni tua necessità con professionalità e rapidità.
                </p>
            </FadeIn>
            <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-3">
                {featuredServices.map((service, index) => (
                    <FadeIn key={service.title} direction="up" delay={0.1 * index}>
                      <Card className="h-full bg-card/80 backdrop-blur-md border-primary/20 text-center transition-all duration-300 hover:shadow-[0_0_30px_-5px_rgba(29,78,216,0.3)] hover:-translate-y-2 group">
                          <CardHeader>
                              <div className="mx-auto flex size-16 items-center justify-center rounded-full bg-secondary/50 group-hover:bg-accent/20 transition-colors">
                                  {service.icon}
                              </div>
                              <CardTitle className="font-headline text-xl pt-4 group-hover:text-primary transition-colors">{service.title}</CardTitle>
                          </CardHeader>
                          <CardContent>
                              <p className="text-muted-foreground">{service.description}</p>
                          </CardContent>
                      </Card>
                    </FadeIn>
                ))}
            </div>
            <FadeIn direction="up" delay={0.4} className="mt-16 text-center">
                <Link href="/servizi">
                    <Button size="lg" className="shadow-lg transition-transform hover:scale-105">Vedi tutti i servizi</Button>
                </Link>
            </FadeIn>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="w-full py-20 bg-secondary/30 relative">
        <div className="container px-4 md:px-6 relative z-10">
          <FadeIn direction="up" className="mx-auto max-w-3xl text-center mb-16">
            <h2 className="font-headline text-3xl font-bold tracking-tight text-foreground sm:text-4xl">Dicono di noi</h2>
            <p className="mt-4 text-muted-foreground text-lg">
              La soddisfazione dei nostri clienti è la nostra migliore garanzia.
            </p>
          </FadeIn>
          <FadeIn direction="up" delay={0.2}>
            <TestimonialCarousel />
          </FadeIn>
        </div>
      </section>

      <section id="analyzer" className="relative w-full py-16 md:py-24 lg:py-32">
        {analyzerImage && (
          <Image
            src={analyzerImage.imageUrl}
            alt={analyzerImage.description}
            fill
            className="object-cover"
            data-ai-hint={analyzerImage.imageHint}
          />
        )}
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="relative container z-10 px-4 md:px-6">
          <FadeIn direction="up" className="mx-auto max-w-3xl text-center">
            <h2 className="font-headline text-3xl font-bold tracking-tight text-white sm:text-4xl drop-shadow-md">Analizzatore Problemi AI</h2>
            <p className="mt-4 text-gray-200 text-lg drop-shadow">
              Non sai qual è il problema? Descrivi il tuo problema qui sotto e il nostro assistente AI, Pipey, ti fornirà una diagnosi preliminare gratuita.
            </p>
          </FadeIn>
          <FadeIn direction="up" delay={0.2}>
            <AIssueAnalyzer />
          </FadeIn>
        </div>
      </section>
      <CallToAction image={ctaImage} />
    </>
  );
}
