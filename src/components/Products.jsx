import React from 'react'
import Product from './Product'
import brinjal from '../images/brinjal.png'
import cf from '../images/cf.png'
import carrot from '../images/carrot.png'
import kado from '../images/kado.png'
const Products = () => {
  return (
    <div className='container py-5'>
      <div className="d-flex justify-content-between">
        <h3 className='text-success'>Customer Favourites</h3>
        <button className="btn btn-transparent rounded-0 fw-bold px-3 border border-success">All Products</button>
      </div>
      <div className="row mt-5">
        <Product
        image={brinjal}
        name="EggPlant"
        price='$0.5/kg'
        color='p1color'
        />
        <Product
        image={cf}
        name="CauliFlower"
        price='$0.7/kg'
        color='p2color'
        />
        <Product
        image={carrot}
        name="Carrot"
        price='$0.5/kg'
        color='p3color'
        />
        <div className="col-12 col-md-8">
          <div className="p-1">
            <div className="border shadow-sm d-flex p4color">
             <div className="text-center px-0 px-lg-5">
             <img src={kado} alt="" className='p-image'/>
             </div>
               <div className="d-flex flex-column justify-content-center">
                <h3>Best Fresh Test Pumpkin</h3>
                <p>$0.5/Kg</p>
                <button className="btn bg-white rounded-0 w-100">Add To Cart</button>
               </div>
            </div>
          </div>
        </div>
        <div className='col-12 col-md-4'>
         <div className="p-1">
          <div className={`border shadow-sm p-3 py-4 px-3 p5color`}>
          <h3>Best Fresh Bell Pepper</h3>
          <p>$1/Kg</p>
          <button className="btn bg-white w-100 rounded-0">Add To Cart</button>
          </div>
         </div>
    </div>
      </div>
    </div>
  )
}

export default Products