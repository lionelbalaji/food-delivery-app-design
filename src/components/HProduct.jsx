import React from 'react'

const HProduct = ({image,image2,title,description}) => {
  return (
    <div className="col">
    <div className="card shadow-sm">
       <img src={image} alt="" />
      <div className="card-body d-flex">
         <img src={image2} alt="" className='w-25 h-25'/>
             <p>
              <strong>{title}</strong>
              <p>{description}</p>
             </p>
      </div>
    </div>
  </div>
  )
}

export default HProduct