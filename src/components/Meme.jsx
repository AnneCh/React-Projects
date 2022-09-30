import React from "react";
import '../styles.css';
import memesData from "../memesData";

export default function Meme(){

    const [meme, setMeme] = React.useState({
        topText:"",
        bottomText:"",
        randomImage:"http://i.imgflip.com/1bij.jpg"
    })

    const [allMemeImages, setAllMemeImages] = React.useState(memesData)

    function handleClick(){  
        const memesArray = allMemeImages.data.memes 
        const randomNumber = Math.floor(Math.random() * memesArray.length)
        const url = memesArray[randomNumber].url
        setMeme(prevMeme => ({
            ...prevMeme,
            randomImage:url
        }))
    }

    return(
        <main>
            <div className="form">
                <input className="form-input" type="text" placeholder="Say the words..."></input>
                <input className="form-input" type="text" placeholder="...and I'll print them"></input>
                <button onClick={handleClick} className="form-button">Generate New Meme!!</button>
            </div>
            <div  className="meme-image">
                <img src={meme.randomImage}/>
            </div>
        </main>
    )
}