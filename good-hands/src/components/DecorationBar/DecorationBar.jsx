import React from 'react';
import Decoration from './assets/Decoration.svg';
import './_decorationBar.scss';

export default function DecorationBar(props) {
    return (
        <div className={`decoration-bar ${props.class}`}>
            <h1>{props.text}</h1>
            <h1>{props.text2}</h1>
            <img src={Decoration} alt='deco' />
        </div>
    )
}
