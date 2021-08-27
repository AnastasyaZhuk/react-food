import React from 'react';
import {Link} from "react-router-dom";

const Header = () => {
    return (
        <nav className="grey">
            <div className="nav-wrapper">
                <Link to='/' className="brand-logo">Recipe catalog</Link>
                <ul id="nav-mobile" className="right hide-on-med-and-down">
                    <li><Link to='/about'>About</Link></li>
                    <li><Link to='contacts'>Contacts</Link></li>
                </ul>
            </div>
        </nav>
    );
};

export default Header;