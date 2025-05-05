import { Link } from "react-router";

export default function(props){
    return (
        <Link to={`/vans/${props.id}`}>
        <div className="vanCard">
            <img src={props.img} alt="" />
            <div className="name-price">
                <h3>{props.name}</h3>
                <h3>${props.price}</h3>
            </div>
            <div className="badge">
                {props.type}
            </div>
        </div>
        </Link>
    )
}