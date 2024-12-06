import axios from "axios";
import { useEffect, useState } from "react";
import Person from "./Person";
import { Link } from "react-router-dom";


const People = () => {

    const [people, setPersons] = useState<Person[]>([]);


    const useAPI = async () => {
        const url = 'http://localhost:3333/people';
        const data = await axios.get(url);

        setPersons(data.data)
    }

    useEffect(() => {
        
        useAPI();

    }, []);

    return (
        <div className="Items">


            <h1>People list</h1>

            <div className="addNewItem">
                <button><Link className="LinkNew" to={'/person/add'}>Add new person</Link></button>            
            </div>

            <div>
                {
                    people.map( person => {
                        return <Person key={person.id} person={person} />
                    } )
                }
            </div>

        </div>
    )
};

export default People;