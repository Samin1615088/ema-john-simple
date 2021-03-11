import React from 'react';

const ReviewItem = (props) => {
    console.log(props.product);
    const { name, quantity } = props.product;
    const reviewItemStyle = {
        borderBottom: '1px solid lightgrey',
        marginBottom: '5px',
        paddingBottom: '5px',
        marginLeft: '200px'
    }
    return (
        <div className="review-item" style={reviewItemStyle}>
            <h4 className="product-name">{name}</h4>
            <p>Quantity: {quantity}</p>
            <button className="main-button">Remove</button>
        </div>
    );
};

export default ReviewItem;