import React from "react";
import '../styles.css';
import icon from "./r-icon.png";

export default function Navbar(){
    return(
        <nav className="navbar">
            <img src={icon} className='icon'></img>
            <h2 className="nav--h2">ReactFacts</h2>
            <p className="nav--h3">
                 ReactCourse - Project One
            </p>
        </nav>
    )
}