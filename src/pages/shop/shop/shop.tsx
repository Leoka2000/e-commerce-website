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
            <Product data={product} /> 
          ))}
        </div>
      </section>
    </>
  );
};

export default Shop;
