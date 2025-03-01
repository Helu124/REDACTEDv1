import React from 'react';
import { motion } from 'framer-motion';
import './ImageGallery.css';

const images = [
    'images/ALBERT.png',
    'images/MINDBLOWN.png',
    'images/einstein.png'
];

const ImageGallery = () => {
    return (
        <div className="gallery-container">
            {images.map((src, index) => (
                <motion.img
                    key={index}
                    src={src}
                    alt={`Gallery ${index}`}
                    className="gallery-image"
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: index * 0.3 }}
                />
            ))}
        </div>
    );
};

export default ImageGallery;
