import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import type { Medication, MedicationStatus } from '@/features/medications/types/medication.types';

interface AppState {
  theme: 'light' | 'dark' | 'system';
  setTheme: (theme: 'light' | 'dark' | 'system') => void;
  selectedDate: Date;
  setSelectedDate: (date: Date) => void;
  recentMedications: Medication[];
  addRecentMedication: (medication: Medication) => void;
  updateMedicationStatus: (id: number, status: MedicationStatus) => void;
}

export const useAppStore = create<AppState>()(
  persist(
    (set) => ({
      theme: 'system',
      setTheme: (theme) => set({ theme }),
      selectedDate: new Date(),
      setSelectedDate: (date) => set({ selectedDate: date }),
      recentMedications: [],
      addRecentMedication: (medication) =>
        set((state) => ({
          recentMedications: [
            medication,
            ...state.recentMedications.slice(0, 9),
          ],
        })),
      updateMedicationStatus: (id, status) =>
        set((state) => ({
          recentMedications: state.recentMedications.map((med) =>
            med.id === id ? { ...med, status } : med
          ),
        })),
    }),
    {
      name: 'mediquick-storage',
      partialize: (state) => ({
        theme: state.theme,
        recentMedications: state.recentMedications,
      }),
    }
  )
);