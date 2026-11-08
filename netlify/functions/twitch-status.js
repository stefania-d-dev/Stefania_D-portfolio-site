export async function handler(event, context) {
  try {
    const clientId = process.env.TWITCH_CLIENT_ID;
    const clientSecret = process.env.TWITCH_CLIENT_SECRET;

    if (!clientId || !clientSecret) {
      return {
        statusCode: 500,
        body: JSON.stringify({ isLive: false, error: 'Missing Twitch credentials on Netlify' }),
      };
    }

    // 1. Richiedi il token di accesso OAuth a Twitch
    const tokenRes = await fetch(
      `https://id.twitch.tv/oauth2/token?client_id=${clientId}&client_secret=${clientSecret}&grant_type=client_credentials`,
      { method: 'POST' }
    );
    const tokenData = await tokenRes.json();
    const accessToken = tokenData.access_token;

    if (!accessToken) {
      return {
        statusCode: 500,
        body: JSON.stringify({ isLive: false, error: 'Failed to obtain access token' }),
      };
    }

    // 2. Interroga le Helix API per verificare lo stato live di stefania_d
    const streamRes = await fetch('https://api.twitch.tv/helix/streams?user_login=stefania_d', {
      headers: {
        'Client-ID': clientId,
        'Authorization': `Bearer ${accessToken}`,
      },
    });
    const streamData = await streamRes.json();

    if (streamData.data && streamData.data.length > 0) {
      const stream = streamData.data[0];
      return {
        statusCode: 200,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          isLive: true,
          title: stream.title,
          viewerCount: stream.viewer_count,
          gameName: stream.game_name,
        }),
      };
    } else {
      return {
        statusCode: 200,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ isLive: false }),
      };
    }
  } catch (err) {
    return {
      statusCode: 500,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ isLive: false, error: err.message }),
    };
  }
}