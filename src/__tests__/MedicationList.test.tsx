import { render, screen } from '@testing-library/react';
import MedicationList from '@/components/medications/MedicationList';

const mockMedications = [
  {
    id: 1,
    name: 'Medication 1',
    time: '08:00',
    dosage: '1 comprimé',
    status: 'pending' as const,
  },
  {
    id: 2,
    name: 'Medication 2',
    time: '12:00',
    dosage: '2 comprimés',
    status: 'pending' as const,
  },
];

describe('MedicationList', () => {
  const mockOnTake = vi.fn();
  const mockOnSkip = vi.fn();

  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('renders loading state', () => {
    render(
      <MedicationList
        medications={[]}
        onTake={mockOnTake}
        onSkip={mockOnSkip}
        isLoading={true}
      />
    );

    expect(screen.getByText('Chargement...')).toBeInTheDocument();
  });

  it('renders empty state when no medications', () => {
    render(
      <MedicationList
        medications={[]}
        onTake={mockOnTake}
        onSkip={mockOnSkip}
        isLoading={false}
      />
    );

    expect(screen.getByText('Aucun médicament programmé')).toBeInTheDocument();
  });

  it('renders list of medications', () => {
    render(
      <MedicationList
        medications={mockMedications}
        onTake={mockOnTake}
        onSkip={mockOnSkip}
        isLoading={false}
      />
    );

    mockMedications.forEach(medication => {
      expect(screen.getByText(medication.name)).toBeInTheDocument();
      expect(screen.getByText(medication.time)).toBeInTheDocument();
      expect(screen.getByText(medication.dosage)).toBeInTheDocument();
    });
  });
});