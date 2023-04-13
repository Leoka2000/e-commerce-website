import React, { useContext } from 'react';
import { ShopContext, ContextProps } from '../../../hooks/shop-context';
import { PRODUCTS } from '../../../components/prod-database/prod-database';
import { CartProduct } from './cart-content/cart-product';
import Payment from '../payment/payment';


export const Cart = () => {
  const { cartItems, getTotalCartAmount } = useContext<ContextProps>(ShopContext);
  const totalAmount: number = getTotalCartAmount();

  return (
    <>
     
      <div className="cart-wrapper">
        <div className="card-main-title">
          <h1>Your Shopping cart</h1>
        </div>
        {typeof cartItems !== 'undefined' ? (
          <div className="cart-child">
            {PRODUCTS.map((product) => {
              if (cartItems[product.id] !== 0) {
                return <CartProduct data={product} />;
              }
            })}
          </div>
        ) : (
          ''
        )}

        {totalAmount > 0 ? (
          <section className="payment-section">
           <Payment/>
          </section>
        ) : (
          <h1>Your shopping cart is empty</h1>
        )}
      </div>
    </>
  );
};