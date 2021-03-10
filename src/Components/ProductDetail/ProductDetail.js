import React from 'react';
import { useParams } from 'react-router';
import fakeData from '../../fakeData';
import Product from '../Product/Product';

const ProductDetail = () => {
    let { productKey } = useParams();
    // const first10 = fakeData.slice(0, 10);
    const product = fakeData.find( (pd) => pd.key === productKey);
    return (
        <div>
            <h1>{productKey} Product Details Coming Soon</h1>
            <Product product={product} showAddToCart={false}></Product>
        </div>
    );
};

export default ProductDetail;