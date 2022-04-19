import {useState, useEffect} from 'react';
import axios from 'axios';
import Card from '../../Components/Card';
import { Link } from "react-router-dom";
import LinkHome from "../../assets/link-home.png"


export function Beers() {
    const [beers, setBeers] = useState([]);

    useEffect(() => {

        async function fetchBeers() {
            const response = await axios.get('https://ih-beers-api2.herokuapp.com/beers')
            setBeers(response.data)
        }
        fetchBeers()

    },[])
    console.log(beers)
    return ( 
        <>

        <div>
        <nav class="navbar navbar-light bg-light">
            <div class="container">
                <a class="navbar-brand" href="#">
                <Link to="/" class="navbar-brand"><img src={LinkHome} alt="" width="1350" height="150"/></Link>
                </a>
            </div>
        </nav>
        </div>

        <h1>All Beers</h1>
        
        <div>
            {
                beers.map((currentBeer) => {
                    return (
                        <Card beers={currentBeer}/>
                    );
                })


            }
        </div>


        </>
     );
}

export default Beers;