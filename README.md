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

## Installation

1. Clonez le repository :
```bash
git clone https://github.com/qveys/mediquick-notify-beautifer.git
cd mediquick-notify-beautifer
```

2. Exécutez le script d'initialisation :
```bash
chmod +x init.sh
./init.sh
```

3. Démarrez l'application en mode développement :
```bash
npm run dev
```

## Scripts disponibles

- `npm run dev` : Démarre le serveur de développement
- `npm run build` : Build l'application pour la production
- `npm run test` : Exécute les tests unitaires
- `npm run test:e2e` : Exécute les tests end-to-end
- `npm run lint` : Vérifie le code avec ESLint
- `npm run format` : Formate le code avec Prettier

## Structure du projet

```
src/
├── components/        # Composants réutilisables
│   ├── common/         # Composants communs (Header, Footer, etc.)
│   ├── medications/    # Composants spécifiques aux médicaments
│   └── ui/             # Composants d'interface utilisateur
├── features/          # Fonctionnalités métier
├── lib/               # Utilitaires et configurations
├── pages/             # Pages de l'application
├── store/             # Gestion de l'état global
└── types/             # Types TypeScript
```

## Contributions

Les contributions sont les bienvenues ! N'hésitez pas à soumettre des pull requests.

## Licence

MIT
