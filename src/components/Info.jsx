import React from "react";
import '../styles.css';
import face from "./maface.png";


export default function Info(){
    return(
        <div>
            <img className="img" src={face}></img>
            <h2 className="main-title">Anne Chrétien</h2>
            <h3 className="main-second">Junior Developer</h3>
            <br/>
            <div className="buttons">
                <button className="btn-email">Email</button>
                <button className="btn-linkedin">LinkedIn</button>
            </div><br/>
        </div>
    )
}