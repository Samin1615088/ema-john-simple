import React from 'react';
import logo from '../../images/logo.png';
import './Header.css';

const Header = () => {
    return (
        <header>
            <div>
                <img src={logo} alt="" />
            </div>
            <nav>
                <ul>
                    <li><a href="shop">Shop</a></li>
                    <li><a href="review">Order Review</a></li>
                    <li><a href="inventory">Manage Inventory here</a></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;