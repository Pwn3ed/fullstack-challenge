import axios from "axios"
import { Link } from "react-router-dom"


type City = {
    id: number,
    name: string,
}

type CityProps = {
    city: City
}

const City = ({ city }: CityProps) => {

    const removeButtonHandler = async () => {
        if (confirm(`Are you sure to remove ${city.name}?`)) {
            const data = await axios.delete(`http://localhost:3333/city/${city.id}`)
            window.location.reload();
        }
    }

    return (
        <div className="Item">
            <label>{ city.name }</label>
            <div className="buttons">
                <button className="ButtonUpdate"> <Link className="LinkUpdate" to={`/city/${city.id}`}>Update</Link> </button>
                <button onClick={ () => removeButtonHandler() }>Remove</button>
            </div>
        </div>
    )
}


export default City;
