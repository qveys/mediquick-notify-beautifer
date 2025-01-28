import { FC } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card } from '@/components/ui/card';
import { useToast } from '@/components/ui/use-toast';
import { ROUTES } from '@/constants/routes';
import BottomNav from '@/components/common/BottomNav';

const medicationSchema = z.object({
  name: z.string().min(2, 'Le nom doit contenir au moins 2 caractères'),
  dosage: z.string().min(1, 'Veuillez spécifier le dosage'),
  time: z.string().regex(/^([01]?[0-9]|2[0-3]):[0-5][0-9]$/, 'Format invalide (HH:MM)'),
  instructions: z.string().optional(),
});

type MedicationFormValues = z.infer<typeof medicationSchema>;

const AddMedication: FC = () => {
  const { toast } = useToast();
  const navigate = useNavigate();

  const form = useForm<MedicationFormValues>({
    resolver: zodResolver(medicationSchema),
    defaultValues: {
      name: '',
      dosage: '',
      time: '',
      instructions: '',
    },
  });

  const onSubmit = async (data: MedicationFormValues) => {
    try {
      // TODO: Implement API call
      console.log('Form data:', data);
      
      toast({
        title: 'Médicament ajouté',
        description: `${data.name} a été ajouté avec succès.`,
      });
      
      navigate(ROUTES.HOME);
    } catch (error) {
      toast({
        variant: 'destructive',
        title: 'Erreur',
        description: "Une erreur est survenue lors de l'ajout du médicament.",
      });
    }
  };

  return (
    <div className="min-h-screen pb-24">
      <div className="container mx-auto p-6">
        <h1 className="text-2xl font-bold mb-6">Ajouter un médicament</h1>
        
        <Card className="p-6">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Nom du médicament</FormLabel>
                    <FormControl>
                      <Input placeholder="ex: Doliprane" {...field} />
                    </FormControl>
                    <FormDescription>
                      Entrez le nom exact du médicament
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="dosage"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Dosage</FormLabel>
                    <FormControl>
                      <Input placeholder="ex: 1000mg" {...field} />
                    </FormControl>
                    <FormDescription>
                      Spécifiez la quantité par prise
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="time"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Heure de prise</FormLabel>
                    <FormControl>
                      <Input
                        type="time"
                        placeholder="HH:MM"
                        {...field}
                      />
                    </FormControl>
                    <FormDescription>
                      Choisissez l'heure de prise quotidienne
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="instructions"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Instructions (optionnel)</FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="ex: Prendre avec un repas"
                        {...field}
                      />
                    </FormControl>
                    <FormDescription>
                      Ajoutez des instructions spécifiques si nécessaire
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <div className="flex space-x-4">
                <Button
                  type="button"
                  variant="outline"
                  onClick={() => navigate(-1)}
                  className="flex-1"
                >
                  Annuler
                </Button>
                <Button type="submit" className="flex-1">
                  Ajouter
                </Button>
              </div>
            </form>
          </Form>
        </Card>
      </div>

      <BottomNav />
    </div>
  );
};

export default AddMedication;