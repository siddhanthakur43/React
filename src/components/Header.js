import React, { useState } from "react";
import { LOGO_URL } from "../constant/constant";

const Header = () => {
    const [login, setLogin] = useState(true)
    const btnName = login ? 'Logout' : 'Login';
    return (
        <div className="header">
        <div className="logo-container">
            <img className="logo" src={LOGO_URL}></img>
        </div>
        <div className="nav-items">
            <ul>
                <li>Home</li>
                <li>About Us</li>
                <li>Contact Us</li>
                <li>Cart</li>
                    <button className="login-btn"
                        onClick={() =>
                                setLogin(!login)
                }>{btnName}</button>
            </ul>
        </div>
    </div>)
}

export default Header;