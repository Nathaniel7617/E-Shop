import React from 'react'
import Button from '../Shared/Button';
import Image1 from '../../assets/Category/PlayStation.png';
import Image2 from '../../assets/Category/Virtual2.webp';
import Image3 from '../../assets/Category/Speaker.png';

const Category = () => {
    return (
        <div>
            <div>
            <div className='container'>
             <div className='grid grid-cols-1 
             sm:grid-cols-2 lg:grid-cols-4 gap-8'>
             {/* first col */}
            <div className='col-span-2 py-10 pl-6 bg-gradient-to-br
             from-gray-400/90 to-gray-100
                 text-white w- rounded-3xl
                   h-[250px] relative hero-bg-color' >
                    <div>
                        <p className='mb-[2px] text-gray-400'>Enjoy</p>
                        <p className='text-xl fontsemibold mb-[2px]'>With</p>
                        <p className='text-4xl xl:text-3xl font-bold 
                        opacity-40 mb-2'>Gaming(PS4)</p>
                        <Button className= 'w-16'
                         text="Browse"
                         bgColor={"bg-primary dark:bg-gray-300"}
                         textColor={"text-white dark:text-gray-800"}
                                />
                     </div>
                     <img src={Image1} alt=''
                      className='w-[250px]
                     absolute top-1/2 -translate-y-1/2 
                     -right-0' />
                 </div>
                        {/* second col */}
                        <div className='py-10 pl-6 bg-gradient-to-br
                         from-brandGreen/90 to-brandGreen/90
                          text-white w-70 rounded-3xl
                           h-[250px] relative dark:from-brandDgreen/90 dark:to-brandDgreen/90'>
                            <div>
                                <p className='mb-[2px] text-white'>Enjoy</p>
                                <p className='text-xl fontsemibold mb-[2px]'>With</p>
                                <p className='text-4xl xl:text-3xl font-bold 
                                opacity-20 mb-4'>Oculus</p>
                                <Button 
                                    text="Browse"
                                    bgColor="bg-white"
                                    textColor="text-brandGreen dark:text-brandDgreen"
                                />
                            </div>
                            <div className='px-4'>
                            <img src={Image2} alt=''
                             className='w-[200px] h-[250px] absolute top-[49.4%] 
                             transform -translate-y-1/2 -right-[5px]'/>
                          </div>
                        </div>
                        {/* third col */}
                        <div className='py-10 pl-6 bg-gradient-to-br
                         from-brandBlue to-brandBlue/90
                          text-white w-70 rounded-3xl
                           h-[250px] relative dark:from-brandDpurple 
                           dark:to-brandDpurple'>
                            <div className='mt-0'>
                                <p className='mb-[2px] text-gray-400'>Enjoy</p>
                                <p className='text-xl fontsemibold mb-[2px]'>With</p>
                                <p className='text-4xl xl:text-3xl font-bold 
                                opacity-40 mb-2'>Speaker</p>
                                <Button 
                                    text="Browse"
                                    bgColor="bg-white"
                                    textColor="text-brandBlue dark:text-brandDpurple"
                                />
                            </div>
                            <img src={Image3} alt='' 
                            className='w-[160px] 
                            absolute bottom-0 
                            right-0 '/>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Category;