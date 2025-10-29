# Vercel Production Deployment Guide

## ✅ Your Setup is Ready for Production!

All the necessary files are in place:
- ✅ `/api/subscribe.ts` - Serverless function
- ✅ `vercel.json` - Routing configuration
- ✅ Vite build configuration

## Step-by-Step Deployment

### 1. Add Environment Variables to Vercel

#### Via Vercel Dashboard:

1. Go to [Vercel Dashboard](https://vercel.com/dashboard)
2. Select your project: `proto-sparkle-page`
3. Go to **Settings** → **Environment Variables**
4. Add these three variables:

**Variable 1:**
- **Name**: `MAILCHIMP_API_KEY`
- **Value**: Your full API key (e.g., `abc123def456-us14`)
- **Environment**: Production, Preview, Development (select all)

**Variable 2:**
- **Name**: `MAILCHIMP_AUDIENCE_ID`
- **Value**: Your audience ID
- **Environment**: Production, Preview, Development (select all)

**Variable 3:**
- **Name**: `MAILCHIMP_SERVER_PREFIX`
- **Value**: Your server prefix (e.g., `us14`)
- **Environment**: Production, Preview, Development (select all)

#### Or via Vercel CLI:

```bash
vercel env add MAILCHIMP_API_KEY
# Paste your API key when prompted

vercel env add MAILCHIMP_AUDIENCE_ID
# Paste your audience ID when prompted

vercel env add MAILCHIMP_SERVER_PREFIX
# Paste your server prefix when prompted
```

### 2. Deploy to Vercel

You have three options:

#### Option A: Deploy via Git Push (Recommended)

```bash
git add .
git commit -m "Add newsletter subscription API"
git push origin main
```

Vercel will automatically deploy when you push to your main branch.

#### Option B: Deploy via Vercel CLI

```bash
vercel --prod
```

This will build and deploy directly to production.

#### Option C: Deploy via Vercel Dashboard

1. Go to your project on Vercel
2. Click **Deployments**
3. Click **Redeploy** on the latest deployment
4. Select **Use existing Build Cache** (optional)
5. Click **Redeploy**

### 3. Verify the Deployment

After deployment:

1. Go to your live site (e.g., `https://proto-sparkle-page.vercel.app`)
2. Scroll to the footer
3. Enter an email address
4. Click **SUBSCRIBE**
5. You should see: "Thank you for Joining Avya Community!" ✅

### 4. Check the Serverless Function Logs

If something goes wrong:

1. Go to Vercel Dashboard → Your Project
2. Click on **Functions** tab
3. Find `/api/subscribe`
4. Click on it to see logs and invocations
5. Check for any error messages

## Important Notes

### What Happens in Production:

- ✅ `/api/subscribe.ts` runs as a Vercel serverless function
- ✅ No need to run `dev-server.js` (that's for local dev only)
- ✅ Environment variables are securely loaded from Vercel
- ✅ API calls go directly to Vercel's edge network
- ✅ Automatic HTTPS and SSL

### Files Used in Production:

**Production:**
- `api/subscribe.ts` ← Vercel serverless function
- `vercel.json` ← Routing configuration

**Local Development Only:**
- `dev-server.js` ← NOT deployed (local use only)
- `.env` ← NOT deployed (gitignored)

### Build Configuration:

Your `vercel.json` is already configured:
```json
{
  "rewrites": [
    { "source": "/api/(.*)", "destination": "/api/$1" },
    { "source": "/(.*)", "destination": "/" }
  ]
}
```

This ensures:
- API routes work: `/api/subscribe` → `api/subscribe.ts`
- SPA routing works: All other routes → `index.html`

## Troubleshooting Production Issues

### "Configuration Error" in Production

**Problem**: Environment variables not set
**Solution**: 
- Verify all 3 env vars are added in Vercel Dashboard
- Make sure they're enabled for "Production" environment
- Redeploy after adding variables

### "Failed to subscribe" Error

**Check these:**
1. Function logs in Vercel Dashboard
2. Mailchimp API key is valid
3. Audience ID is correct
4. Server prefix matches your API key

**View Logs:**
```bash
vercel logs --prod
```

### API Not Found (404)

**Problem**: API route not working
**Solution**:
- Check `vercel.json` has correct rewrites
- Verify `api/subscribe.ts` exists in repository
- Make sure you committed and pushed all files

### CORS Errors

**Already handled!** The `/api/subscribe.ts` function includes CORS headers:
```typescript
res.setHeader('Access-Control-Allow-Origin', '*');
```

## Testing Production Deployment

### Test Checklist:

- [ ] Environment variables are set in Vercel
- [ ] Code is pushed to GitHub/GitLab
- [ ] Deployment succeeded (green checkmark)
- [ ] Website loads correctly
- [ ] Footer newsletter form is visible
- [ ] Can submit email successfully
- [ ] Success message appears
- [ ] Email appears in Mailchimp audience

### Test Different Scenarios:

1. **New Email**: Should subscribe successfully
2. **Duplicate Email**: Should show "already subscribed" message
3. **Invalid Email**: Should show validation error
4. **Deleted Email**: Mailchimp will reject with appropriate message

## Performance & Limits

### Vercel Serverless Functions:
- **Timeout**: 10 seconds (more than enough)
- **Memory**: 1024 MB (default, sufficient)
- **Execution**: On-demand, scales automatically
- **Cold Start**: ~50-200ms (first request)
- **Warm**: ~10-50ms (subsequent requests)

### Mailchimp API:
- **Rate Limit**: 10 requests/second
- **Burst**: Up to 100 requests/minute
- More than sufficient for newsletter signups

## Security

✅ **Implemented Security Features:**

1. **API Key Protection**: Never exposed to client
2. **Server-Side Only**: All Mailchimp calls from backend
3. **HTTPS**: Automatic via Vercel
4. **Input Validation**: Email validation before processing
5. **Error Handling**: Generic errors shown to users
6. **Environment Variables**: Securely stored in Vercel

## Monitoring

### Check Function Performance:

1. Vercel Dashboard → Functions → `/api/subscribe`
2. View metrics:
   - Invocations count
   - Error rate
   - Execution duration
   - Bandwidth usage

### Set Up Alerts (Optional):

1. Vercel Dashboard → Settings → Notifications
2. Enable email notifications for:
   - Deployment failures
   - Function errors
   - Budget alerts

## Cost

**Vercel Free Tier Includes:**
- 100 GB bandwidth
- 100 GB-hours function execution
- Unlimited serverless function invocations

**Newsletter API Usage:**
- ~50ms execution per subscription
- Minimal bandwidth
- Well within free tier limits

## Next Steps

After successful deployment:

1. ✅ Test thoroughly on production
2. ✅ Monitor function logs for first few days
3. ✅ Check Mailchimp for new subscribers
4. ✅ Consider setting up:
   - Analytics tracking
   - Error monitoring (Sentry)
   - Uptime monitoring

## Support Resources

- [Vercel Functions Docs](https://vercel.com/docs/functions)
- [Mailchimp API Docs](https://mailchimp.com/developer/marketing/api/)
- [Your Project Dashboard](https://vercel.com/dashboard)

## Quick Reference Commands

```bash
# View production logs
vercel logs --prod

# Deploy to production
vercel --prod

# List environment variables
vercel env ls

# Pull environment variables locally
vercel env pull

# Check deployment status
vercel inspect [deployment-url]
```

---

🎉 **You're all set!** Your newsletter subscription will work seamlessly in production.

