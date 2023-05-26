import React, { useState, useEffect, useContext } from 'react';
import './navbar.css';
import { Link, useLocation } from 'react-router-dom';
import { BsFillCartFill } from 'react-icons/bs';
import { ShopContext, ContextProps } from '../../hooks/shop-context';
import {BsExclamationCircleFill} from 'react-icons/bs'


const Navbar = () => {
  const [navbar, setNavbar] = useState<boolean>(true);
  const { cartItems, getTotalCartAmount } = useContext<ContextProps>(ShopContext);


  const cartHasItems = Object.values(cartItems).some((value) => value > 0);


  return (
    <>
      <nav className='activated'>
        <div className='title-wrapper'>
        <Link style={{ textDecoration: 'none' }} to='/'>
            <h2>Leo kávéháza</h2>
            </Link>
        </div>
      
          <Link style={{ textDecoration: 'none' }} to='/cart'>
          KOSÁR <BsFillCartFill/>{cartHasItems && <span><BsExclamationCircleFill id='exclamation'/></span>}
           </Link>
       
      </nav>
    </>
  );
};

export default Navbar;
