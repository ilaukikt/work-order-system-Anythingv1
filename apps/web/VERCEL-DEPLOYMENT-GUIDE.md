# Vercel Deployment Guide

This guide will help you deploy your Work Order System to Vercel in just a few minutes.

## Prerequisites

- A Vercel account (free tier works fine)
- Your GitHub repository: https://github.com/ilaukikt/work-order-system-Anythingv1.git

## Step 1: Push Your Code to GitHub

Make sure all your latest changes are committed and pushed to GitHub:

```bash
git add .
git commit -m "Add Vercel deployment configuration"
git push origin main
```

## Step 2: Import Project to Vercel

1. Go to https://vercel.com/new
2. Click "Import Git Repository"
3. Select your repository: `ilaukikt/work-order-system-Anythingv1`
4. Vercel will detect it automatically

## Step 3: Configure the Project

When Vercel asks for configuration:

### Root Directory
Set to: `apps/web`

### Build Settings
- **Framework Preset**: Other
- **Build Command**: `npm run build`
- **Output Directory**: `build/client`
- **Install Command**: `npm ci --legacy-peer-deps`

## Step 4: Add Environment Variables

In the Vercel project settings, add these environment variables:

```
VITE_SUPABASE_URL=https://dboqykyyyuoyekzdhxlm.supabase.co
VITE_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRib3F5a3l5eXVveWVremRoeGxtIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjE3MjAyODEsImV4cCI6MjA3NzI5NjI4MX0.BnRCh3sJqoZY9eU713lMLQVgFLdElbSnVFb57oDRVac
DATABASE_URL=postgresql://postgres:postgres@db.dboqykyyyuoyekzdhxlm.supabase.co:5432/postgres
```

**Important**: The duplicate `VITE_SUPABASE_SUPABASE_ANON_KEY` in your .env file appears to be a typo. Use the correct one above.

### How to Add Environment Variables in Vercel:

1. In your Vercel project dashboard, click on **Settings**
2. Click on **Environment Variables** in the left sidebar
3. Add each variable one by one:
   - Enter the **Key** (e.g., `VITE_SUPABASE_URL`)
   - Enter the **Value** (e.g., `https://dboqykyyyuoyekzdhxlm.supabase.co`)
   - Select all environments: **Production**, **Preview**, and **Development**
   - Click **Save**

## Step 5: Deploy

1. Click **Deploy** button
2. Wait 2-5 minutes for the build to complete
3. Vercel will give you a live URL like: `https://your-project-name.vercel.app`

## Step 6: Verify Deployment

Once deployed, visit your Vercel URL and check:

- ✅ Home page loads
- ✅ Navigation works
- ✅ Database connection works (try viewing work orders)
- ✅ All features function correctly

## Automatic Deployments

From now on:
- Every push to `main` branch = automatic production deployment
- Every pull request = automatic preview deployment
- You get a unique URL for each deployment

## Troubleshooting

### Build Fails

**Check the build logs** in Vercel dashboard. Common issues:

1. **Missing environment variables**: Make sure all 3 variables are set
2. **Install fails**: The command uses `--legacy-peer-deps` to handle dependency conflicts
3. **TypeScript errors**: Run `npm run typecheck` locally first to catch errors

### App Deploys But Shows Errors

1. **Check browser console** for errors
2. **Verify environment variables** are set correctly in Vercel
3. **Check Supabase connection**: Make sure your Supabase project is active

### Database Connection Issues

If you see database errors:
1. Verify `VITE_SUPABASE_URL` is correct
2. Verify `VITE_SUPABASE_ANON_KEY` is correct
3. Check your Supabase project is not paused (free tier pauses after inactivity)

## Alternative: Deploy via Vercel CLI

If you prefer command line:

```bash
# Install Vercel CLI
npm i -g vercel

# Navigate to your project
cd apps/web

# Deploy
vercel

# Follow the prompts and it will deploy
```

## What You Get

✅ **Live URL** that works 24/7
✅ **Automatic SSL** certificate (https)
✅ **CDN** for fast loading worldwide
✅ **Auto-deploys** on every git push
✅ **Preview URLs** for every pull request
✅ **Analytics** to see traffic and performance

## Cost

**Free tier includes:**
- Unlimited personal projects
- 100GB bandwidth per month
- Automatic HTTPS
- Global CDN

This should be more than enough for development and testing.

## Next Steps

After successful deployment:
1. Test all features on the live URL
2. Share the URL with your team
3. Set up custom domain (optional)
4. Continue development - every push auto-deploys

## Support

- Vercel Docs: https://vercel.com/docs
- Vercel Support: https://vercel.com/support
- Check deployment logs in Vercel dashboard for issues

---

**Your application is ready to deploy!** Just follow the steps above and you'll have a live URL in minutes.
