import React from 'react';
import { NavLink as Link } from "react-router-dom";
import '../../scss/components/_loginNav.scss';

export default function LoginNav() {
    return (
        <div className='nav-container'>
            <nav>
                <ul className='nav-list-login btn-login'>
                    <li><Link exact to="/login"><button><span>Zaloguj</span></button></Link></li>
                    <li><Link exact to="/registration"><button><span>Załóż konto</span></button></Link></li>
                </ul>
            </nav>
        </div>
    )
}
