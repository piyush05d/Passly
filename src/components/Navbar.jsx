import React from 'react'
import logo from '../assets/logo.png'


const Navbar = () => {
   return (
      
      <nav className='flex justify-around p-2  fixed top-0 left-0 w-full z-50 bg-blue-950'>
         <img src={logo} alt="" className='w-10 h-10' />
         <div className='text-white font-bold py-1'>passly</div>
         <ul>
            <li className='text-white py-1'>
               <a className='px-1 hover:font-bold text-xs' href='/'>Home</a>
               <a className='px-1 hover:font-bold text-xs'href='/About'>About</a>
               <a className='px-1 hover:font-bold text-xs' href='Contact'>Contact</a>
            </li>

         </ul>
      </nav>
   )
}

export default Navbar
