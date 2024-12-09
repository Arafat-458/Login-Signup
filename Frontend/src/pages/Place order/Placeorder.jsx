import React from 'react'
import './Placeorder.css';
const Placeorder = () => {
  return (
   <form className='place-order'>
    <div className="place-order-left">
      <p className="title">Delivery Information</p>
      <div className="multi-fields">
        <input type="text"placeholder='First name'/>
        <input type="text" placeholder='Last name'/>

      </div>
      <input type="ta"placeholder=''/>
    </div>
    <div className="palce-order-right"></div>
   </form>

  )
}

export default Placeorder