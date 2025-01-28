import { render, screen, fireEvent } from '@testing-library/react';
import MedicationCard from '@/components/medications/MedicationCard';

const mockMedication = {
  id: 1,
  name: 'Test Medication',
  time: '08:00',
  dosage: '1 comprimé',
  status: 'pending' as const,
};

describe('MedicationCard', () => {
  const mockOnTake = vi.fn();
  const mockOnSkip = vi.fn();

  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('renders medication information correctly', () => {
    render(
      <MedicationCard
        medication={mockMedication}
        onTake={mockOnTake}
        onSkip={mockOnSkip}
      />
    );

    expect(screen.getByText(mockMedication.name)).toBeInTheDocument();
    expect(screen.getByText(mockMedication.time)).toBeInTheDocument();
    expect(screen.getByText(mockMedication.dosage)).toBeInTheDocument();
  });

  it('calls onTake when Take button is clicked', () => {
    render(
      <MedicationCard
        medication={mockMedication}
        onTake={mockOnTake}
        onSkip={mockOnSkip}
      />
    );

    fireEvent.click(screen.getByText('Take'));
    expect(mockOnTake).toHaveBeenCalledWith(mockMedication.id);
  });

  it('calls onSkip when Skip button is clicked', () => {
    render(
      <MedicationCard
        medication={mockMedication}
        onTake={mockOnTake}
        onSkip={mockOnSkip}
      />
    );

    fireEvent.click(screen.getByText('Skip'));
    expect(mockOnSkip).toHaveBeenCalledWith(mockMedication.id);
  });
});