import { useEffect, useState } from "react"
import { NavLink, Outlet, useParams } from "react-router"

import BackToAllVans from "../../components/BackToAllVans"

export default function HostVanDetailedPageLayout() {
    const imgStyle = {
        maxHeight: "200px",
        maxWidth: "200px",
        borderRadius: "12px",
        margin: "0 1.8vw 0 0"
    }
    const [vanDetail, setVanDetail] = useState({})
    const { id } = useParams()
    useEffect(() => {
        fetch(`/api/vans/${id}`)
            .then((v) => v.json()).then((v) => setVanDetail(v.vans))
    }, [])

    return (
        <>
            <BackToAllVans />
        <div className="VanDetailedPageContainer">
            <div className="VanDetailedPageBox">
                <img src={vanDetail.imageUrl} alt="" style={imgStyle} />
                <div>
                    <div style={{ margin: "1vh" }} className="badge">
                        {vanDetail.type}
                    </div>
                    <h2 style={{ margin: "1vh" }}>{vanDetail.name}</h2>
                    <h3>${vanDetail.price}/day</h3>
                </div>
            </div>

            <nav className="host-nav">
                <ul>
                    <li><NavLink to={`.`} end style={({ isActive }) => {
                        return isActive ? { color: "red" } : null
                    }}>
                        Details
                    </NavLink></li>

                    <li><NavLink to={`pricing`} style={({ isActive }) => {
                        return isActive ? { color: "red" } : null
                    }}>
                        Pricing
                    </NavLink></li>

                    <li><NavLink to={`photos`} style={({ isActive }) => {
                        return isActive ? { color: "red" } : null
                    }}>
                        Photos
                    </NavLink></li>
                </ul>
            </nav>

            <Outlet />
        </div>
        </>
    )
}