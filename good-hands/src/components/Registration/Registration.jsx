import React, { Component } from 'react';
import RegistrationForm from './RegistrationForm';
import Navigation from '../Navigation/Navigation'
import DecorationBar from '../DecorationBar/DecorationBar'
import './_registration.scss'; 


export default class Login extends Component {
    render() {

        const register = 'Zarejestruj się';

        return (
            <section id="registration">
            <div className='nav-row'>
                <Navigation />
            </div>
            <div className='registration-container'>
                <DecorationBar text={register} />
                <RegistrationForm />
            </div>
            </section>
        )
    }
}
