import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <div>
      <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'>

        <div>
            <img src={assets.logo} className='mb-5 w-32' alt="" />
            <p className='w-full md:w-2/3 text-gray-600'>
               <strong>Scrap2Art</strong> transforms everyday scrap into beautiful, handcrafted decor pieces. From discarded wood to metal scraps, we give waste a second life and your home a unique touch.
            </p>
        </div>

        <div>
            <p className='text-xl font-medium mb-5'>COMPANY</p>
            <ul className='flex flex-col gap-1 text-gray-600'>
                <li>Home</li>
                <li>Our Story</li>
                <li>How it Works</li>
                <li>Sell Your Scrap</li>
            </ul>
        </div>

        <div>
            <p className='text-xl font-medium mb-5'>GET IN TOUCH</p>
            <ul className='flex flex-col gap-1 text-gray-600'>
                <li>+1-212-456-7890</li>
                <li>support@scrap2art.in</li>
            </ul>
        </div>

      </div>

        <div>
            <hr />
            <p className='py-5 text-sm text-center'>2025 <strong>Scrap2Art.in</strong> — All Rights Reserved. Made with ♻️ for a greener tomorrow.</p>
        </div>

    </div>
  )
}

export default Footer
