import React from 'react';
import Heading from '../Shared/Heading';
import ProductsCard from './ProductsCard';

// Import Images 
import Img1 from '../../assets/Product/headphone1.webp';
import Img2 from '../../assets/Product/headphone2.webp';
import Img3 from '../../assets/Product/headphone3.webp';
import Img4 from '../../assets/Product/headphone4.webp';
import Img5 from '../../assets/Product/headphone5.webp';
import Img6 from '../../assets/Product/headphone6.webp'; 
import Img7 from '../../assets/Product/headphone7.webp';
import Img8 from '../../assets/Product/headphone8.webp';


const ProductsData = [
  {
    id: 1,
    img: Img1,
    title: " Sony WH-1000XM5",
    price: "120",
    aosDelay: "0",
  },
  {
    id: 2,
    img: Img2,
    title: "Bowers & Wilkins PX7 S2",
    price: "420",
    aosDelay: "200",
  },
  {
    id: 3,
    img: Img3,
    title: "AKG Y50BT",
    price: "320",
    aosDelay: "400",
  },
  {
    id: 4,
    img: Img4,
    title: "Apple AirPods Max",
    price: "220",
    aosDelay: "600",
  },
  {
    id: 5,
    img: Img5,
    title: "Sennheiser Momentum 3 Wireless",
    price: "200",
    aosDelay: "0",
  },
  {
    id: 6,
    img: Img6,
    title: "Beyerdynamic Amiron",
    price: "250",
    aosDelay: "200",
  },
  {
    id: 7,
    img: Img7,
    title: "Bose Noise Cancelling Headphones 700",
    price: "310",
    aosDelay: "400",
  },
  {
    id: 8,
    img: Img8,
    title: " JBL Tune 750BTNC",
    price: "400",
    aosDelay: "600",
  },
];

const Products = () => {
  return (
    <div>
      <div className="container">
        {/* Header section */}
        <Heading title='Our Products' 
        subtitle='Explore Our Products' />
        
        {/* Body section */}
        <ProductsCard data={ProductsData} />
      </div>
    </div>
  );
};

export default Products;