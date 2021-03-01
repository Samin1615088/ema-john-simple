import React from 'react';

const Cart = (props) => {
    return (
        <div>
            <h2>Order Summery</h2>
            <h3>Items Order: {props.cart.length}</h3>
            <div>
                <p>Items: ${ }</p>
                <p>Shipping & Handling: ${ }</p>
                <p>Total before tax: ${ }</p>
                <p>Estimated Tax: ${ }</p>
                <h5>Order Total:  ${ }</h5>
                <button className="main-button">Review your order</button>
            </div>
        </div>
    );
};

export default Cart;