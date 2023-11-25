import React from 'react'
import { Link } from 'react-router-dom'
import { Logo } from '../../utils/Icons'

const Navbar = () => {
  return (
    <>
        <nav className='flex justify-between items-center'>
            <Logo />
            <div>
                <Link to='/about'>About</Link>
                <Link to='/contactus'>Contact us</Link>
            </div>
        </nav>
    </>
  )
}

export default Navbar
