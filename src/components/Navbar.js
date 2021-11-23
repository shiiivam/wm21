
import React from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import {NavLink} from "react-router-dom";
import logo from "../images/logo1.png";

const logocss = {
    "height":"50px",
    "width":"200px"
}
const Navbar = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light">
                <div className="container-fluid">
                     <NavLink className="navbar-brand" to="/">
                         {/* <img className="nav__logo" alt="logo" style={logocss}/> */}
                         <h2 style={{fontStyle:"bold",color:"green"}}>ACC</h2>
                     </NavLink>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                         </button>
                
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav ms-auto">
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/">Home</NavLink>
                                </li>
                                <li className="nav-item">
                                <NavLink className="nav-link" to="/about">About</NavLink>
                                </li>
                                <li className="nav-item">
                                <NavLink className="nav-link active" aria-current="page" to="/team">Team</NavLink>
                                </li>
                                <li className="nav-item">
                                <NavLink className="nav-link" to="/contact">Contact</NavLink>
                                </li>
                                <li className="nav-item">
                                <NavLink className="nav-link" to="/login">|</NavLink>
                                </li>
                                {/* <li className="nav-item">
                                <NavLink className="nav-link" to="/login">Login</NavLink>
                                </li> */}
                                <li className="nav-item">
                                <NavLink className="nav-link" to="/login">Login</NavLink>
                                </li> 
                                <li className="nav-item">
                                <a href = 'http://localhost:4500/login'>Login</a>
                                </li> 
                                {/* <li className="nav-item">
                                <NavLink className="nav-link" to="/signup">Registration</NavLink>
                                </li> */}
                            </ul>
                        </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar
