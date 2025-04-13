const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

// Configuration
const DIST_FOLDER = 'dist/public';
const REPO_NAME = 'cvmannaiatef';

console.log('🚀 Démarrage du déploiement direct...');

try {
  // 1. Construction du projet
  console.log('📦 Construction du projet...');
  execSync('npm run build', { stdio: 'inherit' });

  // 2. Vérifier que le dossier de build existe
  if (!fs.existsSync(DIST_FOLDER)) {
    console.error(`❌ Erreur: Le dossier ${DIST_FOLDER} n'existe pas après la construction.`);
    process.exit(1);
  }

  // 3. Correction des chemins dans index.html
  console.log('🔧 Correction des chemins dans les fichiers HTML...');
  const indexPath = path.join(DIST_FOLDER, 'index.html');
  
  if (!fs.existsSync(indexPath)) {
    console.error(`❌ Erreur: Le fichier ${indexPath} n'existe pas.`);
    process.exit(1);
  }
  
  let indexContent = fs.readFileSync(indexPath, 'utf8');
  
  // Remplacer les chemins absolus par des chemins avec le préfixe du dépôt
  indexContent = indexContent
    .replace(/href="\//g, `href="/${REPO_NAME}/`)
    .replace(/src="\//g, `src="/${REPO_NAME}/`);
  
  fs.writeFileSync(indexPath, indexContent);
  
  // 4. Créer 404.html (nécessaire pour le routage côté client sur GitHub Pages)
  console.log('📄 Création de 404.html...');
  fs.writeFileSync(path.join(DIST_FOLDER, '404.html'), indexContent);
  
  // 5. Créer .nojekyll (pour désactiver le traitement Jekyll sur GitHub Pages)
  console.log('📄 Création de .nojekyll...');
  fs.writeFileSync(path.join(DIST_FOLDER, '.nojekyll'), '');

  console.log('✅ Préparation terminée!');
  console.log('\n📋 Instructions manuelles pour finaliser le déploiement:');
  console.log('1. Copiez tout le contenu du dossier "dist/public"');
  console.log('2. Allez sur GitHub et créez une nouvelle branche "gh-pages" (si elle n\'existe pas déjà)');
  console.log('3. Téléchargez-y les fichiers copiés');
  console.log('4. Activez GitHub Pages pour la branche "gh-pages" dans les paramètres du dépôt');
  console.log(`\n📱 Votre site sera ensuite disponible à: https://mannaiatef.github.io/${REPO_NAME}/`);
  
} catch (error) {
  console.error('❌ Erreur lors du déploiement:', error);
  process.exit(1);
}