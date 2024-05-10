import React from 'react'
import Slider from 'react-slick';
import Image1 from '../../assets/Hero/headphone.png';
import Image2 from '../../assets/Category/Man&oculus.jpg';
import Image3 from '../../assets/Category/macbook.png';

const HeroData = [
    {
        id: 1,
        img: Image1,
        subtitle: "Beats Solo",
        title: "Wireless",
        title2: "Headphone",
    },
    {
        id: 2,
        img: Image2,
        subtitle: "Beats Solo",
        title: "Wireless",
        title2: "Wireless",
    },
    {
        id: 3,
        img: Image3,
        subtitle: "Beats Solo",
        title: "Branded",
        title2: "Laptops",
    },
]

const Hero = () => {

    const setting = {
        dots: false,
        arrows: false,
        infinte: true,
        speed: 800,
        slideToScroll:1,
        // auto play: true,
        autoplaySpeed: 400,
        cssEase: "ease-in-out",
        pauseOnHover: false,
        pauseOnFocus: true,
    }
  return (
    <div>
      <div>
         {/* Hero section */}

         <Slider {...setting}>
            {
                HeroData.map((data) => (
                    <div key={data.id}>
                        <div>
                            {/* text content section */}
                        </div>

                         {/* img section */}
                    </div>
                ))
            }
         </Slider>
      </div>
    </div>
  )
}

export default Hero
