import React from "react";
import '../styles.css';
import memesData from "../memesData";

export default function Meme(){

    const [memeImage, setMemeImage] = React.useState("")

    function handleClick(){  
        const memesArray = memesData.data.memes 
        const randomNumber = Math.floor(Math.random() * memesArray.length)
        setMemeImage(memesArray[randomNumber].url)
    }

    return(
        <main>
            <div className="form">
                <input className="form-input" type="text" placeholder="Say the words..."></input>
                <input className="form-input" type="text" placeholder="...and I'll print them"></input>
                <button onClick={handleClick} className="form-button">Generate New Meme!!</button>
            </div>
            <div  className="meme-image">
                <img src={memeImage}/>
            </div>
        </main>
    )
}