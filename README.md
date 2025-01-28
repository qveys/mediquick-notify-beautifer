# MediQuick Notify

Une application React moderne pour la gestion des prises de médicaments. Cette application permet aux utilisateurs de suivre leurs médicaments quotidiens, de recevoir des rappels et de gérer leur planning de prise de médicaments.

## Fonctionnalités

- ✅ Interface utilisateur moderne et réactive
- ✅ Gestion des prises de médicaments
- ✅ Rappels personnalisables
- ✅ Mode sombre/clair
- ✅ Application Progressive (PWA)
- ✅ Support multilingue

## Technologies utilisées

- React 18
- TypeScript
- Vite
- Tailwind CSS
- Radix UI
- React Query
- React Hook Form
- Zod
- Vitest/Jest
- Playwright

## Démarrage rapide

```bash
# Cloner le repo
git clone https://github.com/qveys/mediquick-notify-beautifer.git
cd mediquick-notify-beautifer

# Installer les dépendances
npm install

# Démarrer en mode développement
npm run dev
```

## Scripts disponibles

```bash
# Développement
npm run dev          # Démarre le serveur de développement

# Production
npm run build        # Build pour la production
npm run preview      # Prévisualise la version de production

# Tests
npm run test         # Lance les tests unitaires
npm run test:watch   # Tests unitaires en mode watch
npm run test:e2e     # Lance les tests end-to-end

# Linting & Formatting
npm run lint         # Vérifie le code
npm run lint:fix     # Corrige les erreurs de linting
npm run format       # Formate le code
```

## Structure du projet

```
src/
├── components/       # Composants réutilisables
│   ├── common/        # Composants communs
│   │   ├── BottomNav/   # Navigation du bas
│   │   ├── Header/      # En-tête
│   │   └── DateSelector/ # Sélecteur de date
│   ├── medications/   # Composants spécifiques aux médicaments
│   └── ui/            # Composants UI réutilisables
├── features/         # Fonctionnalités métier
│   └── medications/   # Logique métier des médicaments
├── lib/              # Utilitaires et helpers
├── pages/            # Pages de l'application
├── store/            # Gestion de l'état global
└── __tests__/        # Tests unitaires

```

## Personnalisation

### Thème

Le thème peut être modifié dans `tailwind.config.ts`. Les variables CSS sont définies dans `src/index.css`.

### Composants UI

Les composants UI réutilisables sont construits avec Radix UI et peuvent être personnalisés dans `src/components/ui/`.

## Tests

L'application utilise :
- Jest et Testing Library pour les tests unitaires
- Playwright pour les tests end-to-end

Les tests sont organisés par type :
- Tests unitaires dans `src/__tests__/`
- Tests E2E dans `src/e2e/`

## État de l'application

La gestion de l'état utilise :
- React Query pour les données du serveur
- Zustand pour l'état global local
- React Hook Form pour les formulaires

## Contributions

Les contributions sont les bienvenues ! Assurez-vous de :

1. Forker le projet
2. Créer une branche pour votre fonctionnalité (`git checkout -b feature/ma-fonctionnalite`)
3. Commiter vos changements (`git commit -am 'Ajoute une nouvelle fonctionnalité'`)
4. Pousser sur la branche (`git push origin feature/ma-fonctionnalite`)
5. Créer une Pull Request

## Licence

MIT
