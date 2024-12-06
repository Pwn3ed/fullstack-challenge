import axios from "axios";
import { useEffect, useState } from "react";


const Home = () => {
    const [countCity, setCountCity] = useState(0);
    const [countPerson, setCountPerson] = useState(0);

    const countAllCity = async () => {
        const cityCount = await axios.get('http://localhost:3333/cities/count');
        // console.log(citiesCount.data[0]);
        setCountCity(cityCount.data[0].count)
    }

    const countAllPerson = async () => {
        const personCount = await axios.get('http://localhost:3333/people/count');
        // console.log(citiesCount.data[0]);
        setCountPerson(personCount.data[0].count)
    }

    useEffect( () => {
        countAllCity();
        countAllPerson();
    }, [] );

    return (
        <>
            <h1>TownSquare</h1>
            <h3>Grouping people from own city.</h3>
            <div className="Home">
                <div className="Count">
                    <h3>Total People</h3>
                    <label>{countPerson}</label>
                </div>
                <div className="Count">
                    <h3>Total Cities</h3>
                    <label>{countCity}</label>
                </div>
                
            </div>
        </>
    )
};

export default Home;