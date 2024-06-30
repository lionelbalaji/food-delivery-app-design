import React from 'react'

const Product = ({image,name,price,color}) => {
  return (
    <div className='col-12 col-md-4'>
         <div className="p-1">
          <div className={`border shadow-sm p-3 ${color}`}>
          <img src={image} alt="" className='w-75 h-75' />
          <h3>{name}</h3>
          <p>{price}</p>
          <button className="btn bg-white w-100 rounded-0">Add To Cart</button>
          </div>
         </div>
    </div>
  )
}

export default Product