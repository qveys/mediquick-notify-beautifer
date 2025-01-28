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
  it('renders medication information correctly', () => {
    const handleTake = jest.fn();
    const handleSkip = jest.fn();

    render(
      <MedicationCard
        medication={mockMedication}
        onTake={handleTake}
        onSkip={handleSkip}
      />
    );

    expect(screen.getByText('Test Medication')).toBeInTheDocument();
    expect(screen.getByText('08:00')).toBeInTheDocument();
    expect(screen.getByText('1 comprimé')).toBeInTheDocument();
  });

  it('calls onTake when take button is clicked', () => {
    const handleTake = jest.fn();
    const handleSkip = jest.fn();

    render(
      <MedicationCard
        medication={mockMedication}
        onTake={handleTake}
        onSkip={handleSkip}
      />
    );

    fireEvent.click(screen.getByText('Take'));
    expect(handleTake).toHaveBeenCalledWith(mockMedication.id);
  });

  it('calls onSkip when skip button is clicked', () => {
    const handleTake = jest.fn();
    const handleSkip = jest.fn();

    render(
      <MedicationCard
        medication={mockMedication}
        onTake={handleTake}
        onSkip={handleSkip}
      />
    );

    fireEvent.click(screen.getByText('Skip'));
    expect(handleSkip).toHaveBeenCalledWith(mockMedication.id);
  });
});
