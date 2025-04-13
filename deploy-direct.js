import { execSync } from 'child_process';
import fs from 'fs';
import path from 'path';

// Configuration
const BUILD_COMMAND = 'npm run build';
const DIST_FOLDER = 'dist/public';
const REPO_URL = 'https://github.com/mannaiatef/cvmannaiatef.git';

console.log('🚀 Démarrage du déploiement direct vers gh-pages...');

try {
  // 1. Construire le projet
  console.log('📦 Construction du projet...');
  process.env.NODE_ENV = 'production';
  execSync(BUILD_COMMAND, { stdio: 'inherit' });
  
  // 2. Créer le fichier .nojekyll
  console.log('📄 Création du fichier .nojekyll...');
  fs.writeFileSync(path.join(DIST_FOLDER, '.nojekyll'), '');
  
  // 3. Créer un dossier temporaire pour le déploiement
  console.log('📁 Préparation des fichiers pour le déploiement...');
  const tempDir = 'temp-deploy';
  
  // Supprimer le dossier temporaire s'il existe
  if (fs.existsSync(tempDir)) {
    execSync(`rm -rf ${tempDir}`);
  }
  
  // Créer le dossier temporaire
  fs.mkdirSync(tempDir);
  
  // Copier les fichiers de build dans le dossier temporaire
  execSync(`cp -r ${DIST_FOLDER}/* ${tempDir}/`);
  execSync(`cp ${DIST_FOLDER}/.nojekyll ${tempDir}/`);
  
  // 4. Initialiser un nouveau dépôt git et pousser vers gh-pages
  console.log('🚢 Déploiement vers la branche gh-pages...');
  
  // Commandes Git à exécuter dans le dossier temporaire
  const commands = [
    'git init',
    'git add .',
    'git config user.name "GitHub Actions"',
    'git config user.email "actions@github.com"',
    'git commit -m "Déploiement automatique"',
    `git remote add origin ${REPO_URL}`,
    'git push -f origin master:gh-pages'
  ];
  
  // Exécuter les commandes
  process.chdir(tempDir);
  commands.forEach(cmd => {
    execSync(cmd);
  });
  
  // Revenir au dossier racine
  process.chdir('..');
  
  // Nettoyer
  execSync(`rm -rf ${tempDir}`);
  
  console.log('✅ Déploiement terminé! Votre site devrait être disponible bientôt à:');
  console.log('   https://mannaiatef.github.io/cvmannaiatef/');
} catch (error) {
  console.error('❌ Échec du déploiement:', error.message);
  process.exit(1);
}