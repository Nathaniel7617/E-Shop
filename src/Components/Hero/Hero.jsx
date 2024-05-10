import React from 'react';
import Slider from 'react-slick';
import Image1 from '../../assets/Hero/headphone.png';
import Image2 from '../../assets/Category/Virtual2.webp';
import Image3 from '../../assets/Category/macbook.png';
import Button from '../Shared/Button';

const HeroData = [
    {
        id: 1,
        img: Image1,
        subtitle: "Beats Solo",
        title:" Headphone",
        title2: "Headphone",
    },
    {
        id: 2,
        img: Image2, // Changed from Image1 to Image2
        subtitle: "Beats Solo",
        title:" Wireless",
        title2: "virtual",
    },
    {
        id: 1,
        img: Image3, // Changed from Image1 to Image3
        subtitle: "Beats Solo",
        title:" Branded",
        title2: "macbook",
    },
]

const Hero = ({ handleOrderPopup}) => {

    const settings = {
        dots: true,
        arrows: true,
        infinite: true,
        speed: 800,
        slidesToScroll: 1,
        // autoplay: true,
        autoplaySpeed: 4000,
        cssEase: "ease-in-out", // Changed "CssEase" to "cssEase" to match the correct prop name
        pauseOnHover: false, // Removed the duplicate "pauseOnHover" line
      };
  return (
    <div className='container'>
      <div className='overflow-hidden rounded-3xl
      min-h-[550px] sm:min-h-[400px] hero-bg-color flex justify-center 
      items-center'>
       <div className='container pb-8 sm:pb-0'>
        {/* hero section */}
         <Slider {...settings}>
          { HeroData.map((data) => (
            <div key={data.id}>
                <div className='grid grid-cols-1 sm:grid-cols-2'>
                 {/* text content section */}
                  <div className='flex flex-col justify-center
                  gap-4 sm:pl-3 pt-12 sm:pt-0 text-center
                  sm:text-left order-2 sm:order-1 relative z-10'>
                    
                    <h1 
                    data-aos="zoom-out"
                    data-aos-duration="500"
                    data-aos-once="true"
                    className='text-2xl sm:text-6xl
                    lg:text-2xl font-bold'>
                    {data.subtitle}</h1>

                    <h1 
                    data-aos="zoom-out"
                    data-aos-duration="500"
                    data-aos-once="true"
                    className='text-5xl sm:text-6xl
                    lg:text-7xl font-bold'>
                    {data.title}</h1>

                    <h1 
                    data-aos="zoom-out"
                    data-aos-duration="500"
                    data-aos-once="true"
                    className='text-5xl uppercase 
                    text-white dark:text-white/5 
                    sm:text-[80px] 
                    md:text-[90px] xl:text-[150] 
                    font-bold'>
                    {data.title}</h1>

                    
                    <div                     
                    data-aos="zoom-out"
                    data-aos-duration="500"
                    data-aos-once="true"
                    >
                    <Button
                    text='Shop By Category'
                    bgColor= 'bg-gray-400 hover:bg-primary'
                    textColor='text-white' 
                    handler={handleOrderPopup}/>
                    </div>
                  </div>
                 {/* img section */}
                 <div className='order-1 sm:order-2'>
              <div 
                data-aos="zoom-in"
                data-aos-once="true"
                className='relative z-10'
              >
                <img src={data.img} 
                alt=''
                className='w-[250px] sm:w-[350px] 
                h-[300px] sm:h-[450px] mb-[-6%]
                sm:scale-105 lg:scale-110 object-contain
                mx-auto drop-shadow-[-8px_4px_6px_rgba(0,0,0,0.4)] 
                relative z-40'/>
            </div>
                 </div>
                </div>
            </div>
        ))}
     </Slider>
     </div>
     </div>
    </div>
  )
};

export default Hero;