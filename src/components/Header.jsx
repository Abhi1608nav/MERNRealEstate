import React from 'react'
import {FaSearch} from "react-icons/fa"
import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <header className='bg-slate-200 shadow-md'>
       <div className=' flex justify-between items-center max-w-6xl mx-auto p-3'>
      <Link to='/'>
       <h1 className='font-bold text-sm sm:text-xl flex flex-wrap '>
        <span className='text-slate-500'>VastuVilla</span>
        <span className='text-slate-600'>Ventures</span>
       </h1>
       </Link>
       <form className='bg-slate-100 p-3 rounded-lg flex items-center '>
        <input type='text' placeholder='Search...' className='bg-transparent focus:outline-none w-24 sm:w-64 md:74' />
        <FaSearch className='text-slate-600'/>
       </form>
       <ul className='flex gap-4 items-center justify-center'>
        <Link to='/'>
        <li className='hidden text-slate-700 sm:inline hover:underline'>Home</li>
        </Link>
        <Link to='/about'>
        <li className='hidden text-slate-700 sm:inline hover:underline'>About</li>
        </Link>
        <Link to='/sign-in'>
        <li className='inline text-slate-700 hover:underline'>Sign In</li>
        </Link>
       </ul>
       </div>
    </header>
  )
}