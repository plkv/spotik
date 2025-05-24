import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

// Create theme
const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#1DB954', // Spotify green
    },
    background: {
      default: '#121212',
      paper: '#181818',
    },
  },
});

// Placeholder components
const Home = () => (
  <Box sx={{ mt: 4 }}>
    <Typography variant="h4" component="h1" gutterBottom>
      Welcome to Spotik
    </Typography>
    <Typography variant="body1">
      Manage your Spotify playlists with ease
    </Typography>
  </Box>
);

const Playlists = () => (
  <Box sx={{ mt: 4 }}>
    <Typography variant="h4" component="h1" gutterBottom>
      Your Playlists
    </Typography>
  </Box>
);

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
          <AppBar position="static">
            <Toolbar>
              <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                Spotik
              </Typography>
              <Button
                color="inherit"
                onClick={async () => {
                  // Call the backend to get the Spotify auth URL
                  const response = await fetch(`${process.env.REACT_APP_API_URL}/api/auth/login`);
                  const data = await response.json();
                  // Redirect the browser to Spotify's auth page
                  window.location.href = data.url;
                }}
              >
                Login with Spotify
              </Button>
            </Toolbar>
          </AppBar>
          
          <Container component="main" sx={{ mt: 4, mb: 4, flex: 1 }}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/playlists" element={<Playlists />} />
            </Routes>
          </Container>
          
          <Box component="footer" sx={{ py: 3, bgcolor: 'background.paper' }}>
            <Container maxWidth="sm">
              <Typography variant="body2" color="text.secondary" align="center">
                © {new Date().getFullYear()} Spotik
              </Typography>
            </Container>
          </Box>
        </Box>
      </Router>
    </ThemeProvider>
  );
}

export default App; 