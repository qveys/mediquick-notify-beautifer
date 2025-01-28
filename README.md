# MediQuick Notify

Une application React moderne pour la gestion des prises de médicaments.

## 🚀 Fonctionnalités

- Suivi des prises de médicaments
- Interface utilisateur intuitive
- Support du mode sombre
- PWA ready
- Performance optimisée

## 🛠 Technologies

- React + TypeScript
- Vite
- TailwindCSS
- React Query
- React Router
- Jest + Testing Library
- ESLint + Prettier

## 📦 Installation

```bash
# Cloner le projet
git clone https://github.com/votre-username/mediquick-notify.git

# Installer les dépendances
npm install

# Lancer en développement
npm run dev

# Build pour la production
npm run build
```

## 🧪 Tests

```bash
# Lancer les tests
npm test

# Lancer les tests avec la couverture
npm run test:coverage

# Lancer les tests en mode watch
npm run test:watch
```

## 📚 Structure du Projet

```
src/
├── components/       # Composants réutilisables
├── features/        # Fonctionnalités métier
├── hooks/           # Hooks personnalisés
├── utils/           # Utilitaires
├── services/        # Services et API
├── constants/       # Constants
└── pages/           # Pages de l'application
```

## 🔧 Configuration

Le projet utilise plusieurs outils de configuration :

- `vite.config.ts` : Configuration du bundler Vite
- `tsconfig.json` : Configuration TypeScript
- `.eslintrc.json` : Règles ESLint
- `.prettierrc` : Configuration Prettier
- `jest.config.js` : Configuration des tests
- `tailwind.config.js` : Configuration TailwindCSS

## 🔍 Conventions de Code

### Composants

```typescript
// Utiliser des composants fonctionnels avec TypeScript
import { FC } from 'react';

interface MyComponentProps {
  title: string;
}

const MyComponent: FC<MyComponentProps> = ({ title }) => {
  return <div>{title}</div>;
};

export default MyComponent;
```

### Hooks

```typescript
// Hooks personnalisés
import { useState, useCallback } from 'react';

export const useMyHook = (initialValue: string) => {
  const [value, setValue] = useState(initialValue);

  const updateValue = useCallback((newValue: string) => {
    setValue(newValue);
  }, []);

  return { value, updateValue };
};
```

### Tests

```typescript
// Tests avec Jest et Testing Library
import { render, screen } from '@testing-library/react';

describe('MyComponent', () => {
  it('should render correctly', () => {
    render(<MyComponent title="Test" />);
    expect(screen.getByText('Test')).toBeInTheDocument();
  });
});
```

## 🚀 Déploiement

Le projet peut être déployé sur plusieurs plateformes :

### Vercel
```bash
npm install -g vercel
vercel
```

### Netlify
```bash
npm install -g netlify-cli
netlify deploy
```

## 📱 PWA

L'application est configurée comme une PWA avec :
- Service Worker pour le cache
- Manifest pour l'installation
- Stratégie de cache optimisée

## 🔐 Sécurité

- HTTPS forcé en production
- CSP headers configurés
- Sanitization des entrées
- Protection XSS

## 🌐 Internationalisation

Le projet supporte plusieurs langues via react-i18next.

## 📈 Performance

- Code splitting automatique
- Lazy loading des routes
- Prefetching intelligent
- Cache optimisé

## 🤝 Contribution

1. Fork le projet
2. Créer une branche (`git checkout -b feature/amazing-feature`)
3. Commit les changements (`git commit -m 'Add amazing feature'`)
4. Push sur la branche (`git push origin feature/amazing-feature`)
5. Ouvrir une Pull Request

## 📝 Licence

Ce projet est sous licence MIT - voir le fichier [LICENSE.md](LICENSE.md) pour plus de détails.

## ✨ Remerciements

- [React Team](https://reactjs.org/)
- [Vite](https://vitejs.dev/)
- [TailwindCSS](https://tailwindcss.com/)
- [React Query](https://tanstack.com/query/latest)
- [shadcn/ui](https://ui.shadcn.com/)