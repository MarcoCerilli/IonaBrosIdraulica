
import Image from 'next/image';
import {
  AirVent,
  Construction,
  Droplets,
  Flame,
  Layers,
  Plug,
  ShowerHead,
  Thermometer,
  Wrench,
} from 'lucide-react';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { CallToAction } from '@/components/call-to-action';

const servicesHeroImage = PlaceHolderImages.find((img) => img.id === 'services-hero');
const ctaImage = PlaceHolderImages.find((img) => img.id === 'cta-servizi');


const services = [
  {
    icon: <Droplets className="size-8 text-primary" />,
    title: 'Riparazione Perdite',
    description: 'Individuiamo e ripariamo rapidamente le perdite per prevenire danni e risparmiare sulla bolletta dell\'acqua.',
    imageId: 'service-leaks'
  },
  {
    icon: <Plug className="size-8 text-primary" />,
    title: 'Pulizia Scarichi',
    description: 'Liberiamo scarichi intasati di lavandini, docce e WC per un flusso d\'acqua regolare.',
    imageId: 'service-drains'
  },
  {
    icon: <Thermometer className="size-8 text-primary" />,
    title: 'Servizio Scaldabagni',
    description: 'Servizi di riparazione e installazione per tutti i tipi di scaldabagni, per garantirti sempre acqua calda.',
    imageId: 'service-heater'
  },
  {
    icon: <Construction className="size-8 text-primary" />,
    title: 'Installazione Tubature',
    description: 'Installazione professionale di tubature per nuove costruzioni e ristrutturazioni.',
    imageId: 'service-pipes'
  },
  {
    icon: <Wrench className="size-8 text-primary" />,
    title: 'Riparazione Sanitari',
    description: 'Riparazione o sostituzione di rubinetti, WC e soffioni doccia per eliminare gocciolamenti e migliorare la funzionalità.',
    imageId: 'service-fixtures'
  },
  {
    icon: <ShowerHead className="size-8 text-primary" />,
    title: 'Aggiornamento Impianti',
    description: 'Modernizziamo il tuo intero impianto idraulico per una maggiore efficienza e affidabilità.',
    imageId: 'service-upgrade'
  },
  {
    icon: <Flame className="size-8 text-primary" />,
    title: 'Installazione Caldaie',
    description: 'Installiamo caldaie a condensazione di ultima generazione per massimizzare il risparmio energetico e il comfort.',
    imageId: 'service-boiler'
  },
  {
    icon: <Layers className="size-8 text-primary" />,
    title: 'Riscaldamento a Pavimento',
    description: 'Progettiamo e realizziamo impianti di riscaldamento a pavimento per un calore uniforme e un\'efficienza superiore.',
    imageId: 'service-underfloor-heating'
  },
  {
    icon: <AirVent className="size-8 text-primary" />,
    title: 'Installazione e Manutenzione Climatizzatori',
    description: 'Forniamo servizi di installazione e manutenzione per impianti di climatizzazione, garantendo comfort tutto l\'anno.',
    imageId: 'service-ac-unit'
  }
];

export default function ServicesPage() {
  return (
    <>
      <section className="relative h-[40vh] min-h-[300px] w-full bg-primary">
        {servicesHeroImage && (
          <Image
            src={servicesHeroImage.imageUrl}
            alt={servicesHeroImage.description}
            fill
            className="object-cover opacity-20"
            sizes="100vw"
            data-ai-hint={servicesHeroImage.imageHint}
          />
        )}
        <div className="relative z-10 flex h-full flex-col items-center justify-center text-center text-primary-foreground">
          <div className="container px-4 md:px-6">
            <h1 className="font-headline text-4xl font-bold tracking-tight sm:text-5xl">
              I Nostri Servizi
            </h1>
            <p className="mx-auto mt-4 max-w-[700px] text-lg text-primary-foreground/80">
              Offriamo una gamma completa di servizi idraulici per soddisfare ogni tua esigenza, dalla più piccola riparazione al rifacimento completo dell'impianto.
            </p>
          </div>
        </div>
      </section>
      
      <section id="services-list" className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => {
              const serviceImage = PlaceHolderImages.find((img) => img.id === service.imageId);
              return (
                <Card key={service.title} className="flex flex-col overflow-hidden transition-all hover:shadow-xl hover:-translate-y-1">
                  {serviceImage && (
                    <div className="relative h-64 w-full">
                      <Image
                        src={serviceImage.imageUrl}
                        alt={serviceImage.description}
                        fill
                        className={`object-cover ${serviceImage.objectPosition || 'object-center'}`}
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        data-ai-hint={serviceImage.imageHint}
                      />
                    </div>
                  )}
                  <CardHeader>
                    <div className="flex items-center gap-4">
                      <div className="flex size-12 items-center justify-center rounded-full bg-secondary">
                        {service.icon}
                      </div>
                      <CardTitle className="font-headline text-xl">{service.title}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <p className="text-muted-foreground">{service.description}</p>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>
      <CallToAction image={ctaImage} />
    </>
  );
}
