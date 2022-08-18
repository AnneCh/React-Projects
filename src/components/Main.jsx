import React from "react";
import '../styles.css';


export default function Main(){
    return(
        <div className="main">
            <h2 className="main-title">Basic list of stuff and things</h2>
            <ul className="list">
                <li>I like the reusability in React's structure,</li>
                <li>It makes much more sense to separate everything and then use the parts deemed necessary.</li>
                <li>I try to avoid single-use tools in my life, and React is kinda like the art of single-use items.</li>
                <li>It makes a lot of sense, in order to create a multi-use tool, to first create all the single items that will make that tool up.</li>
            </ul>
        </div>
    )
}