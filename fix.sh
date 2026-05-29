#!/bin/bash
set -e

echo "=== Fix Git + Push ==="

# 1. Cambiar remote a SSH
git remote set-url origin git@github.com:changkasing1-debug/leaderstore-web.git

# 2. Configurar identidad
git config user.name "changkasing1"
git config user.email "changkasing1@gmail.com"

# 3. Stage vercel.json
git add vercel.json

# 4. Commit
git commit -m "fix: restore original vercel.json"

# 5. Push
git push origin main

echo "=== DONE ==="
