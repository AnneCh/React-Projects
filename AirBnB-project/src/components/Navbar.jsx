import React from "react";
import '../styles.css';
import logo from "./logo.png"

export default function NavBar(){
    return(
        <nav className="navbar">
            <img className="logo" src={logo} alt="logo"></img>
        </nav>
    )
}