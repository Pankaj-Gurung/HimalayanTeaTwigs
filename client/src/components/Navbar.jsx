import React from 'react'
import {Link, Routes, Route} from 'react-router-dom'
import Aboutus from '../pages/Aboutus'
import Contactus from '../pages/Contactus'
import Home from '../pages/Home'
import { SocialIcon } from 'react-social-icons'
import logo from '../images/logo.png'
import { FaShoppingCart } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";

const Navbar = () => {
  return (
    <>
    <div className='flex justify-center bg-teacolor text-white p-1' >
        <h3>Delivery all over Kathmandu!</h3>
    </div>
    <nav className='flex m-3 gap-32'>
    <SocialIcon url="https://www.instagram.com/teatwigsilam/" />
    <SocialIcon url="https://www.tiktok.com/@lehimalayanteahouse?lang=en" />
    <SocialIcon url="https://www.facebook.com/ranbirtradingnepal/" />
    <Link>About Tea</Link>
    <Link>Faqs</Link>
    <Link>Blog</Link>
    <img src={logo} alt="no image" className='w-24 h-auto'  />
    <input type="text" className='bg-gray-200 w-80 h-10 p-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500 ' placeholder='Search'  />
    <FaShoppingCart size={34} />
    <CgProfile size={34} />
    </nav>

    <nav className='flex justify-center gap-32 bg-teacolor text-white p-4'>
    <Link to={'/home'}>Home</Link>
        <Link to={'/aboutus'}>About Us</Link>
        <Link to={'/contactus'}>Contact Us</Link>
    </nav>

    <Routes>
        <Route path='/home' element={<Home/>}></Route>
        <Route path='/aboutus' element={<Aboutus/>}></Route>
        <Route path='/contactus' element={<Contactus/>}></Route>
    </Routes>
    </>
  )
}

export default Navbar