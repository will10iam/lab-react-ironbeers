import { Link } from "react-router-dom";
import LinkHome from "../../assets/link-home.png"
export function RandomBeer() {
    return ( 
        <>
        <nav class="navbar navbar-light bg-light">
            <div class="container">
                <a class="navbar-brand" href="#">
                <Link to="/" class="navbar-brand"><img src={LinkHome} alt="" width="1350" height="150"/></Link>
                </a>
            </div>
        </nav>
        </>
     );
}

export default RandomBeer;