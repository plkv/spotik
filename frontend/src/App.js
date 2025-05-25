import React from 'react';

function App() {
  return (
    <div style={{ textAlign: 'center', marginTop: '100px' }}>
      <h1>Spotik</h1>
      <button
        style={{ fontSize: '1.2em', padding: '10px 30px' }}
        onClick={() => {
          window.location.href = `${process.env.REACT_APP_API_URL}/api/auth/login`;
        }}
      >
        Login with Spotify
      </button>
      <div style={{ marginTop: '20px', color: '#888' }}>v.0.02</div>
    </div>
  );
}

export default App; 