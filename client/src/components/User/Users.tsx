import axios from "axios";
import { useEffect, useState } from "react";





const Users = () => {

    const [user, setUser] = useState('');

    const useAPI = async () => {
        const url = 'http://localhost:3333/users';
        const data = await axios.get(url);
        console.log(data)
        setUser(data.data)
    }

    useEffect(() => {
        
        useAPI();

    }, []);

    return (
        <div className="Users">
            <h1>Users</h1>

            <div>
                <p>{user}</p>
            </div>

        </div>
    )
};

export default Users;