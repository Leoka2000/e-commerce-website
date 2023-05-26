import React from 'react';
import './hero.css';
import { Link as LinkRoll } from 'react-scroll';

const Hero = () => { 
  return (
    <div id='hero' className='hero-section'>
      <div className='hero-content-wrapper'>
        <h3>Szolgálunk fel</h3>
        <h1>KÁVÉT</h1>
        <h4>*1442 óta*</h4>
        <LinkRoll to="shop" spy={true} smooth={true} offset={-100} duration={500}>
          <button className='addToCartBttn'>Most vásároljon!</button>
        </LinkRoll>
      </div>
    </div>
  );
};

export default Hero;
