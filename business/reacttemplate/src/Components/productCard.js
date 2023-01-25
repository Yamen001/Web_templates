import React from "react"
function ProductCard(props){
    return(
        <div className="card">
            <img src={props.product.img} alt="no img"/>
            <h3>{props.product.title}</h3>
            <p>{props.product.text}</p>
        </div>
    )
}
export default ProductCard