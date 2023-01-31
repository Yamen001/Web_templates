import React from "react";
import "../styles/products.css"
import productsdata from "./productstext";
import ProductCard from "./productCard";
import { useState } from "react";
// import imge from "../imgs/landing.jpg"


function Products(){
    const cards =productsdata.map((ele , index)=>{
        return <ProductCard product={ele} number={index+1} key={index}/>
    })
    return(
        <div className="Product-cards">
            <div className="container">
                <div className="intro-section-text">
                    <h1>The New Product Development Process</h1>
                </div>
                <div className="cards">
                    {cards}
                </div>
            </div>
        </div>
    )
}
export default Products