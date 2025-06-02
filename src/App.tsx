import { useState } from 'react'
import './App.css'
import Sidebar from './components/Sidebar'
import Navbar from './components/Navbar'

function App() {
  return (
    <div className="ytmusic-app">
      <div className='flex'>
        <Sidebar />
        <Navbar />
        {/* Main Content */}
        <div className="main-content">
          {/* Header */}
          <header className="header">
            <input type="text" placeholder="Search music..." className="search-bar" />
            <div className="user-avatar">U</div>
          </header>

          {/* Content Area */}
          <section className="content">
            <h2>Recommended Playlists</h2>
            <div className="playlist-grid">
              {/* Example playlist cards */}
              <div className="playlist-card">Playlist 1</div>
              <div className="playlist-card">Playlist 2</div>
              <div className="playlist-card">Playlist 3</div>
              <div className="playlist-card">Playlist 4</div>
            </div>
          </section>
        </div>
      </div>

      {/* Player Bar */}
      <footer className="player-bar">
        <div className="song-info">
          <span>Song Title</span> - <span>Artist</span>
        </div>
        <div className="player-controls">
          <button>⏮️</button>
          <button>▶️</button>
          <button>⏭️</button>
        </div>
        <div className="volume-control">
          <input type="range" min="0" max="100" />
        </div>
      </footer>
    </div>
  )
}

export default App
