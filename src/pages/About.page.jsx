import Card from "../components/Card"

export default function About(){
    return(
      <div>
        <div className="vanlife-img">
        <img src="https://cdn.shopify.com/s/files/1/0774/8816/1097/files/esbit-topf-edelstahl-1600ml-pt1600st-mit-popcorn-beim-vanlife-kinoabend.jpg?v=1705587279" alt="" />
        </div>
        <div className="about-content">
        <h2>Don't squeeze in a sedan when you could relax in a van</h2>
        
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus tenetur quod hic illum in expedita delectus nam sapiente voluptate eaque quos, architecto saepe obcaecati, sequi officiis quasi repellendus. Quo laboriosam ipsum accusantium debitis explicabo.</p>
  
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eos deserunt quas quo minus eaque, sunt libero dolores, dicta ea quaerat laudantium, esse consectetur?</p>
        
        <Card />
        </div>
      </div>
    )
  }