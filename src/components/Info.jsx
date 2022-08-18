import React from "react";
import '../styles.css';
import face from "./maface.png";


export default function Info(){
    return(
        <div className="main">
            <img className="img" src={face}></img>
            <h2 className="main-title">Anne Chretien</h2>
            <h3 className="main-second">Junior Developer</h3>
            <br/>
            <button className="btn-email">Email</button>
            <button className="btn-linkedin">LinkedIn</button>
            <br/>
        </div>
    )
}