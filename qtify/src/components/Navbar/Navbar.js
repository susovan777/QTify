import React from 'react';
import "./navbar.css"
import Logo from "../../assets/logo.png";

export default function Navbar() {
    return (
        <nav className='navbar'>
            <img src={Logo} alt='QTify Logo' width={70} />
            <input type='text' placeholder='Search a song of your choice' />
            <button>Give Feedback</button>
        </nav>
    )
}