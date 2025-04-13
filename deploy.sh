#!/bin/bash

# Script pour déployer sur GitHub Pages

echo "🚀 Démarrage du déploiement sur GitHub Pages..."

# Vérifier si le nom d'utilisateur GitHub est fourni
if [ "$#" -ne 1 ]; then
  echo "❌ Erreur: Vous devez fournir votre nom d'utilisateur GitHub"
  echo "Usage: ./deploy.sh votre-nom-utilisateur"
  exit 1
fi

# Récupérer le nom d'utilisateur GitHub
GITHUB_USERNAME=$1

# Mettre à jour le README avec le nom d'utilisateur GitHub
sed -i "s/\[votre-nom-utilisateur\]/$GITHUB_USERNAME/g" README.md

# Exécuter le script de déploiement Node.js
echo "📦 Exécution du script de déploiement..."
node deploy.js

# Message de fin
echo "🎉 Processus de déploiement terminé!"
echo "Votre portfolio devrait être accessible à l'adresse:"
echo "https://$GITHUB_USERNAME.github.io/portfolio-3d/"