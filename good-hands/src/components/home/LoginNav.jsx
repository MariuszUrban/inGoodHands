import React from 'react'

export default function LoginNav() {
    return (
        <div className='nav-container'>
            <nav>
                <ul className='nav-list-login btn-login'>
                    <li><button><span>Zaloguj</span></button></li>
                    <li><button><span>Załóż konto</span></button></li>
                </ul>
            </nav>
        </div>
    )
}
