import React from 'react'
import process1 from '../images/process1.png'
import process2 from '../images/process2.png'
import process3 from '../images/process3.png'
const Delivery = () => {
  return (
    <div className="container px-4 py-5 delivery-process">
      <h2 className='text-center display-4 mt-4 fw-bold'>How Delivery Works</h2>
    <div className="row g-4 py-5 row-cols-1 row-cols-sm-2 row-cols-md-3">
      <div className=" col px-5 text-center">
        <div className="mb-3">
          <img src={process1} alt="" className='w-50 h-50' />
        </div>
        <h2>Pick Your Veg</h2>
        <p>Veggies es bonus vobis, proinde ves postulo essum magis kohirabi</p>
        </div>
      <div className=" col px-5 text-center">
        <div className="mb-3">
         <img src={process2} alt="" className='w-50 h-50'/>
        </div>
        <h2>We Deliver Your Bag</h2>
        <p>Gumbo beet greens corn soko endive gumbo gourd parley</p>
        </div>
      <div className=" col px-5 text-center">
        <div className="mb-3">
        <img src={process3} alt="" className='w-50 h-50'/>
        </div>
        <h2>You Enjoy Your Food</h2>
        <p>Dnadelion cucumber earthnut pea peanut soko zucchini</p>
         </div>
    </div>
  </div>
  )
}

export default Delivery