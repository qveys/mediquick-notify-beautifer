import { render, screen } from '@testing-library/react';
import MedicationList from '@/components/medications/MedicationList';

const mockMedications = [
  {
    id: 1,
    name: 'Test Medication 1',
    time: '08:00',
    dosage: '1 comprimé',
    status: 'pending' as const,
  },
  {
    id: 2,
    name: 'Test Medication 2',
    time: '12:00',
    dosage: '2 comprimés',
    status: 'pending' as const,
  },
];

describe('MedicationList', () => {
  it('renders loading state correctly', () => {
    render(
      <MedicationList
        medications={[]}
        onTake={jest.fn()}
        onSkip={jest.fn()}
        isLoading={true}
      />
    );

    expect(screen.getByText('Chargement...')).toBeInTheDocument();
  });

  it('renders empty state correctly', () => {
    render(
      <MedicationList
        medications={[]}
        onTake={jest.fn()}
        onSkip={jest.fn()}
        isLoading={false}
      />
    );

    expect(screen.getByText('Aucun médicament programmé')).toBeInTheDocument();
  });

  it('renders medication list correctly', () => {
    render(
      <MedicationList
        medications={mockMedications}
        onTake={jest.fn()}
        onSkip={jest.fn()}
        isLoading={false}
      />
    );

    expect(screen.getByText('Test Medication 1')).toBeInTheDocument();
    expect(screen.getByText('Test Medication 2')).toBeInTheDocument();
    expect(screen.getByText('08:00')).toBeInTheDocument();
    expect(screen.getByText('12:00')).toBeInTheDocument();
  });
});
