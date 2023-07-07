import React from 'react'
import { Link } from 'react-router-dom';

const Header = ({search,getInput}) => {
  return (
    <nav className='bg-orange-400 flex justify-between items-center p-5 '>
      <Link to={"/"}><h1 className='font-bold text-xl md:text-3xl text-white cursor-pointer '>Online Store</h1></Link>
      

      <input type="text" placeholder='Search Products' value={search} onChange={getInput} 
      className='px-2 max-w-[140px] md:p-2 outline-none '/>
    </nav>
  )
}

export default Header;