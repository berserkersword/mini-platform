import React from 'react'
import "./Navbar.scss"
import { Link } from 'react-router-dom';
const Navbar = () => {
    return (
        <header>
            <input className="menu-icon" type="checkbox" id="menu-icon" name="menu-icon" />
            <label htmlFor="menu-icon"></label>
            <nav className="nav">
                <ul className="pt-5">
                    <Link to='/createquiz' className="mini-link">Create Test <span className='text-muted'>(Only for Admin)</span></Link>
                    <li><Link className='link' to="/">Main</Link></li>
                    <li><Link className='link' to="/login">Login</Link></li>
                    <li><Link className='link' to="/register">Register</Link></li>
                    <li><Link className='link' to="/">Quiz</Link></li>
                </ul>
            </nav>
        </header>
    )
}

export default Navbar