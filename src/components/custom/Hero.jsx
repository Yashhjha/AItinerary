import React from 'react'
import { Button } from '../ui/button'
import { Link } from 'react-router-dom'

function Hero() {
  return (
    <div className="relative max-h-screen h-[91.8vh]  overflow-hidden bg-[url('/landing.jpg')] bg-cover bg-no-repeat  bg-center flex items-center justify-center">
      <div className=" p-10 rounded-xl max-w-4xl mx-auto text-center flex flex-col items-center gap-8">
        <h1 className="font-extrabold text-[50px] text-center text-black">
          <span className="text-[#f56551]">Plan Less, Travel More: </span>
          AI-Powered Itineraries Just for You
        </h1>

       

        <Link to="/create-trip"><Button  
  className="bg-gradient-to-r from-red-500 via-pink-500 to-yellow-500 
             text-white font-semibold px-6 py-3 
             rounded-full shadow-lg 
             hover:from-red-600 hover:to-yellow-400 
             hover:shadow-xl 
             hover:scale-105 
             transition-all duration-300 ease-in-out">
  🚀 Get Started — It’s Free!
</Button>

        </Link>
      </div>
    </div>
  );
}

export default Hero;

