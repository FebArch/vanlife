// import { Link } from "react-router-dom"

import { NavLink, Link } from "react-router-dom"

export default function Navbar(params) {
    return (
        <nav className="nav">
            <h1><Link to="/" >#vanlife</Link></h1>
            <div className="nav-lists">

                <NavLink to="/host" className={({isActive})=> isActive ? "active-link" : null }>
                Host
                </NavLink>
                
                <NavLink to="/about" className={({isActive})=> isActive ? "active-link" : null }>
                About
                </NavLink>

                <NavLink to="/vans" className={({isActive})=> isActive ? "active-link" : null }>
                Vans
                </NavLink>
            </div>
        </nav>
    )
}