const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

// Configuration
const DIST_FOLDER = 'dist/public';
const REPO_NAME = 'cvmannaiatef';
const GITHUB_REPO = 'https://github.com/mannaiatef/cvmannaiatef.git';

// Fonction d'exécution de commande shell avec affichage
function exec(command, options = {}) {
  console.log(`📋 Exécution: ${command}`);
  try {
    return execSync(command, { 
      stdio: 'inherit',
      ...options
    });
  } catch (error) {
    console.error(`❌ Erreur lors de l'exécution de: ${command}`);
    throw error;
  }
}

// Fonction principale de déploiement
async function deploy() {
  try {
    console.log('🚀 Démarrage du déploiement...\n');

    // Étape 1: Construction du projet
    console.log('\n📦 Construction du projet...');
    exec('npm run build');

    // Étape 2: Correction des chemins
    console.log('\n🔧 Correction des chemins pour GitHub Pages...');
    
    // S'assurer que le dossier de destination existe
    if (!fs.existsSync(DIST_FOLDER)) {
      console.error(`❌ Le dossier ${DIST_FOLDER} n'existe pas!`);
      process.exit(1);
    }
    
    // 2.1 Modifier index.html
    console.log('📝 Mise à jour de index.html...');
    const indexPath = path.join(DIST_FOLDER, 'index.html');
    let indexContent = fs.readFileSync(indexPath, 'utf8');
    
    // Remplacer les chemins absolus par des chemins relatifs avec le préfixe du dépôt
    indexContent = indexContent
      .replace(/href="\//g, `href="/${REPO_NAME}/`)
      .replace(/src="\//g, `src="/${REPO_NAME}/`);
    
    fs.writeFileSync(indexPath, indexContent);
    
    // 2.2 Créer une copie de index.html comme 404.html
    console.log('📄 Création de 404.html...');
    fs.writeFileSync(path.join(DIST_FOLDER, '404.html'), indexContent);
    
    // 2.3 Créer le fichier .nojekyll
    console.log('📄 Création du fichier .nojekyll...');
    fs.writeFileSync(path.join(DIST_FOLDER, '.nojekyll'), '');

    // Étape 3: Déploiement sur GitHub Pages
    console.log('\n🚢 Déploiement vers GitHub Pages...');
    
    // Naviguer vers le dossier de build
    process.chdir(DIST_FOLDER);
    
    // Initialiser un dépôt Git
    exec('git init');
    exec('git add -A');
    exec('git config user.name "Deployment Script"');
    exec('git config user.email "deploy@example.com"');
    exec('git commit -m "Déploiement automatique avec chemins corrigés"');
    
    // Ajouter le dépôt distant et pousser les modifications
    try {
      exec(`git remote add origin ${GITHUB_REPO}`);
    } catch (e) {
      // Si le remote existe déjà, continuez
    }
    
    exec('git push -f origin master:gh-pages');
    
    // Retourner au dossier principal
    process.chdir('../..');
    
    console.log('\n✅ Déploiement terminé avec succès!');
    console.log(`📱 Votre site sera bientôt disponible à: https://mannaiatef.github.io/${REPO_NAME}/`);
    
  } catch (error) {
    console.error('\n❌ Le déploiement a échoué!', error);
    process.exit(1);
  }
}

// Exécuter le déploiement
deploy();