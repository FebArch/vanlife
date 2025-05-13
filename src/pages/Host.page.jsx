import { BrowserRouter, Routes, Route, NavLink, Outlet } from "react-router"

export default function HostPage() {
    const style = {
        textDecoration: "underline",
        fontWeight: 900
    }
    return (
        <>
            <nav className="host-nav">
                <ul>
                    <li><NavLink to="/host" end={true} style={({ isActive })=> isActive ? style : null}>
                        Dashboard
                    </NavLink></li>

                    <li><NavLink to="/host/income" style={({ isActive })=> isActive ? style : null}>
                        Income
                    </NavLink></li>

                    <li><NavLink to="/host/vans" style={({ isActive })=> isActive ? style : null}>
                        Vans
                    </NavLink></li>

                    <li><NavLink to="/host/reviews" style={({ isActive })=> isActive ? style : null}>
                        Reviews
                    </NavLink></li>
                </ul>
            </nav>
            <Outlet />
        </>
    )
}