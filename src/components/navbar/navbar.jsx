import React from 'react';
import "./navbar.style.css"
const Navbar = () => {
    return (
        <nav >
            <ul className='nav-container'>
                <div className='logo-container' >
                     <span>
                        Mini Store
                    </span>
                </div>
                <div className='navbar-optinos'>
                    <li><a class="active" href="#">Home</a></li>
                    <li><a href="#services">Services</a></li>
                    <li><a href="#contact">Contact</a></li>
                    <li><a href="#about">About</a></li>
                </div>
            </ul>
        </nav>
    );
};

export default Navbar;