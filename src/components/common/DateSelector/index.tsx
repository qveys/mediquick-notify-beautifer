import { FC, memo } from 'react';
import { format } from "date-fns";
import { fr } from "date-fns/locale";
import { cn } from "@/lib/utils";

interface DateSelectorProps {
  selectedDate: Date;
  onDateSelect: (date: Date) => void;
}

const DateSelector: FC<DateSelectorProps> = memo(({ selectedDate, onDateSelect }) => {
  const getDays = () => {
    const days = [];
    const today = new Date();
    for (let i = -3; i <= 3; i++) {
      const date = new Date(today);
      date.setDate(today.getDate() + i);
      days.push(date);
    }
    return days;
  };

  return (
    <div className="fixed top-[116px] left-0 right-0 z-40">
      <div className="glass">
        <div className="flex justify-between px-4 py-3">
          {getDays().map((date, index) => (
            <DateButton
              key={index}
              date={date}
              isSelected={format(date, 'd') === format(selectedDate, 'd')}
              onClick={() => onDateSelect(date)}
            />
          ))}
        </div>
      </div>
    </div>
  );
});

interface DateButtonProps {
  date: Date;
  isSelected: boolean;
  onClick: () => void;
}

const DateButton: FC<DateButtonProps> = ({ date, isSelected, onClick }) => (
  <button
    onClick={onClick}
    className={cn(
      "flex flex-col items-center transition-colors hover:text-primary",
      isSelected ? "text-primary" : ""
    )}
  >
    <span className="text-sm">
      {format(date, "EEE", { locale: fr }).toLowerCase()}
    </span>
    <span className="text-xl font-bold">
      {format(date, "d")}
    </span>
  </button>
);

DateSelector.displayName = 'DateSelector';
export default DateSelector;