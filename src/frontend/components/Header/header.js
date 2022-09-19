import React from 'react'
import { Link } from 'react-router-dom';
import "./header.css"
const Header = () => {

    return (
    <nav className='nav'>
        <span>
           <ul>
            <li><Link to="/explore">Explore</Link></li>
            <li><Link to="/create">Create</Link></li>
            <li><Link to="/profile">My account</Link></li>
           </ul>
        </span>
    </nav>
    )
}

export default Header;