import React from 'react';
import HomeHero from '../../assets/Home-Hero-Image.jpg'
import '../../scss/components/_photoContainer.scss';

export default function PhotoContainer() {
    return (
        <div className='photo-container'>
            <img className='img' src={HomeHero} alt='box with stuff' />
        </div>
    )
}
