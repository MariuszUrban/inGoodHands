import React, { Component } from 'react';
import BarDeco from './BarDeco';
import RegistrationForm from './RegistrationForm';
import LoginNav from '../Home/LoginNav';
import MenuNav from '../Home/MenuNav';
import './_registration.scss'; 


export default class Login extends Component {
    render() {
        return (
            <section id="registration">
            <div className='nav-row'>
                <LoginNav />
                <MenuNav />
            </div>
            <div className='registration-container'>
                <BarDeco />
                <RegistrationForm />
            </div>
            </section>
        )
    }
}
