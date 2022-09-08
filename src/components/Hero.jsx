import React from "react";
import '../styles.css';
import grid from "./photoss.png";

export default function Hero(){
    return(
        <section>
            <img className="hero-pics" src={grid} alt="experiences-grid"></img>
            <h1 className="hero-h1">Online Experiences</h1>
            <p className="hero-text">Join unique interactive activities led by one-of-a-kind hosts - all without leaving home.</p>
        </section>
    )
}