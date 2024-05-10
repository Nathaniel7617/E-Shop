import React from 'react';
import Button from '../Shared/Button';
import Image1 from '../../assets/Category/earphone.png';
import Image2 from '../../assets/Category/watch.png';
import Image3 from '../../assets/Category/macbook.png';

const Category = () => {
    return (
        <div>
            <div className='py-16'>
                <div className='container'>
                    <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8'>
                        {/* first col */}
                        <div className='relative'>
                            <div className='py-10 pl-6 bg-gradient-to-br from-black/90 to-black/70 text-white w-70 rounded-3xl h-[250px] relative'>
                                <div>
                                    <p className='mb-[2px] text-gray-400'>Enjoy</p>
                                    <p className='text-xl fontsemibold mb-[2px]'>With</p>
                                    <p className='text-4xl xl:text-5xl font-bold opacity-20 mb-4'>Earphone</p>
                                    <Button 
                                        text="Browse"
                                        bgColor="bg-gray-700 hover:bg-red-400"
                                        textColor="text-deepRed hover:text-gray-300"
                                    />
                                </div>
                                <img src={Image1} alt='' className='w-[230px] absolute top-[50%] -translate-y-1/2 -right-[-20px]' />
                            </div>
                        </div>
                        {/* second col */}
                        <div className='py-10 pl-6 bg-gradient-to-br 
                        from-brandYellow to-brandYellow/90 
                        text-white w-70 rounded-3xl h-[250px] 
                        relative text-justify overflow-hidden 
                        dark:from-deepYellow/90 
                        dark:bg-deepYellow/90'>
                            <div>
                                <p className='mb-[2px] text-gray-400'>Enjoy</p>
                                <p className='text-xl fontsemibold mb-[2px]'>With</p>
                                <p className='text-4xl xl:text-5xl font-bold opacity-40 mb-2'>Gadget</p>
                                <Button 
                                    text="Browse"
                                    bgColor="bg-white"
                                    textColor="text-brandYellow dark:text-deepYellow"
                                />
                            </div>
                            <img src={Image2} alt='' className='w-[250px] absolute top-[50%] transform -translate-y-1/2 -right-[40px]' />
                        </div>
                        {/* third col */}
                        <div className='sm:col-span-2 py-10 pl-6 
                        bg-gradient-to-br from-liteRed to-liteRed 
                        text-white rounded-3xl h-[250px] relative
                        dark:from-deepRed/90 dark:to-deepRed/90'>
                            <div>
                                <p className='mb-[2px] text-gray-400'>Enjoy</p>
                                <p className='text-xl fontsemibold mb-[2px]'>With</p>
                                <p className='text-4xl xl:text-5xl font-bold opacity-40 mb-2'>Laptop</p>
                                <Button
                                    text="Browse"
                                    bgColor={"bg-white"}
                                    textColor={"text-deepRed"}
                                />
                            </div>
                            <img src={Image3} alt='' className='w-[250px] absolute top-[50%] -translate-y-1/2 right-0' />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Category;