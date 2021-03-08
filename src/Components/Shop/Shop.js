import React, { useState } from 'react';
import './Shop.css'
import fakeData from '../../fakeData'
import Product from '../Product/Product';
import Cart from '../Cart/Cart';

const Shop = () => {
    const first10 = fakeData.slice(0, 10);
    const [products, setProducts] = useState(first10);
    const [cart, setCart] = useState([]);
    const handleAddToCartEvent = (product) => {
        let newCart = [...cart, product];
        setCart(newCart);
    }
    return (
        <div className="shop-container">
            <div className="product-container">
                {
                    products.map((product) => <Product
                        product={product} handleAddToCartEvent={handleAddToCartEvent}>
                    </Product>)
                }
            </div>
            <Cart cart={cart}></Cart>
        </div>
    );
};

export default Shop;