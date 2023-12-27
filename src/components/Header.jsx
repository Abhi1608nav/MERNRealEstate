import React, { useEffect, useState } from 'react'
import {FaSearch} from "react-icons/fa"
import { Link,useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'

export default function Header() {
    const {currentUser} = useSelector((state)=>state.user)
    const [searchTerm,setSearchTerm]=useState('');
    const navigate=useNavigate();
    const handleSubmit = (e)=>{
        e.preventDefault();
        const urlParams = new URLSearchParams(window.location.search);
        urlParams.set('searchTerm',searchTerm);
        const searchQuery = urlParams.toString();
        navigate(`/search?${searchQuery}`);
    }
   
    useEffect(()=>{
     
        const urlParams = new URLSearchParams(location.search)
        const searchTermFromUrl = urlParams.get('searchTerm');
        if(searchTermFromUrl)
        {
            setSearchTerm(searchTermFromUrl)
        }
    },[location.search])

  return (
    <header className='bg-slate-200 shadow-md'>
       <div className=' flex justify-between items-center max-w-6xl mx-auto p-3'>
      <Link to='/'>
       <h1 className='font-bold text-sm sm:text-xl flex flex-wrap '>
        <span className='text-slate-500'>VastuVilla</span>
        <span className='text-slate-600'>Ventures</span>
       </h1>
       </Link>
       <form onSubmit={handleSubmit} className='bg-slate-100 p-3 rounded-lg flex items-center '>
        <input type='text' placeholder='Search...' className='bg-transparent focus:outline-none w-28 sm:w-64 md:w-96' 
        value={searchTerm}
        onChange={(e)=>setSearchTerm(e.target.value)}
        />
        <button>
        <FaSearch className='text-slate-600'/>
        </button>
        
       </form>
       <ul className='flex gap-4 items-center justify-center'>
        <Link to='/'>
        <li className='hidden text-slate-700 sm:inline hover:underline'>Home</li>
        </Link>
        <Link to='/about'>
        <li className='hidden text-slate-700 sm:inline hover:underline'>About</li>
        </Link>
        <Link to='/profile'>
        {
           currentUser ? (
            <img className='rounded-full h-7 w-7 object-cover ' src={currentUser.avatar} alt="profile" />
           ):(
           
            <li className='inline text-slate-700 hover:underline'>Sign In</li>
            
           ) 
        }
        </Link>
       </ul>
       </div>
    </header>
  )
}
