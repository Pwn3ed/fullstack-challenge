import { Link } from "react-router-dom";


const Navbar = () => {
    return (
        <div className="Navbar">
            <ul>
                <Link className="Link" to={'/'}><li>Home</li></Link>
                <Link className="Link" to={'/people'}><li>People</li></Link>
                <Link className="Link" to={'/cities'}><li>Cities</li></Link>
            </ul>
        </div>
    )
};

export default Navbar;