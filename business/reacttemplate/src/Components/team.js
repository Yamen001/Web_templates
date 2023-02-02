import data from "./teamtext"
import TeamCard from "./TeamCard"
import React from "react"
import "../styles/team.css"

export default function Team(){
    let TeamCards = data.map(function(ele,index){
        return <TeamCard team={ele} key={index} />
    })
    return(
        <div className="Team">
        <div className="container">
            <div className="intro-section-text">
                <h1>Meet the Team</h1>
            </div>
            <div className="cards">
                {TeamCards}
            </div>
        </div>
        </div>
    )
}