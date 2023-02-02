import React from "react"
function ProductCard(props){
    return(
        <div className="card">
            <h1>{props.number}</h1>
            <h3>{props.product.title}</h3>
            <p>{props.product.text}</p>
        </div>
    )
}
export default ProductCard