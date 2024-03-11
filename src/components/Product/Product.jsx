import React from 'react';
import './Product.css';
import productData from '../../Assets/Data/ProductData';

const Products = () => {
    return (
        <div className='Product-items' id='Products'>
            <h1>Best sellers</h1>
            <div className='card-container'>
                {productData.map((currElm) => (
                    <div className='card' key={currElm.id}>
                        <img className='product--image' src={currElm.img} alt='' />
                        <h3>{currElm.Title}</h3>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Products;
