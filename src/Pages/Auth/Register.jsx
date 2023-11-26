import React from 'react'
import AuthVectorImage from '../../assets/AuthVector.png';
import { Link } from 'react-router-dom';

const Register = () => {
  return (
    <div className='flex min-h-screen items-center bg-slate-50'>
      <div className="w-full md:w-1/2 lg:w-1/2 xl:w-1/2">
        <img src={AuthVectorImage} alt="Auth Vector" className="w-full h-auto" />
      </div>
      <div className="w-full md:w-1/2 lg:w-1/2 xl:w-1/2 p-8">
        <h2 className="text-4xl font-bold mb-8">Welcome to KindaHub</h2>

        <form className="space-y-4">

          <div>
            <label htmlFor="fullName" className="block text-sm font-medium text-gray-600">
              Full Name
            </label>
            <input
              type="fullName"
              name="fullName"
              id="fullName"
              className="mt-1 p-2 w-full border-b-2 focus:outline-none focus:border-pink-500"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-600">
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              className="mt-1 p-2 w-full border-b-2 focus:outline-none focus:border-pink-500"
            />
          </div>

          <div>
            <label htmlFor="city" className="block text-sm font-medium text-gray-600">
              City/Country
            </label>
            <input
              type="city"
              name="city"
              id="city"
              className="mt-1 p-2 w-full border-b-2 focus:outline-none focus:border-pink-500"
            />
          </div>

          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-600">
              Password
            </label>
            <input
              type="password"
              name="password"
              id="password"
              className="mt-1 p-2 w-full border-b-2 focus:outline-none focus:border-pink-500"
            />
          </div>


          <button
            type="submit"
            className="bg-pink-400 hover:bg-pink-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline-blue"
          >
            Create account
          </button>
        </form>

        <p className="mt-4">
          Already have an account? <Link to="/login" className="text-blue-500">Login</Link>
        </p>
      </div>
    </div>
  )
}

export default Register
