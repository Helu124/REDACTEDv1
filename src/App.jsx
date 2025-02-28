// src/App.jsx
import React from 'react';
import './App.css';
import ImageGallery from './components/ImageGallery';
import SocialIcons from './components/SocialIcons';

function App() {
  return (
    <div className="container">
      <div className="half white">
        <div className="text-container">
          <h1 className="text">[REDACTED]</h1>
          <p className="subtext">Information not currently available</p>
        </div>
      </div>
      <div className="half black">
        <ImageGallery />
      </div>
      <SocialIcons />
    </div>
  );
}

export default App;
