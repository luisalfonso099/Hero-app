import React, {useContext} from 'react';
import { Link} from "react-router-dom";
import { Context }  from "../context/ContextHeroes"
import image from "../assets/superhero.png"
const NavBar = () => {
 const {user} = useContext(Context)

    return (
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
             <div className="container-fluid">
                <img className="icon-bat" src={image} alt="bat" />
                <button className="navbar-toggler" 
                type="button"
                data-bs-toggle="collapse" 
                data-bs-target="#navbarSupportedContent" 
                aria-controls="navbarSupportedContent" 
                aria-expanded="false" 
                aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div 
                className="collapse navbar-collapse" 
                id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    { localStorage.getItem("token") || user ? 
                    (
                    <> 
                    <li className="nav-item">
                    <Link to="/" className="nav-link active mx-4" 
                    aria-current="page" >Home</Link>
                    </li>
                    <li className="nav-item">
                    <Link to="/search" className="nav-link active  mx-4" 
                    aria-current="page" >Search</Link>
                    </li>
                    </>) :
                    <li className="nav-item">
                    <Link to="/" className="nav-link active " 
                    aria-current="page" >Login</Link>
                    </li>}
                </ul>
                </div>
             </div>
            </nav>
    )
}

export default NavBar
