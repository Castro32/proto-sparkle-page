// Simple development server for API endpoints
// Run this with: node dev-server.js
import express from 'express';
import crypto from 'crypto';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const PORT = 3001;

app.use(express.json());

// Enable CORS for development
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  
  if (req.method === 'OPTIONS') {
    return res.sendStatus(200);
  }
  next();
});

// Subscribe endpoint
app.post('/api/subscribe', async (req, res) => {
  const { email } = req.body;

  console.log(`📧 Subscription request received for: ${email}`);

  if (!email || !email.includes('@')) {
    return res.status(400).json({ 
      title: 'Invalid Resource',
      detail: 'Please provide a valid email address' 
    });
  }

  // Your Mailchimp credentials
  const MAILCHIMP_API_KEY = process.env.MAILCHIMP_API_KEY;
  const MAILCHIMP_AUDIENCE_ID = process.env.MAILCHIMP_AUDIENCE_ID;
  const MAILCHIMP_SERVER_PREFIX = process.env.MAILCHIMP_SERVER_PREFIX;

  if (!MAILCHIMP_API_KEY || !MAILCHIMP_AUDIENCE_ID || !MAILCHIMP_SERVER_PREFIX) {
    console.error('❌ Missing Mailchimp environment variables');
    console.log('Make sure you have set:');
    console.log('  - MAILCHIMP_API_KEY');
    console.log('  - MAILCHIMP_AUDIENCE_ID');
    console.log('  - MAILCHIMP_SERVER_PREFIX');
    return res.status(500).json({ 
      title: 'Configuration Error',
      detail: 'Server configuration error. Please check environment variables.' 
    });
  }

  // Create MD5 hash of the lowercase email (Mailchimp requirement)
  const subscriberHash = crypto
    .createHash('md5')
    .update(email.toLowerCase())
    .digest('hex');

  const url = `https://${MAILCHIMP_SERVER_PREFIX}.api.mailchimp.com/3.0/lists/${MAILCHIMP_AUDIENCE_ID}/members/${subscriberHash}`;

  try {
    console.log('🔄 Checking if email exists in Mailchimp...');
    
    // First, check if the member already exists
    const checkResponse = await fetch(url, {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${MAILCHIMP_API_KEY}`,
        'Content-Type': 'application/json',
      },
    });

    if (checkResponse.ok) {
      const memberData = await checkResponse.json();
      
      // Check if already subscribed
      if (memberData.status === 'subscribed') {
        console.log('⚠️  Email already subscribed');
        return res.status(400).json({
          title: 'Member Exists',
          detail: 'This email is already subscribed to our newsletter.',
        });
      }

      // If unsubscribed or pending, update their status
      if (memberData.status === 'unsubscribed' || memberData.status === 'pending') {
        console.log('🔄 Resubscribing user...');
        const updateResponse = await fetch(url, {
          method: 'PATCH',
          headers: {
            Authorization: `Bearer ${MAILCHIMP_API_KEY}`,
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            status: 'subscribed',
          }),
        });

        if (updateResponse.ok) {
          console.log('✅ Successfully resubscribed!');
          return res.status(200).json({ 
            success: true, 
            message: 'Successfully resubscribed!' 
          });
        }
      }
    }

    // If member doesn't exist, create new subscriber
    console.log('➕ Adding new subscriber...');
    const addUrl = `https://${MAILCHIMP_SERVER_PREFIX}.api.mailchimp.com/3.0/lists/${MAILCHIMP_AUDIENCE_ID}/members`;
    
    const addResponse = await fetch(addUrl, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${MAILCHIMP_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email_address: email.toLowerCase(),
        status: 'subscribed',
        tags: ['Website Signup'],
      }),
    });

    const data = await addResponse.json();

    if (!addResponse.ok) {
      console.error('❌ Mailchimp API error:', data);
      return res.status(400).json({
        title: data.title || 'Subscription Error',
        detail: data.detail || 'Failed to subscribe',
      });
    }

    console.log('✅ Successfully subscribed!');
    return res.status(200).json({ 
      success: true, 
      message: 'Successfully subscribed!' 
    });

  } catch (error) {
    console.error('❌ Error:', error.message);
    return res.status(500).json({ 
      title: 'Server Error',
      detail: 'Failed to process subscription. Please try again later.' 
    });
  }
});

app.listen(PORT, () => {
  console.log('\n🚀 Development API Server running!');
  console.log(`📍 Server: http://localhost:${PORT}`);
  console.log(`📧 Endpoint: http://localhost:${PORT}/api/subscribe`);
  console.log('\n💡 Make sure your .env file contains:');
  console.log('   - MAILCHIMP_API_KEY');
  console.log('   - MAILCHIMP_AUDIENCE_ID');
  console.log('   - MAILCHIMP_SERVER_PREFIX\n');
});

