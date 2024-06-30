import React from 'react'

const SProduct = ({image,description}) => {
  return (
    <div className="card shadow-sm">
       <img src={image} alt="" style={{height:'200px'}}/>
      <div className="card-body">
            <p>{description}</p>
      </div>
    </div>
  )
}

export default SProduct