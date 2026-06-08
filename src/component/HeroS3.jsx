import React from 'react';
import heroicon4 from "./img/heroicon-4.png"
import heroicon5 from "./img/heroicon-5.png"
import HeroS3cardprops from './HeroS3cardprops';

function HeroS3() {
    return (
        <>
            <div className=" bg-141414 sm:flex border-1 border-666666">
                {/* left  */}
                <div className="py-[50px] px-4 border-1 border-666666 sm:w-[35%] sm:py-[122px] sm:pl-[80px]">
                    <img src={heroicon4} alt="img" className=" size-[50] object-contain" />
                    <p className="heding-3 mt-5 mb-[6px] sm:mb-[10px]">Future Technology Blog</p>
                    <p className="heding-8">Stay informed with our blog section dedicated to future technology.</p>
                </div>
                {/* right card container */}
                <div className="flex flex-col sm:flex-row sm:flex-wrap sm:py-[80px] sm:pl-[60px] gap-[10px] sm:gap-4 px-4 py-[30px] sm:w-[65%]">
                    {/* card-1  */}
                    <HeroS3cardprops
                        name="Quantity"
                        discaription="Over 1,000 articles on emerging tech trends and breakthroughs."
                    />
                    {/* card-2  */}
                    <HeroS3cardprops
                        name="Variety"
                        discaription="Articles cover fields like AI, robotics, biotechnology, and more."
                    />
                    {/* card-3  */}
                    <HeroS3cardprops
                        name="Frequency"
                        discaription="Fresh content added daily to keep you up to date."
                    />
                    {/* card-4  */}

                    <HeroS3cardprops
                        name="Authoritative"
                        discaription="Written by our team of tech experts and industry professionals."
                    />
                    {/* card-end  */}
                </div>
            </div>

            {/* 222222222 */}

            <div className=" bg-141414 sm:flex border-1 border-666666">
                {/* left  */}
                <div className="py-[50px] px-4 border-1 border-666666 sm:w-[35%] sm:py-[122px] sm:pl-[80px]">
                    <img src={heroicon5} alt="img" className=" size-[50] w-[69px] h-15 object-contain" />
                    <p className="heding-3 mt-5 mb-[6px] sm:mb-[10px]">Research Insights Blogs</p>
                    <p className="heding-8">Dive deep into future technology concepts with our research section.</p>
                </div>
                {/* right card container */}
                <div className="flex flex-col sm:flex-row sm:flex-wrap sm:py-[80px] sm:pl-[60px] gap-[10px] sm:gap-4 px-4 py-[30px] sm:w-[65%]">
                    {/* card-1  */}
                    <HeroS3cardprops
                        name="Depth"
                        discaription="Over 1,000 articles on emerging tech trends and breakthroughs."
                    />
                    {/* card-2  */}
                    <HeroS3cardprops
                        name="Graphics"
                        discaription="Articles cover fields like AI, robotics, biotechnology, and more."
                    />
                    {/* card-3  */}
                    <HeroS3cardprops
                        name="Trends"
                        discaription="Fresh content added daily to keep you up to date."
                    />
                    {/* card-4  */}
                    <HeroS3cardprops
                        name="Contributors"
                        discaription="Written by our team of tech experts and industry professionals."
                    />
                    {/* card-end  */}
                </div>
            </div>
        </>
    )
}

export default HeroS3
