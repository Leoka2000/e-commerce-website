import React, { useContext } from 'react';
import '../../cart/cart.css';
import { ShopContext, ContextProps } from '../../../../hooks/shop-context';
import { AiOutlinePlusCircle } from 'react-icons/ai';
import { AiOutlineMinusCircle } from 'react-icons/ai';

interface Props {
  data: {
    id: number;
    productName: string;
    price: number;
    productImage: string;
    roast: string;
  };
}

export const CartProduct: React.FC<Props> = (props: Props) => {
  const { id, productName, price, productImage, roast } = props.data; 
  const { cartItems, addToCart, removeFromCart, updateCartItemCount } = useContext<ContextProps>(ShopContext);


  return (
    <div className='cart-parent-wrapper'>
      <div className='left'>
        <div className='img-wrapper'>
          <img src={productImage} alt={`${productName} image`} />
        </div>
        <div className='left-column'>
          <div className='name-wrapper'>
            <p>{productName}</p>
          </div>
          <div id='roast'>
            <span>{roast}</span>
          </div>
        </div>
      </div>
      <div className='right'>
        <div className='price-wrapper'>
          <small>HUF</small>
          <p className='price'>{price}</p>
        </div>
        <div className="countHandler-button-wrapper">
          {typeof id !== "undefined" ? (
            <button className='red-button' onClick={() => removeFromCart(id)}>
              <AiOutlineMinusCircle />
            </button>
          ) : (
            ""
          )}
          {typeof cartItems !== "undefined" ? (
            <input
              className='inp'
              value={cartItems[id]}
              onChange={(e) => updateCartItemCount(Number(e.target.value), id)}
            />
          ) : (
            ""
          )}
          {typeof id !== "undefined" ? (
            <button className='green-button' onClick={() => addToCart(id)}>
              <AiOutlinePlusCircle />
            </button>
          ) : (
            ""
          )}
        </div>
      </div>
    </div>
  );
};
