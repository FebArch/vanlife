import { useState, useEffect } from "react"
import VanCard from "../components/VanCard"

export default function Vans(props) {

    const [vansData, setVansData] = useState([])

    useEffect(() => {
        fetch("/api/vans").then(res => res.json()).then((value) => {
            console.log(value)
            setVansData(value.vans)
        })
    }, [])

    const allVans = vansData.map((d) => {
        return (
            <VanCard key={d.id} id={d.id} img={d.imageUrl} name={d.name} description={d.description}
                price={d.price} type={d.type}
            />
        )
    })
    return (
        <div className="vansPage">
            <h1>Explore our van options</h1>

            <div className="vansContainer">
                {allVans}
            </div>

        </div>
    )
}