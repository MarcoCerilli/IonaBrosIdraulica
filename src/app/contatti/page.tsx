'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Phone, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { whatsappNumber } from '@/lib/config';

const contactHeroImage = PlaceHolderImages.find((img) => img.id === 'contact-hero');
const whatsappLink = `https://wa.me/${whatsappNumber.replace(/\s/g, '')}`;
const telLink = `tel:${whatsappNumber.replace(/\s/g, '')}`;

const WhatsAppIcon = () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="currentColor"
    >
      <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.894 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.89-5.451 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01s-.521.074-.792.372c-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.626.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
    </svg>
);

export default function ContactPage() {
  const recipientEmail = 'contact@ionabrosidraulica.com';

  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const generateMailtoLink = () => {
    const subject = `Richiesta di contatto da ${name}`;
    const body = `Un nuovo potenziale cliente ha compilato il modulo di contatto sul sito web.\n\nDettagli:\n\nNome: ${name}\nTelefono: ${phone}\nEmail: ${email}\n\nMessaggio:\n${message}\n\n--\nIonaBrosIdraulica`;
    return `mailto:${recipientEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };
  
  return (
    <>
      <section className="relative w-full h-[40vh] min-h-[300px] bg-primary">
        {contactHeroImage && (
            <Image
                src={contactHeroImage.imageUrl}
                alt={contactHeroImage.description}
                fill
                className="object-cover opacity-20"
                data-ai-hint={contactHeroImage.imageHint}
                priority
            />
        )}
        <div className="relative z-10 flex h-full flex-col items-center justify-center text-center text-primary-foreground">
            <div className="container px-4 md:px-6">
                <h1 className="font-headline text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
                    Contattaci
                </h1>
                <p className="mx-auto mt-4 max-w-[700px] text-lg text-primary-foreground/80">
                    Siamo pronti ad aiutarti. Compila il modulo o chiamaci direttamente. Per emergenze, siamo disponibili 24/7.
                </p>
            </div>
        </div>
      </section>

      <section id="contact" className="w-full py-12 md:py-24 lg:py-32">
        <div className="container grid items-start justify-center gap-12 px-4 md:px-6 lg:grid-cols-2 lg:gap-16">
          <div className="space-y-6">
            <div className="space-y-2">
              <h2 className="font-headline text-3xl font-bold tracking-tight">Mettiti in Contatto</h2>
              <p className="text-muted-foreground">
                Hai una domanda o hai bisogno di prenotare un servizio? Compila il modulo e ti risponderemo il prima possibile. Per emergenze, ti consigliamo di chiamare.
              </p>
            </div>
            <div className="space-y-4">
                <div className="flex items-center gap-4 rounded-lg border bg-card p-4">
                  <Phone className="size-6 text-primary" /> 
                  <div>
                    <h3 className="font-semibold">Chiamaci</h3>
                    <a href={telLink} className="text-muted-foreground hover:text-primary">{whatsappNumber}</a>
                  </div>
                </div>
                 <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 rounded-lg border bg-card p-4 transition-colors hover:bg-muted">
                    <div className="text-primary">
                        <WhatsAppIcon />
                    </div>
                   <div>
                    <h3 className="font-semibold">Scrivici su WhatsApp</h3>
                    <p className="text-muted-foreground">Avvia una chat con noi</p>
                  </div>
                </a>
                <div className="flex items-center gap-4 rounded-lg border bg-card p-4">
                  <Mail className="size-6 text-primary"/>
                   <div>
                    <h3 className="font-semibold">Scrivici un'email</h3>
                    <a href={`mailto:${recipientEmail}`} className="text-muted-foreground hover:text-primary">{recipientEmail}</a>
                  </div>
                </div>
              </div>
          </div>
          <Card>
            <CardContent className="p-6">
              <div className="space-y-4">
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="name">Nome</Label>
                    <Input id="name" placeholder="Il tuo nome" value={name} onChange={(e) => setName(e.target.value)} />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">Telefono</Label>
                    <Input id="phone" type="tel" placeholder="Il tuo numero di telefono" value={phone} onChange={(e) => setPhone(e.target.value)}/>
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" placeholder="La tua email" value={email} onChange={(e) => setEmail(e.target.value)}/>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message">Messaggio</Label>
                  <Textarea id="message" placeholder="Come possiamo aiutarti?" className="min-h-[120px]" value={message} onChange={(e) => setMessage(e.target.value)}/>
                </div>
                <Button asChild className="w-full">
                  <a href={generateMailtoLink()}>Invia Messaggio</a>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </>
  );
}
