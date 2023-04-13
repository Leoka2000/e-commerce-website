import React, { useState, useEffect, useContext } from 'react';
import './navbar.css';
import { Link } from 'react-router-dom';
import { BsFillCartFill } from 'react-icons/bs';
import { ShopContext, ContextProps } from '../../hooks/shop-context';
import {BsExclamationCircleFill} from 'react-icons/bs'


const Navbar = () => {
  const [navbar, setNavbar] = useState<boolean>(true);
  const { cartItems, getTotalCartAmount } = useContext<ContextProps>(ShopContext);

  const cartHasItems = Object.values(cartItems).some((value) => value > 0);

  const navbarScroll = () => {
    if (window.scrollY >= 100) {
      setNavbar(false);
    } else {
      setNavbar(true);
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', navbarScroll);
    return () => {
      window.removeEventListener('scroll', navbarScroll);
    }
  }, []);

  return (
    <>
      <nav className={navbar ? 'main-nav' : 'activated'}>
        <div className='title-wrapper'>
        <Link style={{ textDecoration: 'none' }} to='/'>
            <h2>Leo's Coffee</h2>
            </Link>
        </div>
        <ul>
          <Link style={{ textDecoration: 'none' }} to='/cart'>
          CART <BsFillCartFill/>{cartHasItems && <span><BsExclamationCircleFill id='exclamation'/></span>}
           </Link>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
