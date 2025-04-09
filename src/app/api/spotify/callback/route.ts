import { NextResponse } from 'next/server';

const CLIENT_ID = process.env.SPOTIFY_CLIENT_ID;
const CLIENT_SECRET = process.env.SPOTIFY_CLIENT_SECRET;
const REDIRECT_URI = 'https://rafimh-porto.vercel.app/api/spotify/callback'; // Sesuaikan dengan domain Anda

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const code = searchParams.get('code');

  if (!code) {
    return NextResponse.json({ error: 'Authorization code not found' }, { status: 400 });
  }

  const basic = Buffer.from(`${CLIENT_ID}:${CLIENT_SECRET}`).toString('base64');

  try {
    const response = await fetch('https://accounts.spotify.com/api/token', {
      method: 'POST',
      headers: {
        Authorization: `Basic ${basic}`,
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: new URLSearchParams({
        grant_type: 'authorization_code',
        code,
        redirect_uri: REDIRECT_URI,
      }),
    });

    const data = await response.json();

    if (!response.ok) {
      console.error('Error fetching token:', data);
      return NextResponse.json({ error: 'Failed to fetch token', details: data }, { status: response.status });
    }

    return NextResponse.json(data); // Kembalikan refresh token dan access token
  } catch (error) {
    console.error('Error exchanging authorization code:', error);
    return NextResponse.json({ error: 'Error exchanging authorization code' }, { status: 500 });
  }
}