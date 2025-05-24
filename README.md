# Spotik - Spotify Playlist Manager

A web application for managing your Spotify playlists and data. Built with React, Node.js, and Express.

## Features (Planned)
- Spotify authentication and authorization
- View and manage playlists
- Create and edit playlists
- Track management
- User profile management

## Tech Stack
- Frontend: React.js
- Backend: Node.js with Express
- Database: MongoDB
- Authentication: Spotify OAuth
- Deployment: Render.com

## Getting Started

### Prerequisites
- Node.js (v18 or higher)
- npm or yarn
- Spotify Developer Account
- MongoDB Atlas account

### Installation

1. Clone the repository
```bash
git clone [your-repo-url]
cd spotik
```

2. Install dependencies
```bash
# Install backend dependencies
cd backend
npm install

# Install frontend dependencies
cd ../frontend
npm install
```

3. Set up environment variables
- Create `.env` files in both frontend and backend directories
- Add necessary environment variables (see .env.example files)

4. Start the development servers
```bash
# Start backend server
cd backend
npm run dev

# Start frontend server
cd frontend
npm start
```

## Environment Variables

### Backend (.env)
```
PORT=5000
MONGODB_URI=your_mongodb_uri
SPOTIFY_CLIENT_ID=your_spotify_client_id
SPOTIFY_CLIENT_SECRET=your_spotify_client_secret
SPOTIFY_REDIRECT_URI=http://localhost:5000/api/auth/callback
```

### Frontend (.env)
```
REACT_APP_API_URL=http://localhost:5000
REACT_APP_SPOTIFY_CLIENT_ID=your_spotify_client_id
```

## License
MIT 