import React from 'react';
import './hero.css';
import { Link as LinkRoll } from 'react-scroll';

const Hero = () => { 
  return (
    <div id='hero' className='hero-section'>
      <div className='hero-content-wrapper'>
        <h3>We have seen serving</h3>
        <h1>Coffee</h1>
        <h4>*Since 1950*</h4>
        <LinkRoll to="shop" spy={true} smooth={true} offset={-100} duration={500}>
          <button className='addToCartBttn'>Shop now</button>
        </LinkRoll>
      </div>
    </div>
  );
};

export default Hero;
