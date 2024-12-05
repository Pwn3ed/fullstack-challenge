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

    const updateButtonHandler = () => {
        Link
    }

    return (
        <div className="City">
            <label>{ city.name }</label>
            <div className="buttons">
                <button onClick={ () => removeButtonHandler() }>Remove</button>
                <button onClick={ () => updateButtonHandler() }> <Link to={`/city/${city.id}`}>Update</Link> </button>
            </div>
        </div>
    )
}


export default City;