import React from 'react'
import { Link } from 'react-router-dom'
import { Logo } from '../../utils/Icons'

const Navbar = () => {
  return (
    <>
        <nav className='flex justify-between items-center'>
            <Logo />
            <div>
                <Link to='/home'>Home</Link>
                <Link to='/help'>Help</Link>
                <Link to='/reward'>Reward</Link>
                <Link to='/profile'>Help</Link>
                <Link to='/login'>Signout</Link>
            </div>
        </nav>
    </>
  )
}

export default Navbar
