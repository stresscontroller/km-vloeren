import Logo from '@/components/shared/Logo'
import React from 'react'

const Navbar = () => {
  return (
    <div className='h-20 flex items-center px-8 fixed w-full z-50  bg-white shadow-sm'>
        <Logo />
    </div>
  )
}

export default Navbar