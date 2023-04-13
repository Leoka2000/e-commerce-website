import React, { useState, useContext } from 'react'
import { ShopContext } from "../../../hooks/shop-context";
import './payment.css';
import { HiOutlineLocationMarker } from 'react-icons/hi'
import { useForm } from 'react-hook-form' // ficou aparecendo erro dispatcher is null, eu cooloquei espaço entre os curly braces e resolveu
import { AiOutlineCreditCard } from 'react-icons/ai'
import { BsBank } from 'react-icons/bs'
import { FaRegMoneyBillAlt } from 'react-icons/fa'
import { FaMoneyBillWave } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom'

export interface PaymentFormData {
  addressName: string;
  zipCode: string;
  addressNumber: number;
  streetComplement: string;
  neighbourhood: string;
  city: string;
  card: string;
  Hitelkártya: string;
}


const Payment = () => {
  const { cartItems, getTotalCartAmount } = useContext(ShopContext); 
  const amountToPay = getTotalCartAmount();
  

  let navigate = useNavigate();
  
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<PaymentFormData>()

 
   

  const onSubmit = (data: PaymentFormData) => {
  console.log(data)
    navigate("/success", { replace: false, state: {data}})
    
    
  };
  

  return (
    <form onSubmit={handleSubmit(onSubmit)} className='payment-parent'>
      <header className='payment-header'>
        <HiOutlineLocationMarker />
        <div className='header-text'>
          <h4>Szállítási cím</h4>
          <p>Adja meg a címet, ahová a megrendelését szeretné megkapni.</p>
        </div>
      </header>
      <div className='input-wrapper-parent'>

        <input {...register("addressName", { required: true, minLength: 2 })} placeholder='Cím?'></input>
        {errors.addressName && <p className='error'>kér kurva</p>}

        <input {...register("zipCode", { required: true, minLength: 2 })} type="text" placeholder='Cím Kód'></input>
        {errors.zipCode && <p className='error'>kér kurva</p>}
        <div className='input-wrapper-child'>
          <div>
            <input {...register("addressNumber", { required: true, minLength: 2 })} placeholder='Lakás Száma' type='number'></input>
            {errors.addressNumber && <p className='error'>kér kurva</p>}
          </div>
          <div>
            <input {...register("streetComplement", { required: true, minLength: 2 })} placeholder='Kiegészítés' type='text'></input>
            {errors.streetComplement && <p className='error'>kér kurva</p>}
          </div>
        </div>
        <div className='input-wrapper-child'>
          <div>
            <input {...register("neighbourhood", { required: true, minLength: 2 })} placeholder='Szomszédság' type='text'></input>
            {errors.neighbourhood && <p className='error'>kér kurva</p>}
          </div>
          <div>
            <input {...register("city", { required: true, minLength: 2 })} placeholder='Város' type='text'></input>
            {errors.city && <p className='error'>kér kurva</p>}
          </div>
        </div>
      </div>
      <div className='credit-card-parent'>
        <header className='header-credit'>
          <span><FaMoneyBillWave /></span>
          <div className='header-column'>
            <h4>Fizetés</h4>
            <p>A fizetés szállításkor történik. Válassza ki a fizetési módot</p>
          </div>
        </header>
        <main className='main-credit'>
          <div className='main-credit-child'>
            <h4>Összes tétel</h4>
            <p>{Math.round(amountToPay)}HUF</p>
          </div>
          <div className='main-credit-child'>
            <h4>Házhozszállítás</h4>
            <p>890HUF</p>
          </div>
          <div className='main-credit-child'>
            <h4>Összesen </h4>
            <p>{Math.round(amountToPay) + 890} HUF</p>
          </div>
        </main>
        <div className='input-parent' >
          {/* Add the type='button' in order to stop the button from submitting the form*/}
          <label placeholder='Hitelkártya' {...register("card")} className='input-wrapper'>
            <span><AiOutlineCreditCard /></span>
            <p>Hitelkártya</p>
            <input {...register("card")} value='Hitelkártya'  type={"radio"} ></input>
          </label>
          {errors.card && <p className='error'>kér kurva</p>}
          <label  placeholder='Bankkártya' {...register("card")} className='input-wrapper'>
            <span><BsBank/></span>
            <p>Bankkártya</p>
            <input {...register("card")} value='Bankkártya' type={"radio"} ></input>

          </label>
          {errors.card && <p className='error'>kér kurva</p>}
          <label placeholder='Kézpénz' className='input-wrapper'>
            <span><FaRegMoneyBillAlt /></span>
            <p>Kézpénz</p>
            <input {...register("card")} value='Kézpénz'  type={"radio"}  placeholder='Kézpénz'></input>

          </label>
          {errors.card && <p className='error'>kér kurva</p>}
        </div>
       
        <button className='btn-submit' type='submit'>Nyújtani?</button>
      </div>

    </form>
  )
}

export default Payment
