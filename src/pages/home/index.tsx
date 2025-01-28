import { FC, useState, useCallback } from 'react';
import MedicationCard from '@/components/medications/MedicationCard';
import BottomNav from '@/components/common/BottomNav';
import DateSelector from '@/components/common/DateSelector';
import { useMedications } from '@/features/medications/hooks/useMedications';
import type { Medication } from '@/features/medications/types/medication.types';

const Home: FC = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const { medications, isLoading, handleTake, handleSkip } = useMedications(selectedDate);

  const handleDateSelect = useCallback((date: Date) => {
    setSelectedDate(date);
  }, []);

  return (
    <div className="min-h-screen pb-24">
      <header className="fixed top-0 left-0 right-0 z-50">
        <div className="glass">
          <div className="max-w-md mx-auto p-6">
            <h1 className="text-2xl font-bold mb-2">Programme du jour</h1>
            <p className="text-muted-foreground">
              Vous avez {medications.length} médicaments programmés
            </p>
          </div>
        </div>
      </header>

      <DateSelector
        selectedDate={selectedDate}
        onDateSelect={handleDateSelect}
      />

      <main className="container mx-auto px-4 pt-48">
        {isLoading ? (
          <div className="flex justify-center items-center h-40">
            <p>Chargement...</p>
          </div>
        ) : (
          <div className="space-y-4">
            {medications.map((medication: Medication) => (
              <MedicationCard
                key={medication.id}
                medication={medication}
                onTake={handleTake}
                onSkip={handleSkip}
              />
            ))}
          </div>
        )}
      </main>

      <BottomNav />
    </div>
  );
};

export default Home;
