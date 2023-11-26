import React from 'react'
import HeroImg from '../../assets/HeroImg.webp'

const Hero = () => {

    const backgroundImageStyle = {
        backgroundImage: `url(${HeroImg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      };
  return (
    <div className=" flex flex-col py-8 h-[29em] px-6 mx-4 my-2 rounded-lg" style={backgroundImageStyle}>
    </div>
  )
}

export default Hero
