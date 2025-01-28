import { useCallback } from 'react';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { toast } from '@/components/ui/use-toast';
import type { Medication, MedicationStatus } from '../types/medication.types';

export const MEDICATIONS_QUERY_KEY = ['medications'] as const;

const mockMedications: Medication[] = [
  {
    id: 1,
    name: "Tenofovir",
    time: "23:00",
    dosage: "Prendre 1 comprimé",
    status: 'pending'
  },
  {
    id: 2,
    name: "Vitamine D",
    time: "08:00",
    dosage: "Prendre 1 comprimé avec de la nourriture",
    status: 'pending'
  }
];

// Simule un appel API
const getMedications = async (date: Date): Promise<Medication[]> => {
  await new Promise(resolve => setTimeout(resolve, 1000)); // Simule la latence
  return mockMedications;
};

// Simule une mise à jour de statut
const updateMedicationStatus = async ({ 
  medicationId, 
  status 
}: { 
  medicationId: number; 
  status: MedicationStatus;
}): Promise<void> => {
  await new Promise(resolve => setTimeout(resolve, 500));
};

export const useMedications = (date: Date) => {
  const queryClient = useQueryClient();
  
  const { data: medications = [], isLoading } = useQuery({
    queryKey: [...MEDICATIONS_QUERY_KEY, date] as const,
    queryFn: () => getMedications(date),
    staleTime: 5 * 60 * 1000, // 5 minutes
  });

  const { mutate: updateStatus } = useMutation({
    mutationFn: updateMedicationStatus,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: MEDICATIONS_QUERY_KEY });
    },
  });

  const handleStatusUpdate = useCallback((
    medicationId: number,
    status: MedicationStatus,
    name: string
  ) => {
    updateStatus(
      { medicationId, status },
      {
        onSuccess: () => {
          toast({
            title: status === 'taken' ? 'Médicament pris' : 'Médicament ignoré',
            description: `${name} a été marqué comme ${status === 'taken' ? 'pris' : 'ignoré'}`,
            variant: status === 'taken' ? 'default' : 'destructive',
          });
        },
      }
    );
  }, [updateStatus]);

  const handleTake = useCallback((id: number, name: string) => {
    handleStatusUpdate(id, 'taken', name);
  }, [handleStatusUpdate]);

  const handleSkip = useCallback((id: number, name: string) => {
    handleStatusUpdate(id, 'skipped', name);
  }, [handleStatusUpdate]);

  return {
    medications,
    isLoading,
    handleTake,
    handleSkip,
  };
};
