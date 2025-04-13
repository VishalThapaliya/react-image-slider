import React, { useEffect, useState } from 'react'
import { imagesData } from '../data/imagesData'
import './imageSlider.css'
import PreviousIcon from '../assets/previous.webp'
import NextIcon from '../assets/next.png'

const ImageSlider = () => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const handleNextClick = () => {
        setCurrentImageIndex((currentImageIndex + 1) % imagesData.length);
    }

    const handlePreviousClick = () => {
        setCurrentImageIndex(!currentImageIndex ? imagesData.length - 1 : currentImageIndex - 1)
    }

    useEffect(() => {
        const timer = setTimeout(() => {
            handleNextClick();
        }, 5000);

        return () => clearTimeout(timer);
    }, [currentImageIndex]);

    return (
        <section>
            <h2>React Image Slider Carousal</h2>
            <div className="image-container">
                <img 
                    src={PreviousIcon} 
                    onClick={handlePreviousClick} 
                    className='action-button left' 
                />
                {
                    imagesData.map((image, index) => (
                        <img 
                            src={image.url} 
                            alt="slider image"
                            className={currentImageIndex === index ? 'block' : 'hidden'} 
                            key={image.id}
                        />
                    ))
                }
                <img 
                    src={NextIcon} 
                    onClick={handleNextClick}
                    className='action-button right'
                />
            </div>

        </section>
    )
}

export default ImageSlider