#!/bin/bash

# Installation des dépendances
npm install

# Installation des husky hooks
npx husky install

# Ajout du hook pre-commit
npx husky add .husky/pre-commit "npx lint-staged"

# Configuration de lint-staged
cat > .lintstagedrc.json << EOL
{
  "*.{js,jsx,ts,tsx}": [
    "eslint --fix",
    "prettier --write"
  ],
  "*.{json,md}": [
    "prettier --write"
  ]
}
EOL

# Configuration de VSCode
mkdir -p .vscode
cat > .vscode/settings.json << EOL
{
  "editor.formatOnSave": true,
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  },
  "typescript.tsdk": "node_modules/typescript/lib"
}
EOL

echo "Configuration initiale terminée !"
