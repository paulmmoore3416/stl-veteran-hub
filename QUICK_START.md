# QUICK START - Deploy in 5 Minutes

## Your Information
- **GitHub Username:** paulmmoore3416
- **Repository Name:** stl-veteran-hub
- **Final URL:** https://paulmmoore3416.github.io/stl-veteran-hub/

---

## Step 1: First-Time Git Setup (30 seconds)

Open terminal and run these commands (replace with your email):

```bash
git config --global user.name "Paul Moore"
git config --global user.email "your-email@example.com"
```

---

## Step 2: Create GitHub Repository (2 minutes)

1. **Go to:** https://github.com/new
2. **Login** with username: paulmmoore3416
3. **Fill in:**
   - Repository name: `stl-veteran-hub`
   - Description: `St. Louis Veteran Resource Hub - Help for veterans in need`
   - Make it **Public** ✓
   - **DO NOT** check any boxes (no README, no .gitignore, no license)
4. **Click:** "Create repository"

---

## Step 3: Deploy Your Files (2 minutes)

Copy and paste this entire block into your terminal:

```bash
cd /home/paul/Documents/Articles/veteran-resource-hub && \
git init && \
git add . && \
git commit -m "Initial deployment: St. Louis Veteran Resource Hub" && \
git branch -M main && \
git remote add origin https://github.com/paulmmoore3416/stl-veteran-hub.git && \
git push -u origin main
```

**You'll be asked for:**
- Username: `paulmmoore3416`
- Password: Your GitHub password (or personal access token)

---

## Step 4: Enable GitHub Pages (1 minute)

1. **Go to:** https://github.com/paulmmoore3416/stl-veteran-hub/settings/pages
2. Under "Source":
   - Select branch: **main**
   - Keep folder: **/ (root)**
3. **Click:** "Save"
4. **Wait** 1-2 minutes

---

## Step 5: Test Your Site

**Your site is live at:**
# https://paulmmoore3416.github.io/stl-veteran-hub/

Click the link to verify it works!

---

## Common Issues

### Problem: Need Personal Access Token Instead of Password

GitHub now requires tokens for command line access.

**Quick Fix:**
1. Go to: https://github.com/settings/tokens
2. Click: "Generate new token (classic)"
3. Name it: "Veteran Hub"
4. Check: ☑ repo (full repo access)
5. Click: "Generate token"
6. **Copy the token** (you won't see it again!)
7. Use this token instead of your password when pushing

### Problem: Repository Already Exists

If you already created the repo but it failed:

```bash
cd /home/paul/Documents/Articles/veteran-resource-hub
git remote remove origin
git remote add origin https://github.com/paulmmoore3416/stl-veteran-hub.git
git push -u origin main
```

---

## That's It!

Your veteran resource hub is now live and accessible to anyone in the world.

**Share this URL:**
https://paulmmoore3416.github.io/stl-veteran-hub/

---

## Need Help?

Full detailed guide: [GITHUB_DEPLOYMENT_STEPS.md](GITHUB_DEPLOYMENT_STEPS.md)

---

**Mission Status: Ready to Execute**

*Deploy it and start helping veterans, Marine.*