import { FC } from 'react';
import { useTheme } from 'next-themes';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Switch } from '@/components/ui/switch';
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Separator } from '@/components/ui/separator';
import { useToast } from '@/components/ui/use-toast';
import BottomNav from '@/components/common/BottomNav';

const Settings: FC = () => {
  const { theme, setTheme } = useTheme();
  const { toast } = useToast();

  const handleNotificationToggle = (enabled: boolean) => {
    if (enabled) {
      if ('Notification' in window) {
        Notification.requestPermission().then(permission => {
          if (permission === 'granted') {
            toast({
              title: 'Notifications activées',
              description: 'Vous recevrez des notifications pour vos médicaments.',
            });
          } else {
            toast({
              variant: 'destructive',
              title: 'Erreur',
              description: 'Vous devez autoriser les notifications dans votre navigateur.',
            });
          }
        });
      }
    }
  };

  return (
    <div className="min-h-screen pb-24">
      <div className="container mx-auto p-6 space-y-8">
        <h1 className="text-2xl font-bold mb-4">Paramètres</h1>

        <Card>
          <CardHeader>
            <CardTitle>Thème</CardTitle>
            <CardDescription>
              Personnalisez l'apparence de l'application
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Select value={theme} onValueChange={setTheme}>
              <SelectTrigger>
                <SelectValue placeholder="Sélectionnez un thème" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>Thèmes</SelectLabel>
                  <SelectItem value="light">Clair</SelectItem>
                  <SelectItem value="dark">Sombre</SelectItem>
                  <SelectItem value="system">Système</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Notifications</CardTitle>
            <CardDescription>
              Gérez vos préférences de notification
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex justify-between items-center">
              <Label htmlFor="notifications" className="flex-1">
                Activer les notifications
              </Label>
              <Switch
                id="notifications"
                onCheckedChange={handleNotificationToggle}
              />
            </div>
            <Separator />
            <div className="flex justify-between items-center">
              <Label htmlFor="reminder-time" className="flex-1">
                Délai de rappel
              </Label>
              <Select defaultValue="15">
                <SelectTrigger id="reminder-time" className="w-40">
                  <SelectValue placeholder="Sélectionnez un délai" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Délai de rappel</SelectLabel>
                    <SelectItem value="5">5 minutes avant</SelectItem>
                    <SelectItem value="15">15 minutes avant</SelectItem>
                    <SelectItem value="30">30 minutes avant</SelectItem>
                    <SelectItem value="60">1 heure avant</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Données</CardTitle>
            <CardDescription>
              Gérez vos données d'application
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Button
              variant="destructive"
              onClick={() => {
                toast({
                  title: 'Données effacées',
                  description: 'Toutes vos données ont été supprimées.',
                });
              }}
            >
              Effacer toutes les données
            </Button>
          </CardContent>
          <CardFooter className="text-xs text-muted-foreground">
            Cette action est irréversible
          </CardFooter>
        </Card>
      </div>

      <BottomNav />
    </div>
  );
};

export default Settings;