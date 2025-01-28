import type { Medication, MedicationStatus, UpdateMedicationStatusParams } from '../types/medication.types';
import { api } from '@/lib/api';

export const getMedications = async (date: Date): Promise<Medication[]> => {
  const response = await api.get<Medication[]>('/medications', {
    params: {
      date: date.toISOString(),
    },
  });
  return response.data;
};

export const updateMedicationStatus = async ({
  medicationId,
  status,
}: UpdateMedicationStatusParams): Promise<void> => {
  await api.patch(`/medications/${medicationId}/status`, { status });
};
