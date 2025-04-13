# Portfolio 3D - Atef Mannai

Ce projet est un portfolio 3D créé avec React et Three.js pour présenter mes compétences et projets en tant qu'ingénieur en développement logiciel.

## Technologies utilisées

- React / TypeScript
- Three.js pour les visualisations 3D
- TailwindCSS pour le styling
- Express pour le serveur backend

## Déploiement sur GitHub Pages

Pour déployer ce portfolio sur GitHub Pages, suivez ces étapes :

### 1. Préparer votre dépôt GitHub

1. Créez un nouveau dépôt sur GitHub (par exemple : `portfolio-3d`)
2. Rendez-le public pour pouvoir utiliser GitHub Pages

### 2. Connecter votre projet local à GitHub

```bash
# Initialiser git si ce n'est pas déjà fait
git init

# Ajouter le dépôt distant (remplacez 'USERNAME' par votre nom d'utilisateur GitHub)
git remote add origin https://github.com/USERNAME/portfolio-3d.git

# Ajouter tous les fichiers
git add .

# Créer un commit initial
git commit -m "Initial commit"

# Pousser vers GitHub
git push -u origin main
```

### 3. Déployer sur GitHub Pages

1. Modifiez la variable `REPO_NAME` dans le fichier `deploy.js` avec le nom de votre dépôt.
2. Exécutez le script de déploiement :

```bash
node deploy.js
```

3. Votre site sera déployé sur la branche `gh-pages` et accessible à l'adresse :
   `https://[votre-nom-utilisateur].github.io/portfolio-3d/`

4. Activez GitHub Pages dans les paramètres de votre dépôt si ce n'est pas déjà fait :
   - Allez dans "Settings" > "Pages"
   - Sélectionnez la source "gh-pages" et le dossier "/ (root)"
   - Cliquez sur "Save"

## Développement local

Pour travailler sur ce projet en local :

```bash
# Installer les dépendances
npm install

# Démarrer le serveur de développement
npm run dev
```

Le serveur démarrera sur http://localhost:5000