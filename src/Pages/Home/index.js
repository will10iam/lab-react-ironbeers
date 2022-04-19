import AllBeers from "../../assets/beers.png"
import NewBeer from "../../assets/new-beer.png"
import RandomBeer from "../../assets/random-beer.png"
import { Link } from "react-router-dom";



export function Home() {
    return ( 
        <div>
            <div>
                <Link to="/Beers"><img src={AllBeers} alt='all-beers'/></Link>
                <h1>All Beers</h1>
                <p></p>
            </div>
            <div>
                <Link to="/Newbeer"><img src={NewBeer} alt='new-beers'/></Link>
                <h1>New Beer</h1>
                <p></p>
            </div>
            <div>
                <Link to="/Randombeer"><img src={RandomBeer} alt='random-beers'/></Link>
                <h1>Random Beers</h1>
                <p></p>
            </div>
        </div>

     );
}

export default Home;