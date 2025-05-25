require('dotenv').config();
const express = require('express');
const cors = require('cors');
const session = require('express-session');
const SpotifyWebApi = require('spotify-web-api-node');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors({
  origin: process.env.FRONTEND_URL,
  credentials: true
}));
app.use(express.json());
app.use(session({
  secret: process.env.SESSION_SECRET || 'your-secret-key',
  resave: false,
  saveUninitialized: false
}));

app.get('/api/auth/login', (req, res) => {
  const scopes = [
    'user-read-private',
    'user-read-email',
    'playlist-read-private',
    'playlist-modify-public',
    'playlist-modify-private'
  ];
  const authorizeURL = spotifyApi.createAuthorizeURL(scopes);
  res.redirect(authorizeURL);
});

app.get('/api/auth/callback', async (req, res) => {
  const { code } = req.query;
  try {
    const spotifyApi = new SpotifyWebApi({
      clientId: process.env.SPOTIFY_CLIENT_ID,
      clientSecret: process.env.SPOTIFY_CLIENT_SECRET,
      redirectUri: process.env.SPOTIFY_REDIRECT_URI
    });
    const data = await spotifyApi.authorizationCodeGrant(code);
    req.session.access_token = data.body.access_token;
    req.session.refresh_token = data.body.refresh_token;
    res.redirect(process.env.FRONTEND_URL);
  } catch (error) {
    res.redirect(process.env.FRONTEND_URL + '/error');
  }
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
}); 