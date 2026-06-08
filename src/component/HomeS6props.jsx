import React from 'react'
import Button from './Button'
import ero1 from './img/ero1.png'
import ankhbtn from './img/ankhbtn.png'

function HomeS6props(props) {
    return (
        <>
            <div className="border-1 border-666666 sm:flex">
                {/* left  */}
                <div className="flex items-center border-1 border-666666 sm:w-[35%]">
                    <div className=" px-4 py-10 sm:pl-20">
                        <img src={props.img1} alt="" className="ob object-contain size-[50px] sm:size-15" />
                        <p className="heding-3 mt-6 mb-4">{props.name1}</p>
                        <p className="heding-8 mb-6 w-78 sm:w-90">{props.discaription1}</p>
                        <button className="border border-[#666666] rounded-[8px] 
                                          flex justify-center items-center gap-2 hover:bg-1A1A1A cursor-pointer w-[358px] h-[57px]">
                            <p className="heding-10">{props.btnnam}</p>
                            <img src={ero1} alt="ero icon" className="size-[13.5px] object-contain" />
                        </button>
                        <img src={props.img2} alt="" className="object-contain size-10 w-[338px] h-[96px] sm:w-[328px] mt-5" />
                    </div>
                </div>
                {/* right  */}
                <div className="py-10 px-4 sm:py-15 sm:pl-15 sm:pr-20 sm:w-[65%]">
                    <div className="sm:flex sm:justify-between sm:items-center sm:w-[730px]">
                        <p className="heding-5">{props.rname1}</p>
                        <p className="heding-8 mt-6 sm:mt-0 sm:w-130">{props.rdiscaription1}</p>
                    </div>
                    <img src={props.img3} alt='sacreen' className="object-contain w-[358px] h-[169px]  sm:w-[747px] sm:h-[275px] my-6" />
                    <div className="sm:flex sm:justify-between sm:mb-6 sm:w-[730px]">
                        <div className="w-[358px] h-[87px] border-1 border-666666 rounded-[8px] p-5  bg-1A1A1A">
                            <p className="heding-8">{props.rname2}</p>
                            <p className="heding-6">{props.rname3}</p>
                        </div>
                        <div className="w-[358px] h-[90px] border-1 border-666666 rounded-[8px] p-5 my-4 sm:my-0
                                        flex justify-between items-center  bg-1A1A1A">
                            <div className="">
                                <p className="heding-8">{props.downlode}</p>
                                <p className="heding-6">{props.rpdf}</p>
                            </div>
                            <img src={ankhbtn} alt="" className="w-[114px] h-[49px] object-center rounded-[8px]" />
                        </div>
                    </div>
                    <div className="border-1 border-666666 rounded-[8px] p-5 bg-1A1A1A sm:w-[730px]">
                        <p className="heding-8">{props.rname4}</p>
                        <p className="heding-6">{props.rdiscaription2}</p>
                    </div>
                </div>
            </div>
        </>
    )
}
export default HomeS6props
