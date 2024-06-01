import React, { useState, useContext } from "react";
import { LOGO_URL } from "../constant/constant";
import { Link } from "react-router-dom";
import useOnlineStatus from "../hooks/useOnlineStatus";
import UserContext from "../context/UserContext";

const Header = () => {
    const [login, setLogin] = useState(true)
    const btnName = login ? 'Logout' : 'Login';
    const onlineStatus = useOnlineStatus();

    const data = useContext(UserContext);
    console.log(data);

    //If no dependecy array in useEffect then it will be called after every render
    //If empty dependecy array is passed then it will be called just once after render
    //If something is passed in dependency array then it will be called whenever the dependency changes.
    return (
        <div className="flex justify-between shadow-md">
        <div className="logo-container">
            <img className="w-24 p-2 m-2" src={LOGO_URL}></img>
        </div>
        <div className="flex items-center">
            <ul className="flex p-2 m-2">
                <li className="px-3">
                    Online Status: { onlineStatus ? '🟢' : '🔴'}
                </li>
                <li className="px-3">
                    <Link to='/'>Home</Link>
                </li>
                <li className="px-3">
                    <Link to='/about'>About Us</Link>
                </li>
                <li className="px-3">
                    <Link to='/contact'>Contact Us</Link>
                </li>
                <li className="px-3">
                    <Link to='/grocerry'>Grocerry</Link>
                </li>
                <li className="px-3">
                    <Link to='/cart'>Cart</Link>
                </li>
                <button className="login-btn" onClick={() => setLogin(!login) }>
                    {btnName}
                    </button>
                <li className="px-3 font-bold">{data.loggedInUser}</li>
            </ul>
        </div>
    </div>)
}

export default Header;