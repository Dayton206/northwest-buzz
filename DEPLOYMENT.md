# How to Launch Your Website Live

The easiest and most professional way to host modern React websites like this one is **Vercel**. It is free for personal/hobby use, extremely fast, and handles SSL (the lock icon) automatically.

## Step 1: Push Your Code to GitHub
You need your code in a repository to deploy it easily.

1. Create a GitHub account at [github.com](https://github.com) if you don't have one.
2. Create a **New Repository**. Name it `northwest-buzz`.
3. Open your terminal in this project folder and run:
   ```bash
   git init
   git add .
   git commit -m "Initial launch"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/northwest-buzz.git
   git push -u origin main
   ```
   *(Replace `YOUR_USERNAME` with your actual GitHub username)*

## Step 2: Deploy to Vercel
1. Go to [vercel.com](https://vercel.com) and sign up/login (continue with GitHub).
2. Click **"Add New..."** -> **"Project"**.
3. You will see your `northwest-buzz` repository. Click **"Import"**.
4. **Framework Preset**: It should automatically detect `Vite`. If not, select it.
5. Click **"Deploy"**.
6. Wait about 1 minute. Your site is now live at a `.vercel.app` URL!

## Step 3: Connect Your Custom Domain
1. In your Vercel project dashboard, go to **Settings** -> **Domains**.
2. Enter your domain name (e.g., `northwestbuzz.com`) and click **Add**.
3. Vercel will give you two records to add to your domains DNS (wherever you bought the domain, like GoDaddy, Namecheap, or Google Domains):
   - **Type**: `A` | **Name**: `@` | **Value**: `76.76.21.21`
   - **Type**: `CNAME` | **Name**: `www` | **Value**: `cname.vercel-dns.com`
4. Add these records in your domain registrar's DNS settings.
5. Wait up to 24 hours (usually takes 5-15 mins). Vercel will automatically generate an SSL certificate.

## Step 4: Updates
Whenever you want to update the site:
1. Make changes in your code.
2. Run `git add .`, `git commit -m "update"`, and `git push`.
3. Vercel detects the push and **automatically re-deploys** your live site in seconds.
