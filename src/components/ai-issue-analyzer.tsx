'use client';

import { useState } from 'react';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { Lightbulb, LoaderCircle, Sparkles, TriangleAlert, Cpu } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from '@/components/ui/form';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { getAIDiagnosis } from '@/app/actions';
import type { Diagnosis } from '@/ai/flows/schemas';
import { useToast } from '@/hooks/use-toast';
import { Alert, AlertDescription, AlertTitle } from './ui/alert';
import { Separator } from './ui/separator';

const FormSchema = z.object({
  issue: z.string().min(10, {
    message: 'Descrivi il tuo problema in almeno 10 caratteri.',
  }).max(500, {
    message: 'Mantieni la descrizione sotto i 500 caratteri.'
  }),
});

export function AIssueAnalyzer() {
  const [isLoading, setIsLoading] = useState(false);
  const [diagnosis, setDiagnosis] = useState<Diagnosis | null>(null);
  const { toast } = useToast();

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      issue: '',
    },
  });

  async function onSubmit(data: z.infer<typeof FormSchema>) {
    setIsLoading(true);
    setDiagnosis(null);
    const result = await getAIDiagnosis(data.issue);
    setIsLoading(false);

    if (result.success) {
      setDiagnosis(result.data);
    } else {
      toast({
        variant: 'destructive',
        title: 'Analisi Fallita',
        description: result.error,
      });
    }
  }

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="mx-auto mt-8 max-w-3xl relative"
    >
      <div className="absolute -inset-1 rounded-xl bg-gradient-to-r from-primary/30 via-accent/30 to-primary/30 blur-lg opacity-70 -z-10 animate-pulse"></div>
      <Card className="bg-card/80 backdrop-blur-xl border-primary/20 shadow-xl relative z-10">
        <CardContent className="p-6">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <FormField
                control={form.control}
                name="issue"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Textarea
                        placeholder="es., 'Il lavandino della mia cucina si svuota molto lentamente e fa un rumore gorgogliante.'"
                        className="min-h-[100px] resize-none border-border bg-background/70 text-foreground"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button type="submit" disabled={isLoading} className="w-full">
                {isLoading ? (
                  <>
                    <LoaderCircle className="mr-2 h-4 w-4 animate-spin" />
                    Analizzando...
                  </>
                ) : (
                  <>
                    <Sparkles className="mr-2 h-4 w-4" />
                    Analizza il mio problema
                  </>
                )}
              </Button>
            </form>
          </Form>
        </CardContent>
      </Card>

      <AnimatePresence mode="wait">
        {isLoading && (
          <motion.div
              key="loading"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="mt-6 overflow-hidden"
          >
             <Card className="animate-pulse bg-card/80 backdrop-blur-sm border-primary/20">
                <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-primary">
                        <Cpu className="h-5 w-5 animate-pulse text-accent"/>
                        <span>Pipey sta analizzando il problema...</span>
                    </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                    <div className="h-4 w-1/3 rounded bg-muted/60"></div>
                    <div className="space-y-2">
                        <div className="h-3 w-full rounded bg-muted/60"></div>
                        <div className="h-3 w-5/6 rounded bg-muted/60"></div>
                    </div>
                     <div className="h-4 w-1/4 rounded bg-muted/60"></div>
                     <div className="space-y-2">
                        <div className="h-3 w-full rounded bg-muted/60"></div>
                        <div className="h-3 w-full rounded bg-muted/60"></div>
                        <div className="h-3 w-3/4 rounded bg-muted/60"></div>
                    </div>
                </CardContent>
             </Card>
          </motion.div>
        )}

        {diagnosis && !isLoading && (
          <motion.div
            key="result"
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ type: "spring", duration: 0.6 }}
            className="mt-6"
          >
            <Card className="bg-card/90 backdrop-blur-xl border-t-4 border-t-primary shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary via-accent to-primary"></div>
              <CardHeader>
                <CardTitle className="font-headline text-2xl flex items-center gap-2">
                  <Sparkles className="h-6 w-6 text-accent" />
                  La Diagnosi di Pipey
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6 text-base relative z-10">
                <div>
                  <h3 className="flex items-center gap-2 font-semibold text-lg">
                    <Sparkles className="h-5 w-5 text-primary" />
                    Diagnosi Preliminare
                  </h3>
                  <p className="mt-2 text-muted-foreground">{diagnosis.preliminaryDiagnosis}</p>
                </div>
                
                <Separator className="bg-primary/10" />

                <div>
                  <h3 className="flex items-center gap-2 font-semibold text-lg">
                    <Lightbulb className="h-5 w-5 text-accent" />
                    Azione Consigliata
                  </h3>
                  <p className="mt-2 text-muted-foreground whitespace-pre-wrap">{diagnosis.recommendedAction}</p>
                </div>

                <Alert variant="destructive" className="bg-orange-50/50 border-orange-200/50 dark:bg-orange-950/50 dark:border-orange-800/50 backdrop-blur-sm">
                    <TriangleAlert className="h-4 w-4 !text-orange-500" />
                    <AlertTitle className="text-orange-800 dark:text-orange-300">Disclaimer Importante</AlertTitle>
                    <AlertDescription className="text-orange-700 dark:text-orange-400">
                        {diagnosis.disclaimer}
                    </AlertDescription>
                </Alert>

              </CardContent>
            </Card>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
