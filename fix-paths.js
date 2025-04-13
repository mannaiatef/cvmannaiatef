import fs from 'fs';
import path from 'path';

// Configuration
const DIST_FOLDER = 'dist/public';
const REPO_NAME = 'cvmannaiatef';
const BASE_PATH = `/${REPO_NAME}/`;

console.log('🔄 Correction des chemins pour GitHub Pages...');

try {
  // 1. Modifier index.html
  console.log('📝 Mise à jour de index.html...');
  const indexPath = path.join(DIST_FOLDER, 'index.html');
  let indexContent = fs.readFileSync(indexPath, 'utf8');
  
  // Remplacer les chemins absolus par des chemins relatifs avec le préfixe du dépôt
  indexContent = indexContent
    .replace(/href="\//g, `href="${BASE_PATH}`)
    .replace(/src="\//g, `src="${BASE_PATH}`);
  
  fs.writeFileSync(indexPath, indexContent);
  
  // 2. Créer une copie de index.html comme 404.html
  console.log('📄 Création de 404.html...');
  fs.writeFileSync(path.join(DIST_FOLDER, '404.html'), indexContent);
  
  // 3. Créer le fichier .nojekyll
  console.log('📄 Création du fichier .nojekyll...');
  fs.writeFileSync(path.join(DIST_FOLDER, '.nojekyll'), '');
  
  console.log('✅ Correction des chemins terminée!');
  console.log('💡 Vous pouvez maintenant déployer le contenu du dossier dist/public sur GitHub Pages.');
} catch (error) {
  console.error('❌ Erreur lors de la correction des chemins:', error);
  process.exit(1);
}