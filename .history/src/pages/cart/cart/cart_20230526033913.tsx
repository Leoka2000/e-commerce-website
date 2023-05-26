import React, { useContext, useEffect } from 'react';
import { ShopContext, ContextProps } from '../../../hooks/shop-context';
import { PRODUCTS } from '../../../components/prod-database/prod-database';
import { CartProduct } from './cart-content/cart-product';
import Payment from '../payment/payment';
import { useLocation } from 'react-router-dom';


export const Cart = () => {
  const { cartItems, getTotalCartAmount } = useContext<ContextProps>(ShopContext);
  const totalAmount: number = getTotalCartAmount();

  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);


  return (
    <>
     
      <div className="cart-wrapper">
        <div className="card-main-title">
          <h1>A te bevásárlókosarad</h1>
        </div>
      
          <div className="cart-child">
            {PRODUCTS.map((product, key) => {
              if (cartItems[product.id] !== 0) {
                return <CartProduct key={key} data={product} />;
              }
            })}
          </div>
        

        {totalAmount > 0 ? (
          <section className="payment-section">
           <Payment/>
          </section>
        ) : (
          <h1>A te bevásárlókosarad üres</h1>
        )}
      </div>
    </>
  );
};