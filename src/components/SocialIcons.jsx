// SocialIcons.jsx
import React from 'react';
import { SocialIcon } from 'react-social-icons';
import './SocialIcons.css';

const SocialIcons = () => (
    <div className="social-icons-container">
        <a href="https://dexscreener.com" target="_blank" rel="noreferrer">
            <img
                src="images/dexscreener.png"
                alt="Dexscreener"
                className="social-icon dexscreener-icon"
            />
        </a>
        <SocialIcon url="https://x.com/SolanaRedacted" className="social-icon" />
        <SocialIcon url="https://t.me/yourchannel" className="social-icon" />
    </div>
);

export default SocialIcons;