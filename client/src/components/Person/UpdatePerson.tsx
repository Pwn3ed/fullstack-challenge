import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Person from "./Person";
import City from "../City/City";


const UpdatePerson = () => {
    const { id } = useParams();

    const [person, setPerson] = useState<Person>();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [cityId, setCityId] = useState(0);

    const [cities, setCities] = useState<City[]>([]);

    const [isSelected, setIsSelected] = useState(false);


    const updatePerson = async () => {
        const data = await axios.put(`http://localhost:3333/person/${id}`, {
            name: name,
            email: email,
            cityid: cityId
        });

        window.location.reload();
    };

    const getPerson = async () => {
        const data = await axios.get(`http://localhost:3333/person/${id}`)
        setPerson(data.data[0]);
    };

    useEffect( () => {
        getPerson();
        getAllCities();

        // console.log(person)
    }, [] );


    const getAllCities = async () => {
        const data = await axios.get('http://localhost:3333/cities');
        setCities(data.data);
    };

    const handleSelectedElement = (id: number) => {
        setCityId(id);
    }






    return (
        <div className="UpdatePerson">
            <h1>Update person</h1>

            <div className="PersonForm Item">
                <label>
                    Name:
                    <input type="text" placeholder={person?.name} onChange={ (e) => setName(e.target.value) } />
                </label>

                <label>
                    Email:
                    <input type="text" placeholder={person?.email} onChange={ (e) => setEmail(e.target.value) } />
                </label>

                <label>
                    City: 
                    <select onChange={ (e) => handleSelectedElement(Number(e.target.value)) }>
                        {
                            cities.map( (city: City) => {
                                if (city.id === person?.cityid) {
                                    //this return causes a warning but it's the way that worked.
                                    return <option selected key={city.id} value={city.id}>{city.name}</option>
                                }
                                return <option key={city.id} value={city.id}>{city.name}</option>
                            } )
                        }
                    </select>
                </label>
                
            </div>
            <button onClick={ () => updatePerson() }>Update</button>

        </div>
    )
}

export default UpdatePerson;