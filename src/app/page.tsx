
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { AIssueAnalyzer } from '@/components/ai-issue-analyzer';
import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Droplets, Plug, Thermometer } from 'lucide-react';
import { CallToAction } from '@/components/call-to-action';

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
        <div className="absolute inset-0 bg-black/30" />
        <div className="relative z-10 flex h-full flex-col items-center justify-center text-center text-white">
            <div className="container px-4 md:px-6">
                <h1 className="font-headline text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">
                  Idraulico a Terracina? Risolto.
                </h1>
                <p className="mx-auto mt-4 max-w-3xl text-lg text-gray-200 md:text-xl">
                  Servizi idraulici veloci, affidabili e professionali a Terracina e dintorni. La tua emergenza è la nostra priorità.
                </p>
                <div className="mt-8 flex flex-wrap justify-center gap-4">
                  <Link href="/servizi">
                    <Button size="lg">Scopri i Nostri Servizi</Button>
                  </Link>
                  <Link href="/contatti">
                    <Button size="lg" variant="secondary">Richiedi un Preventivo</Button>
                  </Link>
                </div>
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
            <div className="mx-auto max-w-3xl text-center">
                <h2 className="font-headline text-3xl font-bold tracking-tight text-white sm:text-4xl">I Nostri Servizi Principali</h2>
                <p className="mt-4 text-gray-300">
                    Dalle emergenze alle installazioni, copriamo ogni tua necessità con professionalità e rapidità.
                </p>
            </div>
            <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-3">
                {featuredServices.map((service) => (
                    <Card key={service.title} className="bg-card/80 backdrop-blur-sm text-center transition-all hover:shadow-xl hover:-translate-y-1">
                        <CardHeader>
                            <div className="mx-auto flex size-14 items-center justify-center rounded-full bg-secondary">
                                {service.icon}
                            </div>
                            <CardTitle className="font-headline text-xl pt-4">{service.title}</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="text-muted-foreground">{service.description}</p>
                        </CardContent>
                    </Card>
                ))}
            </div>
            <div className="mt-12 text-center">
                <Link href="/servizi">
                    <Button size="lg">Vedi tutti i servizi</Button>
                </Link>
            </div>
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
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="font-headline text-3xl font-bold tracking-tight text-white sm:text-4xl">Analizzatore Problemi AI</h2>
            <p className="mt-4 text-gray-300">
              Non sai qual è il problema? Descrivi il tuo problema qui sotto e il nostro assistente AI, Pipey, fornirà una diagnosi preliminare e consigli.
            </p>
          </div>
          <AIssueAnalyzer />
        </div>
      </section>
      <CallToAction image={ctaImage} />
    </>
  );
}
