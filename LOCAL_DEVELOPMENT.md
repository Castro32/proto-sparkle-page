# Local Development Setup Guide

## Quick Start

### 1. Set Up Your `.env` File

Create a `.env` file in the root directory with your Mailchimp credentials:

```bash
MAILCHIMP_API_KEY=your_api_key_here-us14
MAILCHIMP_AUDIENCE_ID=your_audience_id_here
MAILCHIMP_SERVER_PREFIX=us14
```

### 2. Get Your Mailchimp Credentials

#### API Key:
1. Log in to [Mailchimp](https://mailchimp.com)
2. Go to **Account** → **Extras** → **API keys**
3. Click **Create A Key**
4. Copy your API key (format: `abc123def456-us14`)

#### Audience ID:
1. Go to **Audience** → **All contacts**
2. Click **Settings** → **Audience name and defaults**
3. Copy the **Audience ID**

#### Server Prefix:
- Extract from your API key (the part after the dash)
- Example: If key is `abc123-us14`, prefix is `us14`

### 3. Run the Development Servers

You have three options:

#### Option A: Run Both Servers Together (Recommended)
```bash
npm run dev:all
```

This will start:
- API Server on `http://localhost:3001`
- Vite Dev Server on `http://localhost:8080`

#### Option B: Run Servers Separately

**Terminal 1 - API Server:**
```bash
npm run dev:api
```

**Terminal 2 - Vite Dev Server:**
```bash
npm run dev
```

#### Option C: Use Vercel Dev (Alternative)
```bash
vercel dev --listen 3001
```

Then in another terminal:
```bash
npm run dev
```

### 4. Test the Newsletter Subscription

1. Open `http://localhost:8080` in your browser
2. Scroll to the footer
3. Enter an email address
4. Click **SUBSCRIBE**
5. Check for success message: "Thank you for Joining Avya Community!" ✅

## How It Works

1. **Frontend (Vite)**: Runs on port 8080
2. **API Server**: Runs on port 3001
3. **Proxy**: Vite proxies `/api/*` requests to the API server
4. **Mailchimp**: API server communicates with Mailchimp

```
Browser → Vite (8080) → Proxy → API Server (3001) → Mailchimp
```

## Troubleshooting

### "Configuration Error" Message
- Check that `.env` file exists in the root directory
- Verify all three environment variables are set
- Make sure there are no spaces around the `=` signs

### "Failed to subscribe" Error
- Open browser DevTools → Console for detailed errors
- Check the API server terminal for error messages
- Verify your Mailchimp credentials are correct
- Test your API key directly in Mailchimp

### API Server Not Starting
- Make sure port 3001 is not already in use
- Check that `dotenv` package is installed: `npm install`
- Verify Node.js version is 16+ with `node --version`

### Vite Server Issues
- Clear cache: `rm -rf node_modules/.vite`
- Restart dev server

## Console Output

When working correctly, you'll see in the API server console:

```
✅ Successfully subscribed!
```

Or if email already exists:
```
⚠️  Email already subscribed
```

## Production Deployment

When deploying to Vercel:
1. The `/api/subscribe.ts` serverless function will be used instead
2. Set environment variables in Vercel Dashboard
3. The dev server (`dev-server.js`) is only for local development

## Stopping the Servers

- Press `Ctrl+C` in the terminal to stop any running server
- If running `npm run dev:all`, press `Ctrl+C` once to stop both

