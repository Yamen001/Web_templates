import { Component } from "react"
import React from "react"
import "../styles/landing.css"
export default function Landing(){
    return(
        <div className="landing">
            <div className="container">
                <div className="intro-text">
                    <h1>Preparing For Your Success,We Provide Truly Prominent IT Solutions.</h1>
                </div>
                <div className="appointment">
                    <h2>Make An Appointment</h2>
                    <p>Get in touch and discover how we can help.We aim to be in touch</p>
                    <div className="form">
                        <input type="text" placeholder="Enter your Name"/>
                        <input type="text" placeholder="Enter your Email"/>
                        <textarea placeholder="Enter your Message"></textarea>
                        <button type="submit">submit</button>
                    </div>
                </div>
            </div>
        </div>
    )
}



// Preparing For Your Success,
// We Provide Truly Prominent IT Solutions.
// Make An Appointment
// Get in touch and discover how we can help. We aim to be in touch

