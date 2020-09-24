import React from 'react'

export default function MenuNav() {
    return (
        <div className='nav-container'>
            <nav>
                <ul className='nav-list btn-menu'>
                    <li><button><span>Start</span></button></li>
                    <li><button><span>O co chodzi?</span></button></li>
                    <li><button><span>O nas</span></button></li>
                    <li><button><span>Fundacje i organizacje</span></button></li>
                    <li><button><span>Kontakt</span></button></li>
                </ul>
            </nav>
        </div>
    )
}
