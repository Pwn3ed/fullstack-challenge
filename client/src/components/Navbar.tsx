import { Link } from "react-router-dom";


const Navbar = () => {
    return (
        <ul>
            <Link to={'/'}><li>Home</li></Link>
            <Link to={'/users'}><li>Users</li></Link>
            <Link to={'/cities'}><li>Cities</li></Link>
        </ul>
    )
};

export default Navbar;