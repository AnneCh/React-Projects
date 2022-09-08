import React from "react"
import katie from './Katie.png'
import sold from './sold.png'
import star from './Star.png'

/*
Challenge: Build the Card component
For now, hard-code in the data (like 
the rating, title, price, etc.)

Notes:
- Only render 1 instance (I already did this for you)
- The star icon and photo (katie-zaferes.png) are in the images 
  folder for your use
- Make sure to include:
    - image
    - star icon (star.png), rating, and review count
    - title
    - cost/person
- The main purpose of this challenge is to show you where our limitations
  currently are, so don't worry about the fact that you're hard-coding all
  this data into the component.
*/

export default function Card() {
    return (
        <div className="card">
            <img className="soldout" src={sold}></img>
            <img className="katie" src={katie}></img>
            <div className="info">
                <p className="grade"><img src={star} className='star'></img>5.0 <mark class="grey">(6)- USA </mark></p> 
                <p className="description">Life lessons with Katie Zaferes</p>
                <p className="price"><b>From $136</b> / person</p>
            </div>
        </div>
    )
}