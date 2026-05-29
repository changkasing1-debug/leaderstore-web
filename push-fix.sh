#!/bin/bash
# Script to fix the git push issue

set -e

echo "=== Fixing Git Push ==="

# 1. Set correct git identity
git config user.name "changkasing1"
git config user.email "changkasing1@gmail.com"

# 2. Fetch remote changes
echo "Fetching remote changes..."
git fetch origin main

# 3. Reset to origin/main (discarding local commits)
echo "Resetting to origin/main..."
git reset --hard origin/main

# 4. Apply our changes
echo "Applying changes..."
cat > vercel.json << 'EOF'
{
  "rewrites": [
    { "source": "/(.*)", "destination": "/index.html" }
  ]
}
EOF

# 5. Stage and commit
git add vercel.json
git commit -m "fix: simplify vercel.json for static deployment"

# 6. Push to GitHub
echo "Pushing to GitHub..."
git push origin main

echo "=== Done! ==="
