# SOLUCION RAPIDA - 3 COMANDOS

## 1. Cambiar el remote a SSH
git remote set-url origin git@github.com:changkasing1-debug/leaderstore-web.git

## 2. Agregar la clave SSH a GitHub (si no lo hiciste)
Ve a https://github.com/settings/keys -> New SSH key
Pega esta clave:
ssh-ed25519 AAAAC3NzaC1lZDI1NTE5AAAAIMcJASN7qwbbjejdPLr1LcREzXBD81qjg4rYpWeTeSF/ changkasing1@gmail.com

## 3. Push
git push origin main

## Si funciona:
Vercel va a redeployar automaticamente con la configuracion correcta.

## Si no funciona:
Copia el error exacto y mandamelo.
