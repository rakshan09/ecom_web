import React from 'react'
import Title  from '../components/Title'
import NewsLetterBox from '../components/NewsLetterBox'
import { assets } from '../assets/assets'

const About = () => {
  return (
    <div>
      <div className='text-2xl text-center pt-8 border-t'>
        <Title text1={'ABOUT'} text2={'US'}/>
      </div>

      <div className='my-10 flex flex-col md:flex-row gap-16'>
        <img className='w-full md:max-w-[450px] rounded-sm' src={assets.about_img} alt="about-img" />
          <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-600'>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia voluptas eveniet neque. Libero, alias obcaecati rem est architecto delectus recusandae, omnis eaque voluptatibus perspiciatis quaerat rerum beatae optio quasi vero eum officia corrupti quisquam nobis. Officiis quis veniam ipsum doloremque.</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis molestiae labore facilis a veritatis consequuntur iusto? Iste officiis deleniti nesciunt nisi, possimus provident culpa alias cupiditate laudantium. Sint ipsam autem quod vitae ducimus, sunt placeat modi qui, nobis eos magni beatae voluptates. Architecto, deleniti dignissimos.</p>
             <b className='text-gray-800'>Our Mission</b>
             <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum voluptatum debitis molestias reprehenderit odio eum tenetur eos consequuntur suscipit nostrum consectetur maiores natus, voluptatibus explicabo cum temporibus modi, laboriosam unde!</p>
          </div>
      </div>
      <div className='text-2xl py-4'>
        <Title text1={'WHY'} text2={'CHOOSE US'}/>
      </div>
      <div className='flex flex-col md:flex-row text-sm mb-20'>
        <div className='border rounded-l-lg px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Quality Assurance:</b>
          <p className='text-gray-600'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore explicabo minima cum vitae facilis! Aperiam ipsum animi delectus!</p>
        </div>
        <div className='border  md:border-l-0 px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Convenience:</b>
          <p className='text-gray-600'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore explicabo minima cum vitae facilis! Aperiam ipsum animi delectus!</p>
        </div>
        <div className='border rounded-r-lg md:border-l-0 px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Exceptional Customer Service:</b>
          <p className='text-gray-600'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore explicabo minima cum vitae facilis! Aperiam ipsum animi delectus!</p>
        </div>
      </div>
      <NewsLetterBox />
    </div>
  )
}

export default About