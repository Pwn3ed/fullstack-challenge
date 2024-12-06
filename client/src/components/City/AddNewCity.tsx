import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";


const AddNewCity = () => {
    const navigate = useNavigate();

    const [name, setName] = useState('');

    const addNewCityHandler = async () => {
        const data = await axios.post(`http://localhost:3333/city`, {
            name: name
        });
        if (data)
            alert('New city added succesfully!');
        navigate('/cities')
    }

    return (
        <div>
            <h1>Add new city</h1>

            <label>
                Name:
                <input type="text" placeholder="name" onChange={ (e) => setName(e.target.value) } />
            </label>

            <button onClick={ () => addNewCityHandler() }>Add</button>

        </div>
    )
}

export default AddNewCity;