import React from 'react';
import {Link} from "react-router-dom";

const Header = () => {
    return (
        <nav className="grey">
            <div className="nav-wrapper">
                <Link to='/' className="brand-logo">Recipe Catalog</Link>
            </div>
        </nav>
    );
};

export default Header;