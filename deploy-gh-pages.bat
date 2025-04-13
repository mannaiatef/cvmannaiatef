@echo off
echo 🚀 Démarrage du déploiement vers GitHub Pages...

echo 📦 Construction du projet...
call npm run build

echo 📄 Préparation des fichiers pour le déploiement...
cd dist\public
echo. > .nojekyll

echo 🚢 Déploiement vers GitHub Pages...
git init
git add .
git config user.name "Deployment Script"
git config user.email "deploy@example.com"
git commit -m "Déploiement automatique %date%"
git remote | findstr origin >nul
IF %ERRORLEVEL% NEQ 0 git remote add origin https://github.com/mannaiatef/cvmannaiatef.git



git push origin main --force

cd ..\..
echo ✅ Déploiement terminé! Votre site sera bientôt disponible à:
echo    https://mannaiatef.github.io/cvmannaiatef/
echo.
echo Appuyez sur une touche pour terminer...
pause > nul