import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import slide1 from "../../images/sliderImages/slide1.jpg"
import slide2 from "../../images/sliderImages/slide2.jpg"

function Sliders() {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 5000,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
          autoplay: true,
          speed: 5000,
          autoplaySpeed: 2000,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
          autoplay: true,
          dots: true,
          speed: 5000,
          autoplaySpeed: 2000,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          autoplay: true,
          dots: true,
          speed: 5000,
          autoplaySpeed: 2000,
        }
      }
    ]
  };
  return (
    <React.Fragment>
      <div className='sm:pt-6 sm:mt-4
       md:mt-5 md:px-6
       lg:px-8 
        px-1 my-3'>
        <div className={` overflow-hidden className="slider-container"`}>
          <Slider {...settings}>
            <div className='  object-center'>
              <img src={slide1} className='md:w-full md:h-[400px] lg:h-[430px]' alt='Slide 1'/>
            </div>
            <div className='  object-center'>
              <img src={slide2} className='md:w-full md:h-[400px] lg:h-[430px]' alt='Slide 2'/>
            </div>
          </Slider>
        </div>
      </div>
    </React.Fragment>
  )
}

export default Sliders