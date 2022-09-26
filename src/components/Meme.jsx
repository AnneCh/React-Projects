import React from "react";
import '../styles.css';


export default function Meme(){

    function handleClick(){console.log("haha")}


    return(
        <main>
            <form>
                <input className="form-input" type="text" placeholder="Say the words..."></input>
                <input className="form-input" type="text" placeholder="...and I'll print them"></input>
                <button onClick={handleClick} className="form-button">Generate New Meme!!</button>
            </form>
        </main>
    )
}