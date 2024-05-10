import React from 'react';
import { IoCloseCircle } from "react-icons/io5";
import Button from '../Shared/Button';

const Popup = ({ orderPopup, setOrderPopup }) => {
  const handleClosePopup = () => {
    setOrderPopup(false);
  };

  return (
    <div>
      {orderPopup && (
        <div className='h-screen w-screen fixed top-0 left-0 bg-black bg-opacity-50 z-50 backdrop-blur-sm flex justify-center items-center'>
          <div className='w-[300px] p-4 shadow-md bg-white dark:bg-gray-900 dark:text-white duration-200 rounded-md'>
            {/* Header section */}
            <div className="flex justify-between items-center mb-4">
              <h1 className="text-xl font-semibold">Order Now</h1>
              {/* Add onClick event handler directly */}
              <IoCloseCircle className="text-gray-500 hover:text-red-500 cursor-pointer" onClick={() => setOrderPopup(false)} />
            </div>
            {/* form section */}
            <div>
                <input type="text"
                placeholder='Name'
                className='form-input' />

                <input type="text"
                placeholder='E-mail'
                className='form-input' />

                <input type="text"
                placeholder='Address'
                className='form-input' />

                <div className='flex  
                justify-center mb-11  mt-2'>
                    <Button 
                    text="Order Now"
                    bgColor={"bg-primary"}
                    textColor={"text-white"}
                    />
                </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Popup;