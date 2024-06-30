import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import vege from '../images/vege.jpg'
import vege2 from '../images/vege2.jpg'
import vege3 from '../images/vege3.jpg'
import vege4 from '../images/vege4.png'
import vege5 from '../images/vege5.jpg'
import vege6 from '../images/vege6.jpg'
import vege7 from '../images/vege7.jpeg'
import SProduct from './SProduct';
const ProductSlider = () => {
  var settings = {
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    initialSlide: 0,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  return (
    <div className='slider py-5'>
    <h1 className='text-center display-4 mt-4 fw-bold text-light'>
        Fresh Vegetable Recipes To Bring
        <br /> To Your Next Cookout
    </h1>
    <div className='container mt-5'>
        <Slider {...settings}>
            <div className='p-1'>
                <SProduct 
                    image = {vege}
                    description="Celery potato scallion desert raisin horseradish spinach carrot"
                />
            </div>
            <div className='p-1'>
            <SProduct 
                    image = {vege2}
                    description="Celery potato scallion desert raisin horseradish spinach carrot"
                />
            </div>
            <div className='p-1'>
            <SProduct 
                    image = {vege3}
                    description="Celery potato scallion desert raisin horseradish spinach carrot"
                />
            </div>
            <div className='p-1'>
            <SProduct 
                    image = {vege4}
                    description="Celery potato scallion desert raisin horseradish spinach carrot"
                />
            </div>
            <div className='p-1'>
            <SProduct 
                    image = {vege5}
                    description="Celery potato scallion desert raisin horseradish spinach carrot"
                />
            </div>
            <div className='p-1'>
            <SProduct 
                    image = {vege6}
                    description="Celery potato scallion desert raisin horseradish spinach carrot"
                />
            </div>
            <div className='p-1'>
            <SProduct 
                    image = {vege7}
                    description="Celery potato scallion desert raisin horseradish spinach carrot"
                />
            </div>
        </Slider>
    </div>
</div>
  )
}

export default ProductSlider