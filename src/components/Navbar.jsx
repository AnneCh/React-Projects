import React from "react";
import '../styles.css';
import world from "../world.png"


export default function NavBar(){
    return(
        <div className="navbar">
            <img className="nav-img" src={world}/>
            <p>My Travel Journal</p>
        </div>
    )
}