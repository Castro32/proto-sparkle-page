/*
import { NextApiRequest, NextApiResponse } from 'next';

const FACEBOOK_ACCESS_TOKEN = process.env.FACEBOOK_ACCESS_TOKEN;
const INSTAGRAM_BUSINESS_ACCOUNT_ID = process.env.INSTAGRAM_BUSINESS_ACCOUNT_ID;

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (!FACEBOOK_ACCESS_TOKEN || !INSTAGRAM_BUSINESS_ACCOUNT_ID) {
    return res.status(500).json({ error: 'Instagram business credentials not configured' });
  }

  const limit = Number(req.query.limit) || 8;

  try {
    // Using Instagram Graph API for business accounts
    const response = await fetch(
      `https://graph.facebook.com/v18.0/${INSTAGRAM_BUSINESS_ACCOUNT_ID}/media?fields=id,caption,media_type,media_url,permalink,thumbnail_url,timestamp,like_count,comments_count&limit=${limit}&access_token=${FACEBOOK_ACCESS_TOKEN}`
    );

    if (!response.ok) {
      throw new Error('Failed to fetch from Instagram Graph API');
    }

    const data = await response.json();
    res.status(200).json(data.data);
  } catch (error) {
    console.error('Instagram Graph API Error:', error);
    res.status(500).json({ error: 'Failed to fetch Instagram posts' });
  }
}
*/