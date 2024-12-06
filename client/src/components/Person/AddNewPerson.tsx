import axios from "axios";
import { useEffect, useState } from "react";
import City from "../City/City";
import { Router, useNavigate } from "react-router-dom";


const AddNewPerson = () => {
    const navigate = useNavigate();

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [cityId, setCityId] = useState(0);

    const [cities, setCities] = useState<City[]>([]);

    const addNewPersonHandler = async () => {
        const data = await axios.post(`http://localhost:3333/person`, {
            name: name,
            email: email,
            cityid: cityId
        });
        if (data)
            alert('New person added succesfully!');
        navigate('/persons')
    }

    const getAllCities = async () => {
        const data = await axios.get('http://localhost:3333/cities');
        setCities(data.data);
    };

    useEffect( () => {
        getAllCities();
    }, [] )

    const handleSelectedElement = (id: number) => {
        setCityId(id);
    }

    return (
        <div>
            <h1>Add new person</h1>

            <div className="PersonForm Item">
                <label>
                    Name:
                    <input type="text" placeholder="name" onChange={ (e) => setName(e.target.value) } />
                </label>

                <label>
                    Email:
                    <input type="text" placeholder="write new email" onChange={ (e) => setEmail(e.target.value) } />
                </label>

                <label>
                    City: 
                    <select onChange={ (e) => handleSelectedElement(Number(e.target.value)) } name="selectedCity">
                        {
                            cities.map( (city: City) => {
                                return <option key={city.id} value={city.id}>{city.name}</option>
                            } )
                        }
                    </select>
                </label>
                
            </div>
            <button onClick={ () => addNewPersonHandler() }>Add</button>
        </div>
    )
}

export default AddNewPerson;