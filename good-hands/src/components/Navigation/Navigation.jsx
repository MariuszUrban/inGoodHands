import React, { Component } from 'react';
import LoginRegister from './LoginRegister';
import Menu from './Menu'
import './_navigation.scss'

export default class Navigation extends Component {
    render() {
        return (
            <div className="navigation-container col-lg-12">
                <LoginRegister />
                <Menu />
            </div>
        )
    }
}
