import React from 'react';

const Cart = (props) => {
    const products = props.cart;

    //Numbers Formatter 
    const formatter = (number) => {
        let stringNum = Number(number).toFixed(2);
        return Number(stringNum);
    };

    //BasePrice calculators
    let totalBasePrice = formatter(products.reduce((total, current) => total + current.price, 0));
    //shipping & Handling for different amount of cost
    let handlingCost = 0;       //default handlingCost
    if (totalBasePrice > 0 && totalBasePrice < 250) {
        handlingCost = 12.99;
    } else if (totalBasePrice > 249 && totalBasePrice < 500) {
        handlingCost = 19.99;
    }
    //totalPrice before tax
    const totalPriceBeforeTax = formatter(totalBasePrice + handlingCost);

    //15% tax to pay
    const totalTax = formatter((totalBasePrice && ((totalBasePrice / 100) * 15)));

    //grandTotal Price
    const grandTotalPrice = formatter(totalPriceBeforeTax + totalTax);

    return (
        <div>
            <h2>Order Summery</h2>
            <h3>Items Ordered: {products.length}</h3>
            <div>
                <p><strong>Items:</strong> $ {totalBasePrice}</p>
                <p><strong>Shipping & Handling:</strong> $ {handlingCost}</p>
                <p><strong>Total before tax:</strong> $ {totalPriceBeforeTax}</p>
                <p><strong>Estimated Tax:</strong> $ {totalTax}</p>
                <h5><strong>Order Total:</strong>  $ {grandTotalPrice}</h5>
                <button className="main-button">Review your order</button>
            </div>
        </div>
    );
};

export default Cart;