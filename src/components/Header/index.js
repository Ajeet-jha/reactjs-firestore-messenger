import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import './style.css';

const Header = ({ props }) => {

    return (
        <header className="header">
            <div style={{ display: 'flex' }}>
                <div className="logo">React chatTing App</div>
                <ul className="leftMenu">
                    <li><NavLink to={'/login'}>Login</NavLink></li>
                    <li><NavLink to={'/signup'}>Sign up</NavLink></li>
                </ul>
            </div>
            <ul className="menu">
            <li>
                <Link to={'#'}>Logout</Link>
            </li> </ul>
        </header>
    )

}

export default Header