import React from 'react'
import "./header.css"
const Header = () => {

    return (
    <nav className='nav'>
        <span>
           <ul>
            <li><a>Explore</a></li>
            <li><a>My account</a></li>
           </ul>
        </span>
    </nav>
    )
}

export default Header;