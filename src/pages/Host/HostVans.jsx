import { useEffect, useState } from "react"
import { Link } from "react-router"

export default function HostVans() {
    
    const [vanData, setVanData] = useState([])

    useEffect(() => {
        fetch('/api/vans').then(val => val.json())
        .then((val)=>{
            setVanData(val.vans.slice(0, 3))
        })
    }, [])

    let allVansListCard = vanData.map((v)=>{
        return (
            <Link  to={`/host/vans/${v.id}`}>
            <div className="">
                <img src={v.imageUrl} alt="" />
                <div>
                    <h2>{v.name}</h2>
                    <h3>${v.price}/day</h3>
                </div>
            </div>
            </Link>
        )
    })

    return (
        <div className="hostVanDetail">
            <h1>Your listed Vans</h1>

            {(vanData.length>0) ? allVansListCard : <h2 style={{margin: "5vw 2vh"}}>Loading...</h2> }
        </div>
    )
}