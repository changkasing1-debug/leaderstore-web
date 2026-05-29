#!/bin/bash
# Simple deploy script - deploy static site to Vercel
# Usage: ./deploy.sh

set -e

echo "=== Deploying Leader Store to Vercel ==="

# Check if vercel CLI is installed
if ! command -v npx &> /dev/null; then
    echo "Installing vercel CLI..."
    npm install -g vercel
fi

# Deploy to Vercel (production)
echo "Deploying to Vercel..."
npx vercel --prod --yes

echo "=== Deploy complete! ==="
