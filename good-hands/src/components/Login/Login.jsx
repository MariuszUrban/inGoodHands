import React, { Component } from 'react';
import BarDeco from './BarDeco';
import LoginForm from './LoginForm';
import Navigation from '../Navigation/Navigation'
import './_login.scss'; 


export default class Login extends Component {
    render() {
        return (
            <section id="login">
            <div className='nav-row'>
                <Navigation />
            </div>
            <div className='login-container'>
                <BarDeco />
                <LoginForm />
            </div>
            </section>
        )
    }
}
