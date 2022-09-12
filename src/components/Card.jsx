import React from "react"
import sold from './sold.png'

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

export default function Card(props) {
    return (
        <div className="card">
            <img className="soldout" src={sold}></img>
            <img className="katie" src={props.img}></img>
            <div className="info">
                <img src="./star.png" className="star" />
                <span>{props.rating}</span>
                <span className="gray">({props.reviewCount}) • </span>
                <span className="gray">{props.location}</span>
                <p className="description">{props.title}</p>
                <p className="price"><b>From ${props.price}</b> / person</p>
            </div>
        </div> 
    )
}

<div className="card--stats">
<img src="../images/star.png" className="card--star" />
<span>5.0</span>
<span className="gray">(6) • </span>
<span className="gray">USA</span>
</div>