# Kenyon Smith — Portfolio Site

A CV-style portfolio where hovering a project previews its image as the page
background, and clicking opens the project page. Built with Astro + TinaCMS.

## Going live — one-time setup (~30 min)

### 1. Put the code on GitHub
1. Go to github.com → click **+** (top right) → **New repository**
2. Name it `portfolio`, keep it **Public**, do NOT add a README → **Create repository**
3. On the next page click **uploading an existing file**
4. Drag ALL the files and folders from this project folder into the upload area
   (everything: src, public, tina, package.json, etc.)
5. Click **Commit changes**

### 2. Host it on Netlify (free)
1. Go to netlify.com → sign up **with GitHub**
2. **Add new site → Import an existing project → GitHub** → pick your `portfolio` repo
3. Build settings are detected automatically from `netlify.toml` → click **Deploy**
4. Two minutes later your site is live at `something.netlify.app`
   (rename it under Site settings → Domain management)

### 3. Enable visual editing with Tina Cloud (free)
1. Go to app.tina.io → sign up **with GitHub**
2. **New Project → Import your site** → pick your `portfolio` repo, branch `main`
3. Copy the **Client ID** (Overview page) and create a **Content Token**
   (Tokens page → New token → read/write)
4. In Netlify: **Site settings → Environment variables** → add:
   - `TINA_CLIENT_ID` = your Client ID
   - `TINA_TOKEN` = your token
5. In Netlify: **Site settings → Build & deploy → Build command** →
   change `npm run build` to `npm run build:cms`
6. **Deploys → Trigger deploy**

### 4. Edit your site
Open `yoursite.netlify.app/admin` — log in with GitHub. From there:
- **Projects**: add/edit projects — title, year, venue, main image (the hover
  background), gallery images with captions, and the description
- **Site Settings**: your name, bio, links, colors, the background pattern
  word or image, education, awards, footer
Saving publishes automatically; changes are live in ~1 minute.

## Local development (optional)
```
npm install
npm run dev        # site at localhost:4321, editor at localhost:4321/admin
```
