import axios from "axios"
import { useEffect, useState } from "react"
import { Link, useNavigate } from "react-router-dom"


type Person = {
    id: number,
    name: string,
    email: string,
    cityid: number
}

type PersonProps = {
    person: Person
}

const Person = ({ person }: PersonProps) => {

    const [city, setCity] = useState<string[]>([]);

    const removeButtonHandler = async () => {
        if (confirm(`Are you sure to remove ${person.name}?`)) {
            const data = await axios.delete(`http://localhost:3333/person/${person.id}`)
            window.location.reload();
        }
    }

    const getCity = async () => {
        const data = await axios.get(`http://localhost:3333/city/${person.cityid}`);
        setCity(data.data[0].name);
    }

    useEffect( () => {
        getCity();
    }, [] );

    return (
        <div className="Item">
            <div className="Person">
                <label>Name: { person.name }</label>
                <label>Email: { person.email }</label>
                <label>City: { city }</label>
            </div>
            <div className="buttons">
                <button className="ButtonUpdate"> <Link className="LinkUpdate" to={`/person/${person.id}`}>Update</Link> </button>
                <button onClick={ () => removeButtonHandler() }>Remove</button>
            </div>
        </div>
    )
}


export default Person;  
