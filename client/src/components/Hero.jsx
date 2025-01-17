import React from 'react'
import heroimage from '../images/heroimage.jpeg'


const Hero = () => {
  return (
    <div>
    <img src={heroimage} alt="" className='h-42px w-full'/>
    </div>
  )
}

export default Hero