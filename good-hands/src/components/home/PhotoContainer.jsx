import React from 'react';
import HomeHero from '../../assets/Home-Hero-Image.jpg'

export default function PhotoContainer() {
    return (
        <div className='photo-container'>
            <img className='img' src={HomeHero} alt='box wit stuff' />
        </div>
    )
}
