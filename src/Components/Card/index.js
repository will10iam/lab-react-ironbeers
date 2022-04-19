import axios from "axios";
import { Link } from "react-router-dom";

export function Card(props) {
    
    function handleClick(){
        
        axios.post(
            'https://ih-beers-api2.herokuapp.com/beers',
            {image:props.beers.image_url,
             name:props.beers.name,
             tagline:props.beers.tagline,
             attenuation:props.beers.attenuation_level,
             description:props.beers.description,
             contributed_by: props.beers.contributed_by, 
            })
        }


    return ( 
        <>
        <div className="card text-white bg-dark mb-3" style={{maxWidth: "400px"}}>
            <div className="row g-0">
                <div className="col-md-4">
                    <img src={props.beers.image_url} className="img-fluid rounded-start" alt={props.beers.name}/>
                </div>
            <div className="col-md-8">
        <div className="card-body">
        <h5 className="card-title">{props.beers.name}</h5>
        <p className="card-text">{props.beers.tagline}</p>
        <p>{props.beers.contributed_by}</p>
        <Link to={`/character/${props.beers.beerId}`}><button type="button" class="btn btn-primary" onClick={handleClick}>Saber Mais</button></Link>
        </div>
    </div>
    </div>
    </div>


        </>
     );
}

export default Card;