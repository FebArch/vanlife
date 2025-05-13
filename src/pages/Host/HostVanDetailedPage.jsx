import { useParams } from "react-router"

export default function HostVanDetailedPage(){

    const {id} = useParams()
    console.log(id)
    
    return (<h1>HostVanDetailedPage page goes here</h1>)
}