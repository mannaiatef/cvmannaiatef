# Script PowerShell pour déployer sur GitHub Pages
Write-Host "🚀 Démarrage du déploiement direct via PowerShell..." -ForegroundColor Cyan

# 1. Exécuter le script de préparation des fichiers
Write-Host "📦 Préparation des fichiers..." -ForegroundColor Yellow
node deploy-direct.js

# 2. Vérifier si gh-pages est installé
Write-Host "🔍 Vérification de l'installation de gh-pages..." -ForegroundColor Yellow
$packageJson = Get-Content -Path "package.json" -Raw | ConvertFrom-Json

if ($null -eq $packageJson.devDependencies.'gh-pages') {
    Write-Host "⚠️ Le package gh-pages n'est pas installé, installation en cours..." -ForegroundColor Yellow
    npm install gh-pages --save-dev
} else {
    Write-Host "✅ Le package gh-pages est déjà installé." -ForegroundColor Green
}

# 3. Déployer avec gh-pages
Write-Host "🚀 Déploiement vers GitHub Pages..." -ForegroundColor Yellow
npx gh-pages -d dist/public

Write-Host "✅ Déploiement terminé!" -ForegroundColor Green
Write-Host "📱 Votre site sera bientôt disponible à: https://mannaiatef.github.io/cvmannaiatef/" -ForegroundColor Cyan