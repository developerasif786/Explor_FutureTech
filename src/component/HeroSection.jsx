import React from 'react'
import herorightimg from "./img/herorightimg.png";
import Button from './Button';
import ero1 from './img/ero1.png';
import "../App.css";
import HeroContCard from './HeroContCard';


function HeroSection() {
  return (
    <>
      <div className="sm:flex bg-141414">
        {/* left  */}
        <div className="w-full sm:w-[60%] sm:border-r sm:border-r-[#666666]">
          <div className="sm:pl-[80px] px-4 pt-10 pb-[30px] sm:py-[100px] flex flex-col sm:gap-5 gap-2">
            <p className="heding-4">Your Journey to Tomorrow Begins Here</p>
            <p className="heding-1">Explore the Frontiers of <br></br> Artificial Intelligence</p>
            <p className="heding-8">Welcome to the epicenter of AI innovation. FutureTech AI News is your passport to a world where <br></br> machines think, learn, and reshape the future. Join us on this visionary expedition into the heart of AI.</p>
          </div>
          {/* card div  */}
          <div className="">
            <div className="flex w-full">
              {/* card-1  */}
              <HeroContCard
                nomber="300"
                img2={ero1}
                discaription="Resources available"
              />
              {/* card-2  */}
              <HeroContCard
                nomber="12k"
                img2={ero1}
                discaription="Total  Downloads"
              />
              {/* card-3  */}
              <HeroContCard
                nomber="10k"
                img2={ero1}
                discaription="Active Users"
              />
            </div>
          </div>
        </div>
        {/* right  */}
        <div className="w-full sm:w-[40%] bgimg p-10 pt-[100px] sm:pt-[303px] sm:pl-[40px] sm:pr-[0px] sm:pb-[50px]">
          <img src={herorightimg} alt="herorightimg" className="w-[134px] h-[56px] sm:w-[174px] sm:h-[66px] object-contain" />
          <p className="heding-5 pt-4">Explore 1000+ resources</p>
          <p className="heding-8 mb-7">Over 1,000 articles  emerging tech trends and breakthroughs.</p>
          <Button
            name="Explore Resources"
            img={ero1}
          />
        </div>
      </div>
    </>
  )
}

export default HeroSection

