import React from 'react';
import {Link} from "react-router-dom";
import {NavLink} from "react-router-dom";

function Menu() {
    return (
        <div>   
            <Link to="/about">About</Link>
            <Link to="/contact">Contact</Link>
            <NavLink exact activeClassname="active_class" to ="/service">Service</NavLink>
            <NavLink exact activeClassname="active_class" to="/portfolio">Portfolio</NavLink>
            <NavLink exact activeClassname="active_class" to="/user">User</NavLink>
            
        </div>
    )
}

export default Menu;
