import React, { useContext, useEffect } from 'react';
import { ShopContext, ContextProps } from "../../../hooks/shop-context";
import { AiOutlinePlus} from 'react-icons/ai';
import { AiOutlineMinus } from 'react-icons/ai';

type Props = {
  data: {
    id: number,
    productName: string,
    price: number,
    productImage: string,
    description: string,
    roast: string
  }
}

const Product: React.FC<Props> = (props: Props) => {
  const { id, productName, price, productImage, description, roast } = props.data; 
  const { addToCart, cartItems, removeFromCart} = useContext<ContextProps>(ShopContext);
  const cartItemCount: number = cartItems[id];
  

  return (
    <>
      <div className="content-wrapper">
        <header className='header'>
          <img src={productImage} alt={productName} />
          <div className='roast'>
            <span>{roast}</span>
          </div>
        </header>
        <div className='bx-middle'>
          <h2>
            {productName}
          </h2>
          <p>{description}</p>
        </div>
        <footer className='footer'>
          <div className='price-product'>
            <small>Ft</small>
            <h2>{price}</h2>
          </div>
          <div className='inputs-wrapper'>
            <button className='product-btn' onClick={() => removeFromCart(id)}>
              <AiOutlineMinus />
            </button>
            <p id='p-2'>{cartItemCount > 0 && <> {cartItemCount}</>}</p>
            <button className="product-btn" onClick={() => addToCart(id)}>
              <AiOutlinePlus/>
            </button>
          </div>
        </footer>
      </div>
    </>
  );
};

export default Product;
