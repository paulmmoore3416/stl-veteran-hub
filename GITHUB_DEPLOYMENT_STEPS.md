# GitHub Pages Deployment - Step by Step

**Your GitHub Username:** paulmmoore3416
**Repository Name:** stl-veteran-hub
**Final URL:** https://paulmmoore3416.github.io/stl-veteran-hub/

---

## Quick Deploy (Automated Script)

### Option A: Use the Automated Script

```bash
cd /home/paul/Documents/Articles/veteran-resource-hub
./DEPLOY_NOW.sh
```

The script will guide you through each step.

---

## Manual Deploy (If You Prefer)

### Step 1: Create GitHub Repository

1. **Go to GitHub and log in:**
   - Visit: https://github.com/login
   - Username: paulmmoore3416
   - Enter your password

2. **Create new repository:**
   - Click the "+" icon in top right
   - Select "New repository"
   - OR go directly to: https://github.com/new

3. **Repository settings:**
   ```
   Repository name: stl-veteran-hub
   Description: St. Louis Veteran Resource Hub - Comprehensive resources for veterans in need
   Visibility: Public ✓ (so veterans can access it)

   DO NOT CHECK:
   ☐ Add a README file
   ☐ Add .gitignore
   ☐ Choose a license
   ```

4. **Click "Create repository"**

---

### Step 2: Deploy Your Files

Open a terminal and run these commands **exactly as shown:**

```bash
# Navigate to your project folder
cd /home/paul/Documents/Articles/veteran-resource-hub

# Initialize git repository
git init

# Configure git (if you haven't already)
git config --global user.name "Paul Moore"
git config --global user.email "your-email@example.com"

# Add all files
git add .

# Create initial commit
git commit -m "Initial deployment: St. Louis Veteran Resource Hub"

# Rename branch to main
git branch -M main

# Add your GitHub repository as remote
git remote add origin https://github.com/paulmmoore3416/stl-veteran-hub.git

# Push files to GitHub
git push -u origin main
```

**Note:** You'll be prompted for your GitHub username and password (or personal access token).

---

### Step 3: Enable GitHub Pages

1. **Go to repository settings:**
   - Visit: https://github.com/paulmmoore3416/stl-veteran-hub/settings/pages
   - OR: Go to your repository → Click "Settings" tab → Click "Pages" in left sidebar

2. **Configure GitHub Pages:**
   - Under "Source" section
   - Select branch: **main**
   - Select folder: **/ (root)**
   - Click **Save**

3. **Wait 1-2 minutes for deployment**
   - GitHub will build and deploy your site
   - A blue banner will appear saying "Your site is ready to be published"
   - Refresh the page after a minute

4. **Your site is live!**
   - URL: **https://paulmmoore3416.github.io/stl-veteran-hub/**
   - Test it by clicking the link

---

## Verification Steps

After deployment, verify everything works:

- [ ] Visit https://paulmmoore3416.github.io/stl-veteran-hub/
- [ ] Check if the page loads correctly
- [ ] Click the crisis banner links (988 should work)
- [ ] Test the search functionality
- [ ] Try the category filters
- [ ] Click a few resource phone numbers (should open phone app)
- [ ] Test on your phone
- [ ] Share the link with one person to verify external access

---

## Troubleshooting

### Problem: "Permission denied (publickey)"

**Solution:** Use personal access token instead of password

