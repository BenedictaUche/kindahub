import React from 'react'
import { NavLink } from 'react-router-dom'
import { Logo } from '../../utils/Icons'

const Navbar = () => {
  return (
    <div className='bg-slate-50'>
        <nav className='flex justify-between items-center px-10 py-4'>
            <Logo />
            <div className='inline-flex gap-6 text-lg'>
                <NavLink activeClassName='active' to='/home'>Home</NavLink>
                <NavLink activeClassName='active' to='/help'>Help</NavLink>
                <NavLink activeClassName='active' to='/reward'>Reward</NavLink>
                <NavLink activeClassName='active' to='/profile'>Profile</NavLink>
                <NavLink activeClassName='active' to='/login'>Signout</NavLink>
            </div>
        </nav>
    </div>
  )
}

export default Navbar
