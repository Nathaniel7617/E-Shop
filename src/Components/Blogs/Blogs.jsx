import React from 'react';
import Heading from '../Shared/Heading';
import Img1 from '../../assets/Blogs/blog-4.jpeg';
import Img2 from '../../assets/Blogs/blog-5.webp';
import Img3 from '../../assets/Blogs/blog-3.jpg';

const BlogData = [
    {
        title: "How to choose a perfect Smartwatch",
        subtitle: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore.",
        published: "April 30, 2024 by Thanteco",
        image: Img1,
        aosDelay: "0"
    },
    {
        title: "How to choose a perfect Gadget",
        subtitle: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore.",
        published: "April 30, 2024 by Ifeanyi",
        image: Img2,
        aosDelay: "200"
    },
    {
        title: "How to choose a perfect VR Headset",
        subtitle: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore.",
        published: "April 30, 2024 by Nathaniel",
        image: Img3,
        aosDelay: "400"
    },
];

const Blogs = () => {
  return (
    <div className='my-12'>
      <div className='container'>
        {/* Header section */}
        <Heading title="Recent News" subtitle={"Explore Our Blogs"} />

        {/* Blogs section */}
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 gap-y-8 sm:gap-4 md:gap-7'>
          {/* Blog card */}
          {BlogData.map((blog, index) => (
            <div 
            data-aos="fade-up"
            data-aos-delay={blog.aosDelay}
            key={index}>
            {/* image section */}
            <div className="rounded-2xl 
            overflow-hidden mb-2">
              <img className="w-full h-[220px] 
              object-cover rounded-2xl
               hover:scale-105 duration-500
              " src={blog.image} 
              alt={blog.title} />
            {/* content section */}
              <div className="space-y-2">
              <p className="text-xs text-gray-500 
                ">{blog.published}</p>
                <h2 className="font-bold line-clamp-1
                ">{blog.title}</h2>
                <p className="line-clamp-2 text-sm 
                text-gray-600 dark:text-gray-400
                ">{blog.subtitle}</p>
              </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blogs;