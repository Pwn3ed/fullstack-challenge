import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import City from "./City";


const CityForm = () => {
    const [city, setCity] = useState<City>();

    const { id } = useParams();

    useEffect( () => {
        if (city == undefined) 
            useAPI();

        // console.log(city)
    } )

    const useAPI = async () => {
        const data = await axios.get(`http://localhost:3333/city/${id}`)
        setCity(data.data[0]);
    }

    return (
        <div className="CityForm">
            <h1>Update city</h1>
            
            
        </div>
    )
}

export default CityForm;