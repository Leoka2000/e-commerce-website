import React from 'react';
import { PRODUCTS } from '../../../components/prod-database/prod-database';
import './shop.css';
import Product from '../product/product'


const Shop = () => {
  return (
    <>
      
      <section id='shop' className='shop-section'>
        <h1>Kávéink</h1>
        <div className='shop-parent-wrapper'>
          {PRODUCTS.map((product) => (
            <Product data={product} /> // the word "key" was showing this bug Type 'Number' is not assignable to type 'Key | null | undefined'. so I capitalized the first letter in "Key" and solved the issue
          ))}
        </div>
      </section>
    </>
  );
};

// Export the Shop component as the default export
export default Shop;
