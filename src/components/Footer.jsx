import React from "react";
import '../styles.css';
import git from "./github.png";
import { Link } from "react-router-dom";

//insert social icons, twitter, facebook,github

export default function Footer(){
    return(
        <>
        <p className="divider">_______________________________</p>
        <div className="footer">
            <p className="footer-text">See my work : </p>
            <btn><img className="git" src={git}></img></btn>
        </div>
        </>
    )
}