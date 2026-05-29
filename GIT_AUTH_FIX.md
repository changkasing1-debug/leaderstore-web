# Git Authentication Fix

## Problem
GitHub requires a **Personal Access Token (PAT)** instead of passwords for HTTPS authentication.

## Solution

### Step 1: Generate a Personal Access Token on GitHub
1. Go to https://github.com/settings/tokens
2. Click "Generate new token (classic)"
3. Select scopes:
   - **repo** (required for pushing to repositories)
4. Click "Generate token"
5. **Copy the token** (you won't see it again)

### Step 2: Configure Git to use the token
```bash
# Set the remote URL with your token
git remote set-url origin https://TOKEN_AQUI@github.com/changkasing1-debug/leaderstore-web.git

# Replace TOKEN_AQUI with your actual token

# Then push normally
git push origin main
```

### Alternative: Use SSH (more secure)
```bash
# Generate SSH key
ssh-keygen -t ed25519 -C "changkasing1@gmail.com"

# Add the public key to GitHub
# Go to https://github.com/settings/keys
# Click "New SSH key"
# Paste the content of ~/.ssh/id_ed25519.pub

# Change remote URL to SSH
git remote set-url origin git@github.com:changkasing1-debug/leaderstore-web.git

# Push
git push origin main
```

## Current Status
- `vercel.json` is ready (minimal config)
- GitHub Actions workflow is still there (can be ignored for now)
- 4 commits are ready to push to GitHub
