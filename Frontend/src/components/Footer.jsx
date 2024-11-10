import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <div>
        <div className='flex  sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'>
             <div>
                 <img src={assets.logo} alt="" className='mb-5 w-32' />
                 <p className='w-full md:w-2/3 text-gray-600'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ducimus nemo quaerat inventore Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus, saepe. Perspiciatis ullam numquam consectetur ut odio dicta ea nesciunt magnam? </p>
            </div>

                <div>
                    <p className='text-xl font-medium mb-5'>compay</p>
                    <ul className='flex flex-col gap-1 text-gray-600'>
                        <li>home</li>
                        <li>about us</li>
                        <li>delivery</li>
                        <li>privacy policy</li>
                    </ul>
                </div>
            <div>
                <p className='text-xl font-medium mb-5'>get in touch</p>
                <ul className='flex flex-col gap-1 text-gray-600'>
                    <li>+91-99204i04</li>
                    <li>shahswayu@gmail.yaho</li>
                </ul>
            </div>


        </div>

        <div>
            <hr />
            <p className='py-t text-sm text-center'>copyright 2024@ forever- all right reserved</p>
        </div>
    </div>
  )
}

export default Footer
