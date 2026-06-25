# whisp.

A self-destructing message landing page. Built with vanilla HTML, CSS, and JS. No dependencies, no build step needed.

## 🚀 Deploy for free on GitHub Pages

### Step 1 — Create a GitHub account
Go to [github.com](https://github.com) and sign up (free).

### Step 2 — Create a new repository
1. Click the **+** icon → "New repository"
2. Name it exactly: `whisp` (or anything you like)
3. Set it to **Public**
4. Click **Create repository**

### Step 3 — Upload the files
**Option A — via GitHub website (easiest):**
1. Open your new repository
2. Click "uploading an existing file"
3. Drag all files from this folder into the window
4. Make sure the folder structure is preserved:
   ```
   index.html
   css/style.css
   js/main.js
   .github/workflows/deploy.yml
   ```
5. Click "Commit changes"

**Option B — via Git (if you have Git installed):**
```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/whisp.git
git push -u origin main
```

### Step 4 — Enable GitHub Pages
1. Go to your repository → **Settings** → **Pages**
2. Under "Source", select **GitHub Actions**
3. The workflow will run automatically and deploy your site
4. Your site will be live at: `https://YOUR_USERNAME.github.io/whisp/`

---

## 🌐 Want a custom domain? (still free)
You can use a free subdomain from services like:
- **Cloudflare Pages** — connect your GitHub repo, instant deploy at `yourname.pages.dev`
- **Netlify** — drag & drop deploy at `yourname.netlify.app`
- **Vercel** — same, at `yourname.vercel.app`

All of these are completely free for static sites.

---

## 📁 File structure
```
whisp/
├── index.html              # Main page
├── css/
│   └── style.css           # All styles
├── js/
│   └── main.js             # Scroll reveal + demo countdown
└── .github/
    └── workflows/
        └── deploy.yml      # Auto-deploy to GitHub Pages
```
