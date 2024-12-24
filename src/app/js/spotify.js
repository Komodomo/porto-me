// Authorization token that must have been created previously. See : https://developer.spotify.com/documentation/web-api/concepts/authorization
const token = 'BQCz3nxr1GXVDFmMiJFRZiJ1wyrE0IFD26YC7C7WXVmZT5jUNWh1RkGBf4r_A7GUbI7NO8ks7Us8KlZsJ8M1GzN2KtjwFLk3F1YWZM13-0aDig9tTort7rgkMwAZaMYsePSDbkzLD4RMo4ad53AYhTDqQwp5UGKZWsHeFUGLo3wmaJFXBgY8tSq4D5cb7RkKfwOad57LOKUSuegxxWUvDtxNFR2-rSIi9OdaWJZUlLqlP5Q6vUI13KtzhBXWcgpSSYYYG12D4go5IoZTpxkxoSqjqndYbdqq';
async function fetchWebApi(endpoint, method, body) {
  const res = await fetch(`https://api.spotify.com/${endpoint}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
    method,
    body:JSON.stringify(body)
  });
  return await res.json();
}

async function getTopTracks(){
  // Endpoint reference : https://developer.spotify.com/documentation/web-api/reference/get-users-top-artists-and-tracks
  return (await fetchWebApi(
    'v1/me/top/tracks?time_range=long_term&limit=5', 'GET'
  )).items;
}

const topTracks = await getTopTracks();
console.log(
  topTracks?.map(
    ({name, artists}) =>
      `${name} by ${artists.map(artist => artist.name).join(', ')}`
  )
);