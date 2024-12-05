import axios from "axios";
import { useState } from "react";


const AddNewCity = () => {

    const [name, setName] = useState('');

    const addNewCityHandler = async () => {
        const data = axios.post(`http://localhost:3333/city/add`, name);
        console.log(data)
    }

    return (
        <div className="RegisterCity">
            <h1>Register new city</h1>

            <label>
                Name:
                <input type="text" placeholder="name" onChange={ (e) => setName(e.target.value) } />
            </label>

            <button onClick={ () => addNewCityHandler() }>Add</button>

        </div>
    )
}

export default AddNewCity;