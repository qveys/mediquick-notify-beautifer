import { FC, memo } from 'react';
import MedicationCard from '../MedicationCard';
import type { MedicationListProps } from '@/features/medications/types/medication.types';

const MedicationList: FC<MedicationListProps> = memo(({
  medications,
  onTake,
  onSkip,
  isLoading,
}) => {
  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-40">
        <p>Chargement...</p>
      </div>
    );
  }

  if (!medications.length) {
    return (
      <div className="flex flex-col items-center justify-center h-40">
        <p className="text-muted-foreground">Aucun médicament programmé</p>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      {medications.map((medication) => (
        <MedicationCard
          key={medication.id}
          medication={medication}
          onTake={onTake}
          onSkip={onSkip}
        />
      ))}
    </div>
  );
});

MedicationList.displayName = 'MedicationList';
export default MedicationList;