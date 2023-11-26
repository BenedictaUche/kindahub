import React from 'react'
import { NavLink } from 'react-router-dom'
import { Logo } from '../../utils/Icons'

const AuthNav = () => {
  return (
    <div className='bg-slate-50'>
        <nav className='flex justify-between items-center px-10 py-2'>
            <Logo />
            <div className='inline-flex gap-6 text-lg'>
                <NavLink to='/about' activeClassName='active'>About</NavLink>
                <NavLink to='/contactus' activeClassName='active'>Contact us</NavLink>
            </div>
        </nav>
    </div>
  )
}

export default AuthNav
