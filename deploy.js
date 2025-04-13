// deploy.js - Script to deploy to GitHub Pages
import { execSync } from 'child_process';
import fs from 'fs';
import path from 'path';

// Configuration
const BUILD_COMMAND = 'npm run build';
const DIST_FOLDER = 'dist/public'; // Note: The build output is in dist/public
const GH_PAGES_BRANCH = 'gh-pages';
const REPO_NAME = 'cvmannaiatef'; // Nom de votre dépôt GitHub

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
  // Check if we have a custom 404.html file
  if (fs.existsSync(path.join('public', '404.html'))) {
    console.log('📄 Copying custom 404.html file...');
    const custom404Html = fs.readFileSync(path.join('public', '404.html'), 'utf8');
    // Update paths in custom 404.html
    const modified404Html = custom404Html
      .replace(/href="\//g, `href="/${REPO_NAME}/`)
      .replace(/src="\//g, `src="/${REPO_NAME}/`)
      .replace(/window.location.href = "\//g, `window.location.href = "/${REPO_NAME}/`);
    
    fs.writeFileSync(path.join(DIST_FOLDER, '404.html'), modified404Html);
  } else {
    console.log('📄 Creating default 404.html file...');
    fs.copyFileSync(path.join(DIST_FOLDER, 'index.html'), path.join(DIST_FOLDER, '404.html'));
  }
  
  // 5. Copy _redirects file if it exists
  if (fs.existsSync(path.join('public', '_redirects'))) {
    console.log('📄 Copying _redirects file...');
    fs.copyFileSync(path.join('public', '_redirects'), path.join(DIST_FOLDER, '_redirects'));
  }
  
  // 5. Deploy to GitHub Pages
  console.log('🚢 Deploying to GitHub Pages...');
  execSync(`npx gh-pages -d ${DIST_FOLDER}`, { stdio: 'inherit' });
  
  console.log('✅ Deployment complete! Your site should be available soon at:');
  console.log(`   https://[votre-nom-utilisateur].github.io/${REPO_NAME}/`);
} catch (error) {
  console.error('❌ Deployment failed:', error);
  process.exit(1);
}