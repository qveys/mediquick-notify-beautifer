import { FC, memo } from 'react';

interface HeaderProps {
  medicationCount: number;
  date?: Date;
}

const Header: FC<HeaderProps> = memo(({ medicationCount, date = new Date() }) => (
  <header className="fixed top-0 left-0 right-0 z-50">
    <div className="glass">
      <div className="max-w-md mx-auto p-6">
        <h1 className="text-2xl font-bold mb-2">Programme du jour</h1>
        <p className="text-muted-foreground">
          {medicationCount === 0 ? (
            'Aucun médicament programmé'
          ) : (
            `Vous avez ${medicationCount} médicament${medicationCount > 1 ? 's' : ''} programmé${medicationCount > 1 ? 's' : ''}`
          )}
        </p>
        <p className="text-sm text-muted-foreground/80 mt-1">
          {date.toLocaleDateString('fr-FR', { 
            weekday: 'long', 
            year: 'numeric', 
            month: 'long', 
            day: 'numeric' 
          })}
        </p>
      </div>
    </div>
  </header>
));

Header.displayName = 'Header';
export default Header;