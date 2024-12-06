import axios from "axios"
import { Link } from "react-router-dom"


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

    const removeButtonHandler = async () => {
        if (confirm(`Are you sure to remove ${person.name}?`)) {
            const data = await axios.delete(`http://localhost:3333/person/${person.id}`)
            window.location.reload();
        }
    }

    return (
        <div className="Item">
            <label>{ person.name }</label>
            <div className="buttons">
                <button className="ButtonUpdate"> <Link className="LinkUpdate" to={`/person/${person.id}`}>Update</Link> </button>
                <button onClick={ () => removeButtonHandler() }>Remove</button>
            </div>
        </div>
    )
}


export default Person;  
