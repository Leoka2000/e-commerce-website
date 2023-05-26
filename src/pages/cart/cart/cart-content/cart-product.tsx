import React, { useContext } from 'react';
import '../../cart/cart.css';
import { ShopContext, ContextProps } from '../../../../hooks/shop-context';
import { AiOutlinePlus} from 'react-icons/ai';
import { AiOutlineMinus } from 'react-icons/ai';

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

  const shouldRender = Object.values(cartItems).every(item => item >= 0);

  if (!shouldRender) {
    return null; 
  }

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
        <div className="button-wrapper">

          <button className='red-button' onClick={() => removeFromCart(id)}>
            <AiOutlineMinus />
          </button>

          <input

            value={cartItems[id]}
            onChange={(e) => updateCartItemCount(Number(e.target.value), id)}
          />
          <button className='green-button' onClick={() => addToCart(id)}>
            <AiOutlinePlus />
          </button>

        </div>
      </div>
    </div>
  );
};
