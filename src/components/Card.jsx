import React from "react";
import '../styles.css';


export default function TravelCard(props){

    return(
        <div className="mainCard">
            <img className="image-card" src={props.item.imageUrl}/>
            <div className="title-card">
                <div className="location">
                    <img className="location-image" src="./images/loc.png"/>
                    <span className="country">{props.item.location}</span>
                    <span className="maps"><a href={props.item.googleMapsUrl} target="blank">
                        View on Google Maps</a>
                    </span>
                </div>
                <h1>{props.item.title}</h1>
                <div className="dates">{props.item.startDate} - {props.item.endDate}</div>
                <div className="description">{props.item.description}</div>
            </div>
        </div>
    )
}