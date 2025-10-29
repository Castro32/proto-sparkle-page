# Mailchimp Newsletter Subscription Setup

## Overview
The footer newsletter subscription now uses a Vercel serverless function to securely communicate with Mailchimp's API.

## Setup Instructions

### 1. Get Your Mailchimp Credentials

#### API Key:
1. Log in to [Mailchimp](https://mailchimp.com)
2. Go to **Account** → **Extras** → **API keys**
3. Click **Create A Key**
4. Copy your API key (it will look like: `abc123def456-us14`)

#### Audience ID:
1. In Mailchimp, go to **Audience** → **All contacts**
2. Click the **Settings** dropdown → **Audience name and defaults**
3. Look for **Audience ID** and copy it

#### Server Prefix:
- This is the part after the dash in your API key
- For example, if your API key is `abc123def456-us14`, the server prefix is `us14`

### 2. Configure Vercel Environment Variables

#### If deploying to Vercel:
1. Go to your project on [Vercel Dashboard](https://vercel.com)
2. Go to **Settings** → **Environment Variables**
3. Add the following variables:
   - `MAILCHIMP_API_KEY` = Your full API key
   - `MAILCHIMP_AUDIENCE_ID` = Your audience ID
   - `MAILCHIMP_SERVER_PREFIX` = Your server prefix (e.g., `us14`)
4. Redeploy your application

#### For local development:
1. Create a `.env` file in the root directory
2. Copy the contents from `.env.example`
3. Fill in your actual Mailchimp credentials
4. **Note:** The `.env` file should be in `.gitignore` (already configured)

### 3. Test Your Setup

1. Deploy to Vercel or run locally with Vercel CLI:
   ```bash
   npm install -g vercel
   vercel dev
   ```
2. Go to your website's footer
3. Enter an email address and click **SUBSCRIBE**
4. Check your Mailchimp audience to verify the subscription

## How It Works

1. User enters email in footer
2. Frontend sends POST request to `/api/subscribe`
3. Vercel serverless function validates email and communicates with Mailchimp API
4. Response is sent back to frontend with success/error message

## Features

- ✅ Email validation
- ✅ Duplicate subscription prevention
- ✅ Handles unsubscribed users wanting to resubscribe
- ✅ Secure API key handling (server-side only)
- ✅ Proper error messages for users
- ✅ CORS enabled for API endpoint

## Troubleshooting

### "Failed to subscribe. Please try again."
- Check that all environment variables are set correctly in Vercel
- Verify your Mailchimp API key is valid
- Ensure your Audience ID is correct
- Check Vercel function logs for detailed error messages

### "Configuration Error"
- Environment variables are missing or not properly set
- Redeploy after adding environment variables

### "This email is already subscribed"
- The email already exists in your Mailchimp audience as subscribed
- This is expected behavior

## Security Notes

- API key is stored securely in environment variables
- Never expose your API key in client-side code
- The serverless function runs on Vercel's servers, not in the browser
- All API communication happens server-to-server

