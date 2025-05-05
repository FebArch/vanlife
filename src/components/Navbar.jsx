import {Link} from "react-router-dom"

export default function Navbar(params) {
    return (
        <nav className="nav">
            <h1><Link to="/" >#vanlife</Link></h1>
            <div className="nav-lists">
                
                <Link to="/about" >About</Link>
                <Link to="/vans" >Vans</Link>
            </div>
        </nav>
    )
}