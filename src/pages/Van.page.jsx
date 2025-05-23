import { useEffect, useState } from "react"
import { useParams } from "react-router"

import BackToAllVans from "../components/BackToAllVans"


export default function VanPage(props) {
    const [vanData, setVanData] = useState({})
    let { id } = useParams()

    useEffect(() => {
        async function callAPI() {
            try {
                setVanData(await fetch(`/api/vans/${id}`).then(res => res.json()).then(val=>val.vans))
            } catch (err) {
                setVanData({ error: "Error fetching data from api!" })
            }
        }
        callAPI()
    }, [])

    return (
        <>
    <BackToAllVans />
        <div className="vanDetail">
            <img src={vanData.imageUrl} alt="" />
            <div className="badge">
                {vanData.type}
            </div>
            <h1>{vanData.name}</h1>
            <h2>${vanData.price}/day</h2>

            <p className="desc">
                {vanData.description}
            </p>

            <button className="btn">Find your van</button>
        </div>
        </>
    )
}