import { FC, memo } from 'react';
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Pill, Clock, Check, X } from "lucide-react";
import { cn } from "@/lib/utils";
import type { MedicationCardProps } from '@/features/medications/types/medication.types';

const MedicationCard: FC<MedicationCardProps> = memo(({
  medication: { id, name, time, dosage },
  onTake,
  onSkip,
}) => (
  <div className="w-full mt-6">
    <div className="relative">
      <TimeDisplay time={time} />
      <Card className="w-full overflow-hidden animate-fade-in glass">
        <div className="p-4 space-y-4">
          <MedicationInfo name={name} dosage={dosage} />
          <ActionButtons 
            onTake={() => onTake(id)} 
            onSkip={() => onSkip(id)} 
          />
        </div>
      </Card>
    </div>
  </div>
));

const TimeDisplay: FC<{ time: string }> = ({ time }) => (
  <div className="absolute left-6 z-10" style={{top: "calc(calc(1.75rem + 8px)/-2)"}}>
    <div className="flex items-center text-xl font-semibold bg-background px-2 py-1 rounded">
      <Clock className="w-5 h-5 mr-2 text-primary" />
      {time}
    </div>
  </div>
);

const MedicationInfo: FC<{ name: string; dosage: string }> = ({ name, dosage }) => (
  <div className="flex items-center space-x-6">
    <div className="p-4 rounded-full bg-primary/5 mx-2">
      <Pill className="w-8 h-8 text-primary" />
    </div>
    <div className="flex-1">
      <h3 className="text-xl font-semibold mb-1">{name}</h3>
      <p className="text-sm text-muted-foreground/80">{dosage}</p>
    </div>
  </div>
);

const ActionButtons: FC<{ onTake: () => void; onSkip: () => void }> = ({ onTake, onSkip }) => (
  <div className="flex space-x-4">
    <Button
      onClick={onTake}
      className="flex-1 py-6 bg-primary hover:bg-primary/90 text-primary-foreground"
    >
      <Check className="w-5 h-5 mr-2" />
      Take
    </Button>
    <Button
      onClick={onSkip}
      variant="outline"
      className="flex-1 py-6"
    >
      <X className="w-5 h-5 mr-2" />
      Skip
    </Button>
  </div>
);

MedicationCard.displayName = 'MedicationCard';
export default MedicationCard;