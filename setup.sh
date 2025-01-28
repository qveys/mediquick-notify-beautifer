#!/bin/bash

# Vérification de Node.js
if ! command -v node &> /dev/null
then
    echo "Node.js n'est pas installé. Veuillez l'installer d'abord."
    exit 1

    if ! node --version | grep -q "^v1[6-9]\|^v[2-9]"
    then
        echo "Node.js version 16 ou supérieure est requise."
        exit 1
    fi
fi

# Vérification de npm
if ! command -v npm &> /dev/null
then
    echo "npm n'est pas installé. Veuillez l'installer d'abord."
    exit 1
fi

# Installation des dépendances
echo "Installation des dépendances..."
npm install

# Build du projet
echo "Build du projet..."
npm run build

# Exécution des tests
echo "Exécution des tests..."
npm test

# Si tout s'est bien passé
echo "Configuration terminée avec succès !"
echo "Pour démarrer l'application en mode développement, exécutez : npm run dev"
