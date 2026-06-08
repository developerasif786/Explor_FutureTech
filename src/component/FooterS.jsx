import React from 'react'
import logo1 from './img/logo1.png'
import Footercardprops from './Footercardprops'
import FPprops from './FPprops'
import Button from './Button'
import ero1 from './img/ero1.png'
import FBtn from './FBtn'
import ficon from './img/ficon.png'

function FooterS() {
    return (
        <>
            <div className="">
                <div className="bg-[#262626] px-4 sm:px-20 py-10 sm:py-30 border-y border-666666">
                    <div className="sm:flex sm:gap-15">
                        <img src={logo1} alt="img" className="size-15 sm:size-[150px] object-contain hidden sm:block" />
                        <div className="">
                            <div className="flex items-center gap-5 sm:gap-15 ">
                                <img src={logo1} alt="img" className="size-15 sm:size-[150px] object-contain sm:hidden" />
                                <button className='heding-8 !text-[#FFFFFF] bg-[#333333] py-1 px-2 rounded-[4px] hover:bg-[#262626]'>Learn, Connect, and Innovate</button>
                            </div>
                            <p className="font-kumbh-sans font-medium text-[28px] sm:size-[58px] leading-[130%] tracking-[3%] text-FFFFFF mt-5 mb-1 sm:w-140">Be Part of the Future Tech Revolution</p>
                            <p className="heding-9 w-80 sm:hidden">Immerse yourself in the world of future technology. Explore our comprehensive resources.</p>
                            <p className="heding-10 hidden sm:block sm:w-240">Immerse yourself in the world of future technology. Explore our comprehensive resources, connect with fellow tech enthusiasts, and drive innovation in the industry. Join a dynamic community of forward-thinkers.</p>
                        </div>
                    </div>
                    {/* card contianer  */}
                    <div className="bg-141414 p-[10px] sm:p-5 border border-666666 flex sm:flex-row flex-col gap-[10px] sm:justify-between sm:flex sm:gap-5 mt-10 sm:mt-25 rounded-[10px] sm:rounded-[12px]">
                        <Footercardprops />
                        <Footercardprops />
                        <Footercardprops />
                    </div>
                </div>
                {/* div 2  */}
                <div className="bg-141414 px-4 sm:px-20 ">
                    <div className="py-10 sm:py-15">
                        <div className="flex flex-wrap gap-5 sm:gap-20 ">

                            <FPprops
                                name1='Home'
                                name2='Bloge'
                                name3='Features'
                                name4='Resources'
                                name5='Testimonials'
                                name6='Contact Us'
                                name7='Newsletter'
                            />
                            {/* 2 */}
                            <FPprops
                                name1='News'
                                name2='Trending Stories'
                                name3='Featured Videos'
                                name4='Technology'
                                name5='Health'
                                name6='Politics'
                                name7='Environment'
                            />
                            {/* 3  */}
                            <FPprops
                                name1='Podcasts'
                                name2='AI Revolution'
                                name3='AI Revolution'
                                name4='TechTalk AI'
                                name5='AI Conversations'
                            />
                            {/* 4 */}
                            <FPprops
                                name1='Blogs'
                                name2='Quantum Computing'
                                name3='AI Ethics'
                                name4='Space Exploration'
                                name5='Biotechnology'
                                name6='Renewable Energy'
                                name7='Biohacking'
                            />
                            <div className="mt-5 sm:mt-0 hidden sm:block">
                                <p className="heding-7 mb-4 sm:mb-9">Resources</p>
                                <div className="flex flex-wrap gap-3 sm:flex-col">
                                    {/* 1 */}
                                    <FBtn
                                        name='Whitepapers'
                                    />
                                    {/* 2 */}
                                    <FBtn
                                        name='Ebooks'
                                    />
                                    {/* 3 */}
                                    <FBtn
                                        name='Reports'
                                    />
                                    {/* 4 */}
                                    <FBtn
                                        name='Research Papers'
                                    />
                                    {/*  end  */}
                                </div>
                            </div>
                        </div>
                        {/* button container  */}
                        <div className="mt-5 sm:hidden">
                            <p className="heding-7 mb-4 sm:mb-9">Resources</p>
                            <div className="flex flex-wrap gap-3">
                                {/* 1 */}
                                <FBtn
                                    name='Whitepapers'
                                />
                                {/* 2 */}
                                <FBtn
                                    name='Ebooks'
                                />
                                {/* 3 */}
                                <FBtn
                                    name='Reports'
                                />
                                {/* 4 */}
                                <FBtn
                                    name='Research Papers'
                                />
                                {/*  end  */}
                            </div>
                        </div>
                    </div>
                    {/* icon conteainer  */}
                    <div className="flex flex-col justify-between items-center sm:flex-row border-t-1 border-t-666666 h-36 sm:h-[66px] py-6">
                        <div className="sm:hidden">
                            <img src={ficon} alt="ficon" className="w-[88px] h-5 sm:w-28 sm:h-6 object-center" />
                        </div>
                        <div className="flex gap-4">
                            <p className="heding-10">Terms & Conditions</p>
                            <p className="heding-10">Privacy Policy</p>
                        </div>
                        <div className="hidden sm:block">
                            <img src={ficon} alt="ficon" className="w-[88px] h-5 sm:w-28 sm:h-6 object-center" />
                        </div>
                        <div className="">
                            <p className="heding-10">© 2024 FutureTech. All rights reserved.</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default FooterS
