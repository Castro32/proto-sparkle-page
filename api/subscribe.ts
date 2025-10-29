import type { VercelRequest, VercelResponse } from '@vercel/node';
import crypto from 'crypto';

export default async function handler(req: VercelRequest, res: VercelResponse) {
  // Enable CORS
  res.setHeader('Access-Control-Allow-Credentials', 'true');
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
  );

  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { email } = req.body;

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
    console.error('Missing Mailchimp environment variables');
    return res.status(500).json({ 
      title: 'Configuration Error',
      detail: 'Server configuration error. Please contact support.' 
    });
  }

  // Create MD5 hash of the lowercase email (Mailchimp requirement)
  const subscriberHash = crypto
    .createHash('md5')
    .update(email.toLowerCase())
    .digest('hex');

  const url = `https://${MAILCHIMP_SERVER_PREFIX}.api.mailchimp.com/3.0/lists/${MAILCHIMP_AUDIENCE_ID}/members/${subscriberHash}`;

  try {
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
        return res.status(400).json({
          title: 'Member Exists',
          detail: 'This email is already subscribed to our newsletter.',
        });
      }

      // If unsubscribed or pending, update their status
      if (memberData.status === 'unsubscribed' || memberData.status === 'pending') {
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
          return res.status(200).json({ 
            success: true, 
            message: 'Successfully resubscribed!' 
          });
        }
      }
    }

    // If member doesn't exist, create new subscriber
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
      console.error('Mailchimp API error:', data);
      return res.status(400).json({
        title: data.title || 'Subscription Error',
        detail: data.detail || 'Failed to subscribe',
      });
    }

    return res.status(200).json({ 
      success: true, 
      message: 'Successfully subscribed!' 
    });

  } catch (error) {
    console.error('Mailchimp API error:', error);
    return res.status(500).json({ 
      title: 'Server Error',
      detail: 'Failed to process subscription. Please try again later.' 
    });
  }
}

