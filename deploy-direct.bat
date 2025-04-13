@echo off
echo 🚀 Démarrage du déploiement direct...

echo 📦 Préparation des fichiers...
node deploy-direct.js

echo 🔍 Vérification de l'installation de gh-pages...
call npm list -g gh-pages >nul 2>&1
if %ERRORLEVEL% NEQ 0 (
    echo ⚠️ Le package gh-pages n'est pas installé, installation en cours...
    call npm install -g gh-pages
) else (
    echo ✅ Le package gh-pages est déjà installé.
)

echo 🚀 Déploiement vers GitHub Pages...
call npx gh-pages -d dist/public

echo ✅ Déploiement terminé!
echo 📱 Votre site sera bientôt disponible à: https://mannaiatef.github.io/cvmannaiatef/

echo.
echo Appuyez sur une touche pour terminer...
pause > nul