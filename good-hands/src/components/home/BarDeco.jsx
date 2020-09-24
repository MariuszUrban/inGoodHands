import React from 'react';
import Decoration from '../../assets/Decoration.svg'

export default function BarDeco() {
    return (
        <div className='bar-deco col-lg-12'>
            <h1>Wystarczą 4 proste kroki</h1>
            <img src={Decoration} alt='deco' />
        </div>
    )
}
