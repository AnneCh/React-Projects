import React from "react";
import '../styles.css';
import logo from "./logo.png"

const date = new Date()
const hours = date.getHours() 
let timeOfDay

if (hours < 12) {
    timeOfDay = "morning"
} else if(hours >= 12 && hours < 18) {
    timeOfDay = "afternoon"
} else {
    timeOfDay = "evening"
}

export default function NavBar(){
    return(
        <nav className="navbar">
            <img className="logo" src={logo} alt="logo"></img>
            <h1 className='date'>It is currently about {hours} o'clock, good {timeOfDay} to you!</h1>
        </nav>
    )
}