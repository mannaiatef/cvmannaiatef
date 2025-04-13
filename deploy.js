// deploy.js - Script to deploy to GitHub Pages
import { execSync } from 'child_process';
import fs from 'fs';
import path from 'path';

// Configuration
const BUILD_COMMAND = 'npm run build';
const DIST_FOLDER = 'dist/public'; // Note: The build output is in dist/public
const GH_PAGES_BRANCH = 'gh-pages';
const REPO_NAME = 'portfolio-3d'; // Changez ceci avec le nom de votre dépôt GitHub

console.log('🚀 Starting deployment process...');

try {
  // 1. Build the project
  console.log('📦 Building the project...');
  // Set environment variable for production build
  process.env.NODE_ENV = 'production';
  execSync(BUILD_COMMAND, { stdio: 'inherit' });
  
  // 2. Create or update .nojekyll file to prevent Jekyll processing
  console.log('📄 Creating .nojekyll file...');
  fs.writeFileSync(path.join(DIST_FOLDER, '.nojekyll'), '');
  
  // 3. Create a simple index.html redirect for sub-paths
  console.log('📝 Creating path fallback for SPA routing...');
  const indexHtml = fs.readFileSync(path.join(DIST_FOLDER, 'index.html'), 'utf8');
  
  // Modify paths in index.html for GitHub Pages
  const modifiedIndexHtml = indexHtml
    .replace(/href="\//g, `href="/${REPO_NAME}/`)
    .replace(/src="\//g, `src="/${REPO_NAME}/`);
  
  fs.writeFileSync(path.join(DIST_FOLDER, 'index.html'), modifiedIndexHtml);
  
  // 4. Create 404.html that redirects back to index.html for SPA routing
  fs.copyFileSync(path.join(DIST_FOLDER, 'index.html'), path.join(DIST_FOLDER, '404.html'));
  
  // 5. Deploy to GitHub Pages
  console.log('🚢 Deploying to GitHub Pages...');
  execSync(`npx gh-pages -d ${DIST_FOLDER}`, { stdio: 'inherit' });
  
  console.log('✅ Deployment complete! Your site should be available soon at:');
  console.log(`   https://[votre-nom-utilisateur].github.io/${REPO_NAME}/`);
} catch (error) {
  console.error('❌ Deployment failed:', error);
  process.exit(1);
}