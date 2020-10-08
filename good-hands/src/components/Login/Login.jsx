import React, { Component } from 'react';
import BarDeco from './BarDeco';
import LoginForm from './LoginForm';
import LoginNav from '../Home/LoginNav';
import MenuNav from '../Home/MenuNav';
import './_login.scss'; 


export default class Login extends Component {
    render() {
        return (
            <section id="login">
            <div className='nav-row'>
                <LoginNav />
                <MenuNav />
            </div>
            <div className='login-container'>
                <BarDeco />
                <LoginForm />
            </div>
            </section>
        )
    }
}
