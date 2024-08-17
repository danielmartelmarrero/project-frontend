import React from 'react'
import { Link } from 'react-router-dom'
function ProductIcon(props) {
    return (
        <div className='product-div'>
            <Link to={`/${props.category}/${props.product.id}`}>
            <img className='product-image' src={props.product.pictures[0]} alt="" />
            <p>{props.product?.title?.join('').slice(0,55)}...</p>
            {props.product.originalPrice && <p id='prevPrice'>{props.product.originalPrice}.-€</p>}
            {props.product.discPrice ? <h4 id='discPrice'>{props.product.discPrice}.-€</h4>: <h4 style={{marginTop: '55px'}} id='iconPrice'>{props.product.price}.-€</h4>}
           
            </Link>
        </div>
    )
}

export default ProductIcon