1. Go to: https://github.com/settings/tokens
2. Click "Generate new token (classic)"
3. Give it a name: "Veteran Hub Deployment"
4. Check: ☑ repo
5. Click "Generate token"
6. Copy the token (you won't see it again!)
7. Use token as password when pushing

### Problem: "Repository already exists"

**Solution:**
```bash
cd /home/paul/Documents/Articles/veteran-resource-hub
git remote remove origin
git remote add origin https://github.com/paulmmoore3416/stl-veteran-hub.git
git push -u origin main
```

### Problem: "fatal: not a git repository"

**Solution:**
```bash
cd /home/paul/Documents/Articles/veteran-resource-hub
git init
# Then continue with the deployment commands
```

### Problem: Files pushed but site shows 404

**Solution:**
- Make sure GitHub Pages is enabled (Step 3)
- Check that "main" branch is selected
- Wait 2-3 minutes for GitHub to build the site
- Hard refresh your browser (Ctrl+Shift+R)

### Problem: CSS/JavaScript not loading

**Solution:** This shouldn't happen with our setup, but if it does:
- Check that all files are in the same directory
- Verify files were all pushed: https://github.com/paulmmoore3416/stl-veteran-hub
- Clear browser cache

---

## Making Updates Later

When you want to update the site:

```bash
cd /home/paul/Documents/Articles/veteran-resource-hub

# Make your changes to the files
# Then:

git add .
git commit -m "Update: description of what you changed"
git push

# Wait 1-2 minutes for GitHub to rebuild the site
```

---

## Custom Domain (Optional)

Want to use your own domain like `stlveterans.org`?

1. **Buy a domain** ($10-15/year)
   - Namecheap, Google Domains, or GoDaddy

2. **Configure DNS:**
   - Add these A records:
     ```
     185.199.108.153
     185.199.109.153
     185.199.110.153
     185.199.111.153
     ```
   - Add CNAME record:
     ```
     www → paulmmoore3416.github.io
     ```

3. **Update GitHub Pages:**
   - Go to Settings → Pages
   - Under "Custom domain" enter your domain
   - Check "Enforce HTTPS"
   - Wait for DNS to propagate (up to 24 hours)

---

## Sharing Your Site

Once live, share with:

### Veteran Organizations:
- VFW Posts
- American Legion
- Team Rubicon
- Mission Continues
- VA St. Louis
- State Veterans Commission

### Social Media:
```
🇺🇸 St. Louis Veteran Resource Hub 🇺🇸

Comprehensive veteran resources for the St. Louis area:
✓ Crisis support (24/7)
✓ Housing assistance
✓ Mental health services
✓ Employment help
✓ VA benefits
✓ 80+ verified resources

https://paulmmoore3416.github.io/stl-veteran-hub/

#Veterans #PTSD #StLouis #VeteranResources
```

### Email to Organizations:
```
Subject: New St. Louis Veteran Resource Hub

Hello,

I'm Paul Moore, a Marine Corps combat veteran who has created a
comprehensive online resource hub for veterans in the St. Louis area.

The hub provides centralized access to 80+ veteran resources including:
- Crisis intervention (24/7)
- Housing and homeless services
- Mental health and PTSD treatment
- Employment and career services
- VA benefits assistance
- And much more

All resources are within 50 miles of St. Louis and have been verified.

Website: https://paulmmoore3416.github.io/stl-veteran-hub/

This is a free resource for any veteran in need. Please share with
veterans in your network.

Semper Fi,
Paul Moore
USMC Combat Veteran
```

---

## Site Statistics (Optional)

Want to track how many veterans use your site?

### Add Google Analytics:

1. Create account: https://analytics.google.com
2. Get tracking code
3. Add to `index.html` before `</head>` tag:
```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=YOUR-ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'YOUR-ID');
</script>
```
4. Push update to GitHub

---

## Security Notes

✓ No sensitive data is collected
✓ No user login required
✓ All external links open in new tabs
✓ HTTPS automatically enabled by GitHub
✓ No cookies (privacy-friendly)
✓ Safe for veterans to use anonymously

---

## Success Metrics

Track these to measure impact:

- Number of site visits (Google Analytics)
- Crisis line clicks
- Resource phone number clicks
- Manual downloads
- Social media shares
- Feedback from veterans
- Organizations linking to your hub

---

## Support

**GitHub Docs:** https://docs.github.com/pages
**Questions:** GitHub has great documentation and community support

**Remember:** Every veteran who finds help through this site is a mission accomplished.

---

**Your Final URL (Share This):**
# https://paulmmoore3416.github.io/stl-veteran-hub/

---

**Created by:** Paul Moore, USMC Combat Veteran
**Mission:** Help veterans find the resources they need
**Status:** Ready to deploy

*Semper Fi. Let's get this online and start helping veterans.*