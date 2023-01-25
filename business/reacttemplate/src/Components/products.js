import React from "react";
import "../styles/products.css"
import productsdata from "./productstext";
import ProductCard from "./productCard";
import imge from "../imgs/landing.jpg"


function Products(){
    const cards =productsdata.map((ele , index)=>{
        return <ProductCard product={ele} key={index}/>
    })
    return(
        <div className="Product-cards">
            {cards}
            <img src={imge} alt="no" />
        </div>
    )
}
export default Products