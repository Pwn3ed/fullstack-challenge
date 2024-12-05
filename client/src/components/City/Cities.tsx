import axios from "axios";
import { useEffect, useState } from "react";
import City from "./City";
import { Link } from "react-router-dom";


const Cities = () => {

    const [cities, setCities] = useState<City[]>([]);


    const useAPI = async () => {
        const url = 'http://localhost:3333/cities';
        const data = await axios.get(url);
        // console.log(data.data[0].name)
        setCities(data.data)
    }

    useEffect(() => {
        
        useAPI();

    }, []);

    return (
        <div className="Cities">


            <h1>Cities list</h1>

            <div className="addNewCity">
                <button><Link className="Link" to={'/city/add'}>Add new city</Link></button>            
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