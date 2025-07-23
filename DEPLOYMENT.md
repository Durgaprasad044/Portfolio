# Deployment Guide

## Vercel Deployment

Your portfolio is now properly configured for Vercel deployment. Here's what was fixed:

### Files Added/Modified:

1. **vercel.json** - Vercel configuration file
2. **index.html** - Fixed malformed HTML and updated meta tags
3. **Build configuration** - Verified Vite build works correctly

### Deployment Steps:

1. **Push to GitHub:**
   ```bash
   git add .
   git commit -m "Fix Vercel deployment configuration"
   git push origin main
   ```

2. **Deploy on Vercel:**
   - Go to [vercel.com](https://vercel.com)
   - Import your GitHub repository
   - Vercel will automatically detect the configuration from `vercel.json`
   - The build command will be: `npm run build`
   - The output directory will be: `dist`

### Configuration Details:

- **Framework:** Vite (React + TypeScript)
- **Build Command:** `npm run build`
- **Output Directory:** `dist`
- **Dev Command:** `npm run dev`

### Troubleshooting:

If you still get 404 errors:

1. **Check Build Logs:** Make sure the build completes successfully
2. **Verify Output:** Ensure the `dist` folder contains `index.html`
3. **Check Routes:** The `vercel.json` includes rewrites for SPA routing

### Alternative: Manual Build Upload

If automatic deployment fails, you can manually upload the built files:

1. Run `npm run build` locally
2. Upload the contents of the `dist` folder to Vercel
3. Set the root directory to the uploaded folder

### Local Testing:

To test the built version locally:
```bash
npm run build
npm run preview
```

This will serve the production build locally for testing.