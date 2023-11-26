import React from "react";
import { Link } from "react-router-dom";
import LandingVectorImage from "../../assets/LandingVector.png";

const Landing = () => {
  return (
    <div className="min-h-screen bg-gradient-to-l from-pink-300 via-red-200 to-orange-200 flex flex-col">
      <div className="flex flex-wrap justify-center items-center mt-8">
        <div className="w-full md:w-1/2 lg:w-1/2 xl:w-1/2">
          <img src={LandingVectorImage} alt="Landing Vector" className="w-full h-auto" />
        </div>
        <div className="w-full md:w-1/2 lg:w-1/2 xl:w-1/2 p-8 text-center">
          <h2 className="text-5xl font-bold mb-4 text-black">Welcome to KindaHub</h2>
          <p className="ext-stone-400 font-medium mb-4">A place where kindness and compassion thrive. Connect, <br />help, and grow with your neighbors.</p>
          <div className="space-x-4">
            <Link to='/login'>
            <button className="bg-white hover:bg-blue-700 text-black font-bold py-2 px-4 rounded w-28 h-[2.7em]">Login</button>
            </Link>

            <Link to="/register">
            <button className="bg-pink-400 hover:bg-green-700 text-white font-bold py-2 px-4 rounded w-28 h-[2.7em]">Register</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing;
