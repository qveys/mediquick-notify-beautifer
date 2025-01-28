import { FC } from "react";
import { Home, PlusCircle, Pill, Menu } from "lucide-react";
import { cn } from "@/lib/utils";
import { useNavigate, useLocation } from "react-router-dom";
import { ROUTES } from "@/constants/routes";

const NAV_ITEMS = [
  { id: "home", icon: Home, label: "Home", path: ROUTES.HOME },
  { id: "add", icon: PlusCircle, label: "Add", path: ROUTES.ADD_MEDICATION },
  { id: "medications", icon: Pill, label: "Meds", path: ROUTES.MEDICATIONS },
  { id: "menu", icon: Menu, label: "More", path: ROUTES.SETTINGS },
] as const;

const BottomNav: FC = () => {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50">
      <div className="glass">
        <div className="flex justify-around p-4">
          {NAV_ITEMS.map(({ id, icon: Icon, label, path }) => (
            <NavButton
              key={id}
              id={id}
              Icon={Icon}
              label={label}
              isActive={location.pathname === path}
              onClick={() => navigate(path)}
            />
          ))}
        </div>
      </div>
    </nav>
  );
};

interface NavButtonProps {
  id: string;
  Icon: React.ElementType;
  label: string;
  isActive: boolean;
  onClick: () => void;
}

const NavButton: FC<NavButtonProps> = ({ Icon, label, isActive, onClick }) => (
  <button
    onClick={onClick}
    className={cn(
      "flex flex-col items-center space-y-1 transition-colors",
      isActive ? "text-primary" : "text-muted-foreground hover:text-foreground"
    )}
  >
    <Icon className="w-6 h-6" />
    <span className="text-xs">{label}</span>
  </button>
);

export default BottomNav;