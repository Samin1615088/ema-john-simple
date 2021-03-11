import React from 'react';
import './Product.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';

const Product = (props) => {
    // console.log(props);
    const { name, img, seller, price, stock, key } = props.product;
    return (
        <div className="product">
            <div>
                <img src={img} alt="" />
            </div>
            <div className="product-details">
                <h4 className="product-name"><Link to={"/product/" + key}>{name}</Link></h4>
                <p><small>by: {seller}</small></p>
                <p>${price}</p>
                <p>only {stock} left in stock - order soon</p>

                {props.showAddToCart && <button className="main-button" onClick={() => props.handleAddToCartEvent(props.product)}>
                    <FontAwesomeIcon icon={faShoppingCart} className="icon" />
                    add to cart
                </button>}
            </div>
        </div>
    );
};

export default Product;