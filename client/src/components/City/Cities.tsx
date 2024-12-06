import axios from "axios";
import { useEffect, useState } from "react";
import City from "./City";
import { Link } from "react-router-dom";


const Cities = () => {

    const [cities, setCities] = useState<City[]>([]);


    const useAPI = async () => {
        const data = await axios.get('http://localhost:3333/cities');

        setCities(data.data)
    }

    useEffect(() => {
        
        useAPI();

    }, []);

    return (
        <div className="Items">


            <h1>Cities list</h1>

            <div className="addNewItem">
                <button><Link className="LinkNew" to={'/city/add'}>Add new city</Link></button>            
            </div>

            <div>
                {
                    cities.map( city => {
                        return <City key={city.id} city={city} />
                    } )
                }
            </div>

        </div>
    )
};

export default Cities;