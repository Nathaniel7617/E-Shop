import React from 'react';
import Navbar from './Components/Navbar/Navbar';
import Hero from './Components/Hero/Hero';
import Category from './Components/Category/Category';
import Category2 from './Components/Category/Category2';
import Services from './Components/Service/Services';
import Banner from './Components/Banner/Banner';
import Banner2 from './Components/Banner/Banner2';
import headphone from './assets/Hero/headphone.png';
import Products from './Components/Products/Products';
import smartwatch3 from './assets/Category/smartwatch3.png'
import Blogs from './Components/Blogs/Blogs';
import Partner from './Components/Partners/Partner';
import Footer from './Components/Footer/Footer';
import Popup from './Components/Popup/Popup';
import AOS from "aos";
import "aos/dist/aos.css";


const BannerData2 = {
  discount: "30% OFF",
  title: "Happy Hour",
  date: "20 Dec - 28 Dec",
  image: smartwatch3,
  title2: "Smart Solo",
  title3: "Winter Sale",
  title4: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero Sed nisi. ",
  bgColor: "#746ab0"
};



const BannerData = {
  discount: "30% OFF",
  title: "Fine Smile",
  date: "20 Dec - 28 Dec",
  image: headphone,
  title2: "Air Solo Bass",
  title3: "Winter Sale",
  title4: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero Sed nisi. ",
  bgColor: "#f12000",
};

const App = () => {
  const [orderPopup, setOrderPopup] = React.useState(false);

  const handleOrderPopup = () => {
   setOrderPopup(!orderPopup);
  };

  React.useEffect(() =>{
    AOS.init(
      {
        duration: 800,
        easing: "ease-in-sine",
        delay: 100,
        offset: 100,
      });
      AOS.refresh();
  }, []);
  return (
    <div className='bg-white 
    dark:bg-gray-800 
    dark:text-white 
    duration-200 
    overflow-hidden'>
      <Navbar handleOrderPopup={handleOrderPopup}/>
      <Hero handleOrderPopup={handleOrderPopup}/>
      <Category />
      <Category2 />
      <Services />
      <Banner data={BannerData} />
      <Products />
      <Banner2 data={BannerData2} />
      <Blogs />
      <Partner />
      <Footer />
      <Popup orderPopup={orderPopup}
      setOrderPopup={setOrderPopup}/>
    </div>
  );
};

export default App;