import React from "react";
// import { Component } from "react";
import "../styles/nav.css"
export default function Navbar(){
    return(
        <nav>
            <div className="container">
                <div className="search">
                    <input type="text" placeholder="Search" />
                    <button className="btn-search"><i className="fa-solid fa-magnifying-glass"></i></button>
                </div>
                <div className="hamburger" onClick={openMenu}>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
                <div className="Menu close">
                    <div className="list">
                        <button className="close" onClick={closeMenu} >X</button>
                        <ul>
                            <li> <a href="s">Home</a> </li>
                            <li> <a href="s">About Us</a> </li>
                            <li> <a href="s">Contact Us</a> </li>
                            <li> <a href="s">Blog</a> </li>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    )
}
function openMenu(){
    let menu = document.querySelector("nav .Menu")
    menu.classList.remove("close")
    menu.classList.add("open")
}
function closeMenu(){
    let menu = document.querySelector("nav .Menu")
    menu.classList.remove("oepn")
    menu.classList.add("close")
}
// show the menu...just edit the classes