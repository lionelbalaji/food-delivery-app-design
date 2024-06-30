import React from 'react'
import HProduct from './HProduct'
import turnip from '../images/turnip.png' 
import celery from '../images/Celery.png'
import Amarnath from '../images/Amaranth.png'
import veg1 from '../images/veg1.jpg'
import veg2 from '../images/veg2.jpg'
import veg3 from '../images/veg3.jpg'
const Healthy = () => {
  return (
    <div className="container-fluid px-4 py-5 healthy">
      <h2 className='text-center display-4 mt-4 fw-bold '>It's Healthy Eating That Made Easy</h2>
      <div className="container mt-5">
      <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
            <HProduct
              image={veg1}
              image2={turnip}
              title="Delicious"
              description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo cumque asperiores eius illum incidunt! Corporis."
              
            />
             <HProduct
              image={veg2}
              image2={Amarnath}
              title="Delicious"
              description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo cumque asperiores eius illum incidunt! Corporis."
              
            />
             <HProduct
              image={veg3}
              image2={celery}
              title="Delicious"
              description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo cumque asperiores eius illum incidunt! Corporis."
              
            />
        </div>
        </div>
      </div>
  )
}

export default Healthy