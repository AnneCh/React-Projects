import React from "react";
import '../styles.css';
import MemeResult from "./MemeResult"
import data from "../memesData.js"
import memesData from "../memesData";


export default function Meme(){


    function handleClick(){  
        const memesArray = memesData.data.memes 
        const randomNumber = Math.floor(Math.random() * memesArray.length)
        const singleMeme = memesArray[randomNumber].url
        return(
            <div>
                <img src={singleMeme}/>
            </div>
        )
    }

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