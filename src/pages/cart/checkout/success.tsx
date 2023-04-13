import React from 'react';
import './success.css';
import { PaymentFormData } from '../payment/payment';
import { useLocation } from 'react-router-dom';
import { CiLocationOn } from 'react-icons/ci';
import { BiTimer } from 'react-icons/bi';
import { AiOutlineEuroCircle } from 'react-icons/ai';
import SuccessImg from '../../../assets/brand/success-img.png';

interface PaymentState {
  data: PaymentFormData;
}

const Success = () => {

  const { state } = useLocation() as { state: PaymentState };
  

  return (
    <section className='checkout-section'>
      <div className='checkout-left'>
        <header className='checkout-header'>
          <h1>Uhu! Rendelés megerősítve.</h1>
          <p>Most már csak várnod kell, és hamarosan eljut hozzád a kávé.</p>
        </header>
        <main className='checkout-main'>
          <div className='individual-wrapper'>
           <CiLocationOn id='id-1'/>
            <div>
              <p>Kiszállítva  <strong> {state.data.addressName}, {state.data.addressNumber}</strong></p>
              <p>Brazilia - UF</p>
            </div>
          </div>
          <div className='individual-wrapper'>
          <BiTimer id='id-2'/>
            <div>
              <p>Előrejelzett szállítás</p>
              <p><strong>20 min - 30 min</strong></p>
            </div>
          </div>
          <div className='individual-wrapper'>
            <AiOutlineEuroCircle id='id-3'/>
            <div>
              <p>Fizetés opciója</p>
              <p><strong>{state.data.card}</strong></p>
            </div>
          </div>
        </main>
      </div>
      <div className='checkout-right'>
        <img src={SuccessImg}/>
      </div>
    </section>
  );
};

export default Success;
