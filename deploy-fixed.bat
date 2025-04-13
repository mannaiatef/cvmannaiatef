@echo off
echo 🚀 Démarrage du déploiement avec correction des chemins...

echo 📦 Construction du projet...
call npm run build

echo 🔧 Correction des chemins pour GitHub Pages...
node fix-paths.js

echo 🚢 Déploiement vers GitHub Pages...
cd dist\public
git init
git add .
git config user.name "Deployment Script"
git config user.email "deploy@example.com"
git commit -m "Déploiement automatique avec chemins corrigés"
git remote add origin https://github.com/mannaiatef/cvmannaiatef.git
git push -f origin master:gh-pages

cd ..\..
echo ✅ Déploiement terminé! Votre site sera bientôt disponible à:
echo    https://mannaiatef.github.io/cvmannaiatef/
echo.
echo Appuyez sur une touche pour terminer...
pause > nul