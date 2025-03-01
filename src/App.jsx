import React from 'react';
import './App.css';
import ImageGallery from './components/ImageGallery';
import SocialIcons from './components/SocialIcons';
import ScrollDownArrow from './components/ScrollDownArrow';

function App() {
  return (
    <div className="container">
      <div className="half white">
        {/* Background Video */}
        <video className="video-background" autoPlay loop muted>
          <source src="images/REDACTED.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="text-container">
          <h1 className="text">[REDACTED]</h1>
          <p className="subtext">Information not currently available</p>
        </div>
        <ScrollDownArrow />
      </div>

      <div className="half black">
        <ImageGallery />
      </div>

      <SocialIcons />
    </div>
  );
}

export default App;
