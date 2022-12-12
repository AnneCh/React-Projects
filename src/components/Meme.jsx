import React from "react";
import '../styles.css';
// import memesData from "../memesData";

export default function Meme(){

    const [meme, setMeme] = React.useState({
        topText:"",
        bottomText:"",
        randomImage:""
    })

    const [allMemeImages, setAllMemeImages] = React.useState()

    React.useEffect(function() {
        fetch("https://api.imgflip.com/get_memes")
            .then(res => res.json())
            .then(data => setAllMemeImages(data))
    }, [meme])

    function handleClick(){  
        const memesArray = allMemeImages.data.memes 
        const randomNumber = Math.floor(Math.random() * memesArray.length)
        const url = memesArray[randomNumber].url
        setMeme(prevMeme => ({
            ...prevMeme,
            randomImage:url
        }))
    }    
    function handleChange(event) {
        const {name, value} = event.target
        setMeme(prevMeme => ({
            ...prevMeme,
            [name]: value
        }))
    }

    return(
        <main>
            <div className="form">
                <input 
                className="form-input" type="text" placeholder="Say the words..." 
                name="topText" value={meme.topText} onChange={handleChange}/>
                <input 
                className="form-input" type="text" placeholder="...and I'll print them" 
                name="bottomText" value={meme.bottomText} onChange={handleChange}/>
                <button onClick={handleClick} className="form-button">Generate a New Meme!!</button>
            </div>
            <div  className="meme">
            <img src={meme.randomImage} className="meme--image" />
                <h2 className="meme--text top">{meme.topText}</h2>
                <h2 className="meme--text bottom">{meme.bottomText}</h2>
            </div>
        </main>
    )
}