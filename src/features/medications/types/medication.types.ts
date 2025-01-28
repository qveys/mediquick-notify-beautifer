export type MedicationStatus = 'pending' | 'taken' | 'skipped';

export interface Medication {
  id: number;
  name: string;
  time: string;
  dosage: string;
  status: MedicationStatus;
  nextDose?: Date;
  instructions?: string;
}

export interface MedicationCardProps {
  medication: Medication;
  onTake: (id: number) => void;
  onSkip: (id: number) => void;
}

export interface MedicationListProps {
  medications: Medication[];
  onTake: (id: number) => void;
  onSkip: (id: number) => void;
  isLoading?: boolean;
}

export interface UpdateMedicationStatusParams {
  medicationId: number;
  status: MedicationStatus;
}
