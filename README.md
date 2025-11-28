# Saada Store (Car Parts)

This repository contains the Saada Store single-page app built with React and Vite. The project is configured for zero-cost hosting with simple steps for Netlify (drag-and-drop) and GitHub Pages.

## Prerequisites
- Node.js 18+ and npm installed locally.

## Local Development
1. Install dependencies:
   ```bash
   npm install
   ```
2. Start the dev server:
   ```bash
   npm run dev
   ```

## Build
Create an optimized production bundle in `dist/`:
```bash
npm run build
```

## Free Deployment Options
The app is an SPA with client-side routing. The repository includes:
- `public/_redirects` to give Netlify a 200 fallback for all routes.
- `vite.config.js` with a relative base path so the build works when hosted from a subdirectory (e.g., GitHub Pages).

### Option A: Netlify (fastest — drag & drop)
1. Run a production build locally:
   ```bash
   npm install
   npm run build
   ```
2. Go to [https://app.netlify.com/drop](https://app.netlify.com/drop) (requires a free Netlify account).
3. Drag the entire `dist/` folder into the upload target. Netlify will provision a free site URL automatically.

### Option B: GitHub Pages (host from the `docs/` folder)
1. Push this repository to GitHub.
2. Build locally:
   ```bash
   npm install
   npm run build
   ```
3. Replace any existing `docs/` folder with the build output and copy the SPA fallback:
   ```bash
   rm -rf docs
   cp -r dist docs
   cp docs/index.html docs/404.html
   git add docs
   git commit -m "Build for GitHub Pages"
   git push
   ```
4. In your GitHub repo, open **Settings → Pages**, set **Source** to **Deploy from a branch**, choose **main** and **/docs**. Save. GitHub will serve the site at `https://<username>.github.io/<repo>/`.

### Option C: Vercel (connect repository)
1. Push the repo to GitHub/GitLab/Bitbucket.
2. Import it at [https://vercel.com/new](https://vercel.com/new) and keep defaults:
   - Framework: **Vite**
   - Build Command: `npm run build`
   - Output Directory: `dist`
3. Deploy. Vercel will give you a free domain, and the relative asset paths allow subpath hosting if you later add a custom domain.

### Route Handling Notes
- Netlify: `_redirects` already ensures every path serves `index.html` with status 200.
- GitHub Pages: copying `index.html` to `404.html` in `docs/` is necessary so client-side routes reload correctly.
- Vercel: SPA routing works out of the box.

## Preview a Production Build Locally
After `npm run build`, you can preview the output on your machine:
```bash
npm run preview
```

## Environment Variables
No environment variables are required for production by default. If you add any, create a `.env` file (already gitignored) and restart the dev server after changes.
