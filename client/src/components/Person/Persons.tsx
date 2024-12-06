import axios from "axios";
import { useEffect, useState } from "react";
import Person from "./Person";
import { Link } from "react-router-dom";


const Persons = () => {

    const [persons, setPersons] = useState<Person[]>([]);


    const useAPI = async () => {
        const url = 'http://localhost:3333/persons';
        const data = await axios.get(url);

        setPersons(data.data)
    }

    useEffect(() => {
        
        useAPI();

    }, []);

    return (
        <div className="Items">


            <h1>Persons list</h1>

            <div className="addNewItem">
                <button><Link className="LinkNew" to={'/person/add'}>Add new person</Link></button>            
            </div>

            <div>
                {
                    persons.map( person => {
                        return <Person key={person.id} person={person} />
                    } )
                }
            </div>

        </div>
    )
};

export default Persons;