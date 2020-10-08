import React from 'react';
import Decoration from './assets/Decoration.svg';
import './_barDeco.scss';

export default function BarDeco() {
    return (
        <div className='bar-deco-contact '>
            <h1>Zaloguj się</h1>
            <img src={Decoration} alt='deco' />
        </div>
    )
}
