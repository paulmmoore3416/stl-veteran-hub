#!/bin/bash

# ============================================
# St. Louis Veteran Resource Hub
# GitHub Pages Deployment Script
# For: Paul Moore (paulmmoore3416)
# ============================================

echo "================================================"
echo "St. Louis Veteran Resource Hub - Deployment"
echo "================================================"
echo ""

# Check if git is installed
if ! command -v git &> /dev/null; then
    echo "ERROR: Git is not installed."
    echo "Install with: sudo apt-get install git"
    exit 1
fi

# Navigate to project directory
cd /home/paul/Documents/Articles/veteran-resource-hub || exit 1

echo "Step 1: Initializing Git repository..."
git init

echo ""
echo "Step 2: Adding all files..."
git add .

echo ""
echo "Step 3: Creating initial commit..."
git commit -m "Initial deployment: St. Louis Veteran Resource Hub by Paul Moore"

echo ""
echo "Step 4: Renaming branch to main..."
git branch -M main

echo ""
echo "Step 5: Adding remote repository..."
git remote add origin https://github.com/paulmmoore3416/stl-veteran-hub.git

echo ""
echo "================================================"
echo "ALMOST DONE!"
echo "================================================"
echo ""
echo "Next steps:"
echo ""
echo "1. Go to GitHub and create a new repository:"
echo "   https://github.com/new"
echo ""
echo "2. Repository settings:"
echo "   - Name: stl-veteran-hub"
echo "   - Description: St. Louis Veteran Resource Hub - Comprehensive resources for veterans in need"
echo "   - Public (so veterans can access it)"
echo "   - DO NOT initialize with README (we have our own files)"
echo ""
echo "3. After creating the repository, come back here and press ENTER to continue..."
read -r

echo ""
echo "Step 6: Pushing to GitHub..."
git push -u origin main

echo ""
echo "================================================"
echo "SUCCESS! Files uploaded to GitHub"
echo "================================================"
echo ""
echo "Final step: Enable GitHub Pages"
echo ""
echo "1. Go to: https://github.com/paulmmoore3416/stl-veteran-hub/settings/pages"
echo "2. Under 'Source', select 'main' branch"
echo "3. Click 'Save'"
echo "4. Wait 1-2 minutes"
echo ""
echo "Your site will be live at:"
echo "https://paulmmoore3416.github.io/stl-veteran-hub/"
echo ""
echo "================================================"
echo "Share this URL with veterans who need help!"
echo "================================================"