import React from 'react'
import CartWidget from './CartWidget'
import { Link } from 'react-router-dom'
import "./navbar.css"

const NavBar = () => {
    return (
        <nav className="navbar sticky-top navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
                <Link to="/" className="navbar-brand">
                    <img className='icon' src="/img/icon.png" alt="Snow Home Icon" />
                </Link>

                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <Link to="/category/living-room" className="nav-link">Living Room</Link>

                        <Link to="/category/dining-room" className="nav-link">Dining Room</Link>

                        <Link to="/category/bedroom" className="nav-link">Bedroom</Link>

                        <Link to="/category/home-office" className="nav-link">Home Office</Link>

                        <Link to="/category/decor-and-pillows" className="nav-link">Decor & Pillows</Link>

                        <Link to="/category/lighting" className="nav-link">Lighting</Link>

                        <Link to="/contact" className="nav-link">Contact</Link>
                    </ul>
                </div>
                <CartWidget />
            </div>
        </nav>
    )
}

export default NavBar