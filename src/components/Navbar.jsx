import "./Navbar.css";
import { Link } from "react-router-dom";

function Navbar() {

    return (

        <nav className="navbar">

            <div className="logo">

                💼 Career Adda

            </div>

            <ul className="nav-links">

                <li><Link to="/home">Home</Link></li>

                <li><Link to="/jobs">Jobs</Link></li>

                <li><Link to="/about">About</Link></li>

                <li><Link to="/contact">Contact</Link></li>
            

            </ul>

           <Link to="/login">
    <button className="login-btn">Login</button>
</Link>

        </nav>

    );

}

export default Navbar;