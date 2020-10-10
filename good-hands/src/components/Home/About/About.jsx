import React, { Component } from 'react';
import './_about.scss'
import ThreeColumns from './ThreeColumns/ThreeColumns';
import DecorationBar from '../../DecorationBar/DecorationBar';
import FourColumns from './FourColumns/FourColumns';
import Button from '../../Button/Button'

export default class About extends Component {
    render() {
        return (
            <section id='about-container' >
                <ThreeColumns />
                <DecorationBar text="Wystarczą 4 proste kroki" class='about-deco' />
                <FourColumns />
               <Button text="ODDAJ RZECZY" wrapper="about-btn-wrapper" />
            </section>
        )
    }
}
