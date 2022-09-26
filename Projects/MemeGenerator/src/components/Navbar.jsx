import React from "react";
import '../styles.css';
import troll from "../troll.png"


export default function NavBar(){
    return(
        <header className="navbar">
            <img className="nav-img" src={troll}/>
            <h2 className="nav-title">Meme Generator</h2>
            <h4 className="nav-sub">React Course - Project 3</h4>
        </header>
    )
}