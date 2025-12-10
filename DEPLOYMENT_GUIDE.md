# Deployment Guide - St. Louis Veteran Resource Hub

Quick guide to get your veteran resource hub online and accessible to veterans who need it.

---

## Option 1: GitHub Pages (Recommended - FREE)

**Best for:** Free hosting, easy updates, professional URL

### Steps:

1. **Create GitHub account** (if you don't have one)
   - Go to github.com
   - Sign up for free

2. **Create new repository**
   - Click "New Repository"
   - Name it: `stl-veteran-hub` (or your choice)
   - Make it Public
   - Don't initialize with README (we have our own files)

3. **Upload files via web interface**
   - Click "uploading an existing file"
   - Drag and drop all files from the `veteran-resource-hub` folder
   - Commit changes

4. **Enable GitHub Pages**
   - Go to repository Settings
   - Scroll to "Pages" section
   - Under "Source", select "main" branch
   - Click Save
   - Wait 1-2 minutes

5. **Your site is live!**
   - URL will be: `https://YOUR-USERNAME.github.io/stl-veteran-hub/`
   - Share this URL with veterans

### Alternative: Command Line (if you're comfortable)

```bash
cd /home/paul/Documents/Articles/veteran-resource-hub

# Initialize git repository
git init

# Add all files
git add .

# Commit files
git commit -m "Initial commit: St. Louis Veteran Resource Hub"

# Add remote repository (replace with your repo URL)
git remote add origin https://github.com/YOUR-USERNAME/stl-veteran-hub.git

# Push to GitHub
git branch -M main
git push -u origin main
```

Then enable GitHub Pages in Settings as described above.

---

## Option 2: Netlify (FREE - Drag & Drop)

**Best for:** Easiest deployment, custom domain options

### Steps:

1. **Go to Netlify**
   - Visit netlify.com
   - Sign up for free (use GitHub account or email)

2. **Drag & Drop**
   - Click "Add new site" → "Deploy manually"
   - Drag the entire `veteran-resource-hub` folder onto the page
   - Wait 30 seconds for deployment

3. **Your site is live!**
   - Netlify gives you a URL like: `random-name-12345.netlify.app`
   - Can change to custom name in Settings
   - Can add custom domain (like `stlveterans.org`)

4. **Bonus: Netlify auto-updates**
   - Connect to GitHub for automatic updates when you change files

---

## Option 3: Vercel (FREE)

**Best for:** Fast deployment, good for developers

### Steps:

1. **Go to Vercel**
   - Visit vercel.com
   - Sign up with GitHub

2. **Import repository**
   - Click "New Project"
   - Import from GitHub
   - Select your repository
   - Click "Deploy"

3. **Live in 30 seconds**
   - URL: `your-project.vercel.app`
   - Can add custom domain

---

## Option 4: Traditional Web Hosting

**Best for:** If you already have hosting or want full control

### Requirements:
- Web hosting account (GoDaddy, Bluehost, HostGator, etc.)
- FTP access or file manager

### Steps:

1. **Upload files via FTP or File Manager**
   - Upload all files to `public_html` or `www` directory
   - Keep folder structure intact

2. **Access your site**
   - If domain is `example.com`, site is live at `example.com`
   - Or in a subdirectory: `example.com/veterans/`

3. **Set index.html as default page**
   - Most hosts do this automatically
   - If not, configure in .htaccess or hosting settings

---

## Option 5: Local/USB Distribution

**Best for:** Veterans without internet access

### Steps:

1. **Copy entire folder to USB drive**
   - Include all files: HTML, CSS, JS, MD files

2. **Create simple instructions**
   - Write on paper or text file: "Open index.html in any web browser"

3. **Distribute**
   - Hand out at VA centers
   - Give to homeless veterans
   - Share at veteran events
   - Mail to veterans in need

4. **Works offline**
   - All features work without internet
   - Crisis numbers still need phone service to call

---

## Custom Domain Setup

### Want your own domain like `stlveterans.org`?

1. **Buy domain**
   - Namecheap, GoDaddy, Google Domains ($10-15/year)
   - Look for `.org` for nonprofit feel
   - Or `.com` for general use

2. **Point domain to your hosting**
   - **GitHub Pages:** Follow GitHub's custom domain guide
   - **Netlify/Vercel:** Add domain in dashboard settings
   - **Traditional hosting:** Update nameservers to your host

3. **Add SSL certificate**
   - GitHub Pages: Automatic
   - Netlify/Vercel: Automatic
   - Traditional: Usually free with Let's Encrypt

---

## Making Updates

### After initial deployment:

**GitHub Pages:**
- Edit files locally
- Commit and push changes
- Site updates automatically

**Netlify:**
- Connect to GitHub for auto-deployment
- Or drag & drop updated files

**Vercel:**
- Pushes to GitHub auto-deploy
- Or use Vercel CLI

**Traditional hosting:**
- Upload changed files via FTP
- Overwrite old versions

---

## Marketing Your Resource Hub

### Get the word out:

1. **Social Media**
   - Share on Facebook, Twitter, LinkedIn
   - Post in veteran Facebook groups
   - Use hashtags: #Veterans #PTSD #StLouis #VeteranResources

2. **Veteran Organizations**
   - Email to VFW posts
   - Share with American Legion
   - Contact Team Rubicon, Mission Continues
   - Send to VA St. Louis

3. **Print Materials**
   - Print Quick Reference guide
   - Distribute at VA medical centers
   - Leave at veteran service organizations
   - Hand out at veteran events

4. **Email Lists**
   - Send to veteran email lists
   - Share with state veterans commission
   - Contact county veteran services

5. **Word of Mouth**
   - Tell veterans you know
   - Share in support groups
   - Mention at therapy sessions
   - Tell your VSO (Veterans Service Officer)

---

## Monitoring & Maintenance

### Keep your hub current:

**Monthly:**
- Check for broken links
- Verify phone numbers still work

**Quarterly:**
- Call resources to verify information
- Add any new veteran organizations
- Update any changed addresses

**Annually:**
- Complete resource audit
- Update statistics
- Refresh design if needed

---

## Analytics (Optional)

### Track usage to improve:

**Free options:**
- Google Analytics
- Netlify Analytics
- Vercel Analytics

**Why track:**
- See which resources are most used
- Understand what veterans need
- Improve based on data
- Show impact to funders/supporters

---

## Legal Considerations

### Disclaimer:
- Site includes disclaimer that you're not VA-affiliated
- Resources are provided "as-is"
- Encourages verification of current information
- Emergency resources emphasized

### Privacy:
- No personal data collected
- No login required
- No cookies (except analytics if you add it)
- Safe for veterans to use anonymously

---

## Backup Your Work

### Always maintain backups:

1. **Local backup**
   - Keep original files on your computer
   - Backup to external drive

2. **Cloud backup**
   - GitHub serves as backup
   - Also save to Dropbox/Google Drive

3. **Version control**
   - Git automatically tracks changes
   - Can revert to previous versions

---

## Getting Help

### If you need assistance:

**Technical issues:**
- GitHub Pages: docs.github.com
- Netlify: netlify.com/support
- Web development: stackoverflow.com

**Veteran organizations to partner with:**
- Contact local VFW or American Legion
- Reach out to state veterans commission
- Email veteran service organizations

---

## Success Metrics

### How to know you're making a difference:

- Veterans accessing the site
- Phone calls/clicks to crisis resources
- Feedback from veterans helped
- Organizations linking to your hub
- Veterans sharing with other veterans

---

## Next Steps After Deployment

1. ✅ Deploy to hosting platform
2. ✅ Test all links and phone numbers
3. ✅ Share URL on social media
4. ✅ Contact veteran organizations
5. ✅ Print quick reference guides
6. ✅ Set reminder to update quarterly
7. ✅ Monitor feedback and improve

---

**Remember: Every veteran who finds help through this hub is a mission accomplished.**

*Deploy it. Share it. Save lives.*

**- Paul Moore, USMC Combat Veteran**

---

## Quick Start Commands

### If using GitHub Pages via command line:

```bash
# Navigate to project folder
cd /home/paul/Documents/Articles/veteran-resource-hub

# Initialize and deploy
git init
git add .
git commit -m "St. Louis Veteran Resource Hub - Initial deployment"
git branch -M main
git remote add origin https://github.com/YOUR-USERNAME/stl-veteran-hub.git
git push -u origin main

# Then enable GitHub Pages in repository settings
```

### File structure you're deploying:
```
veteran-resource-hub/
├── index.html
├── styles.css
├── script.js
├── README.md
├── QUICK_REFERENCE.md
├── DEPLOYMENT_GUIDE.md
└── ../Veteran_Recovery_Manual.md
```

**All files must be uploaded for full functionality.**

---

*Semper Fi. Now get this mission accomplished.*