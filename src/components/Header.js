import React, { useState, useEffect } from "react";
import { LOGO_URL } from "../constant/constant";
import { Link } from "react-router-dom";

const Header = () => {
    const [login, setLogin] = useState(true)
    const btnName = login ? 'Logout' : 'Login';

    //If no dependecy array in useEffect then it will be called after every render
    //If empty dependecy array is passed then it will be called just once after render
    //If something is passed in dependency array then it will be called whenever the dependency changes.
    return (
        <div className="header">
        <div className="logo-container">
            <img className="logo" src={LOGO_URL}></img>
        </div>
        <div className="nav-items">
            <ul>
                <li>
                    <Link to='/'>Home</Link>
                </li>
                <li>
                    <Link to='/about'>About Us</Link>
                </li>
                <li>
                    <Link to='/contact'>Contact Us</Link>
                </li>
                <li>
                    <Link to='/cart'>Cart</Link>
                </li>
                <button className="login-btn" onClick={() => setLogin(!login) }>
                    {btnName}
                </button>
            </ul>
        </div>
    </div>)
}

export default Header;