import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'
import NewsLetterBox from '../components/NewsLetterBox'

const Contact = () => {
  return (
    <div>
      <div className='text-center text-2xl pt-10 border-t'>
        <Title text1={"CONTACT"} text2={"US"}/>
      </div>
      <div className='my-10 flex flex-col justify-center md:flex-row gap-10 mb-28'>
        <img className='w-full md:max-w-[480px] rounded-sm' src={assets.contact_img} alt="contact-img" />
          <div className='flex flex-col justify-center items-start gap-6'>
            <p className='font-semibold text-xl text-gray-600'>Our Store</p>
            <p className='text-gray-500'>Lorem, ips sit amet consectetur <br />adipisicing dkfgfgi dfh.</p>
            <p className='text-gray-500'>Tel: (+91) 3663-296 <br /> Email: admin@Bagages.com</p>
            <p className='font-semibold text-xl text-gray-600'> Careers at Bagages</p>
            <p className='text-gray-500'>Learn more about our team and offers</p>
            <button className='border border-black px-8 py-4 text-sm rounded-sm hover:bg-black hover:text-white transition-all duration-400 cursor-pointer'>Explore Us</button>
          </div>
      </div>
      <NewsLetterBox />
    </div>
  )
}

export default Contact