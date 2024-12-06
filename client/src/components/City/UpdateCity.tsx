import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import City from "./City";


const UpdateCity = () => {
    const [city, setCity] = useState<City>();
    const [name, setName] = useState('');

    const { id } = useParams();

    const updateCity = async () => {
        const data = await axios.put(`http://localhost:3333/city/${id}`, {
            name: name
        })

        window.location.reload();
    }

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
        <div className="UpdateCity">
            <h1>Update city</h1>
            <h3>Actual: {city?.name}</h3>
            <label>New City: 
                <input type="text" placeholder="city" onChange={ (e) => setName(e.target.value) } />
            </label>
            <button onClick={ () => updateCity() }>Send</button>
            
        </div>
    )
}

export default UpdateCity;