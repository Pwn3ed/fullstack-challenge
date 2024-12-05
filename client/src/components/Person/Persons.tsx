import axios from "axios";
import { useEffect, useState } from "react";
import Person from "./Person";


const Persons = () => {

    const [persons, setPersons] = useState<Person[]>([]);

    const useAPI = async () => {
        const url = 'http://localhost:3333/persons';
        const data = await axios.get(url);
        // console.log(data.data[0].name)
        setPersons(data.data)
    }

    useEffect(() => {
        
        useAPI();

    }, []);

    return (
        <div className="Persons">
            <h1>Persons</h1>

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