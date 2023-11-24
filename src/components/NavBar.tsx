'use client'
import { usePathname } from 'next/navigation'
import {BiSearchAlt2, BiHeart, BiShoppingBag} from 'react-icons/bi'
import {IoMdMenu} from 'react-icons/io'
import {CgProfile} from 'react-icons/cg'
import Link from 'next/link'


const NavBar = () => {
  const pathname = usePathname();
  return (
    <div className='bg-white w-full fixed z-10 shadow-lg top-0'>
      <IoMdMenu className='text-4xl m-2 md:hidden'/>
      <div className='text-center p-2 hidden md:p-0 md:flex md:gap-4 lg:gap-8'>
        <Link href="/" className='text-3xl md:text-sm lg:text-2xl md:w-[10%] p-2 md:mt-1  font-bold md:py-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-200 to-pink-700'>IndMart</Link>
        <ul className='p-2 gap-5 sm:gap-3 lg:gap-5 text-sm flex justify-center md:w-[30%]  md:text-xs lg:text-base md:py-6 '>
            <Link  href="/" className={`link ${pathname === '/' ? 'active' : ''}`}>HOME</Link >
            <Link  href="/men" className={`link ${pathname === '/men' ? 'active' : ''}`}>MEN</Link >
            <Link  href="/women" className={`link ${pathname === '/women' ? 'active' : ''}`}>WOMEN</Link >
            <Link  href="/beauty" className={`link ${pathname === '/beauty' ? 'active' : ''}`}>BEAUTY</Link >
            <Link  href="/studio" className={`link ${pathname === '/studio' ? 'active' : ''} flex flex-row`}>STUDIO <span className='text-xs text-red-600 hidden lg:block'>NEW</span></Link>
        </ul>
        <ul className='flex gap-2 p-2 md:w-[30%] md:h-[2%] lg:h-[5%] m-2 lg:m-4 md:mt-3 bg-stone-100 items-center rounded-lg'>
            <BiSearchAlt2 className="text-xl md:text-sm lg:text-2xl cursor-pointer"/>
            <input type="text" className='w-full text-sm lg:text-1xl outline-none pl-1 bg-stone-100' placeholder='Search' />
        </ul>
        <ul className='flex mt-5 justify-center gap-8 md:gap-3 lg:gap-6 md:mt-3 md:w-[15%]'>
            <Link href="/login" className={`link ${pathname === '/login' ? 'active' : ''} flex flex-col items-center`}><CgProfile className="text-3xl md:text-xl lg:text-2xl"/><li className='text-xs lg:text-sm  font-medium'>Profile</li></Link>
            <Link href="/wishlist" className={`link ${pathname === '/wishlist' ? 'active' : ''} flex flex-col items-center`}><BiHeart className="text-3xl md:text-xl lg:text-2xl"/><li className='text-xs lg:text-sm  font-medium'>Wishlist</li></Link>
            <Link href="/bag" className={`link ${pathname === '/bag' ? 'active' : ''} flex flex-col items-center`}><BiShoppingBag className="text-3xl md:text-xl lg:text-2xl"/><li className='text-xs lg:text-sm  font-medium'>Bag</li></Link>
        </ul>
      </div>
    </div>
  )
}

export default NavBar
