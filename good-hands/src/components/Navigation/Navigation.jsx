import React, { Component } from 'react';
import LoginRegister from './LoginRegister';
import Menu from './Menu'

export default class Navigation extends Component {
    render() {
        return (
            <div className="navigation-container">
                <LoginRegister />
                <Menu />
            </div>
        )
    }
}
