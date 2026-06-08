import React from 'react'
import star from './img/star.png'

function HS7CardProps(props) {
    return (
        <>
            <div className="sm:w-[373.33px] sm:h-95 w-[358px] h-[314px] bg-red-90 py-10 flex flex-col justify-center items-center">
                <div className="w-[358px] h-[51px] sm:h-15 flex gap-3 justify-center items-center sm:mb-[30px]">
                    <img src={props.img} alt="img" className="size-[50px] sm:size-15 object-contain" />
                    <div className="">
                        <p className="heding-6">{props.name1}</p>
                        <p className="heding-11 !text-666666">{props.name2}</p>
                    </div>
                </div>
                <div className="relative mx-auto mt-8 w-[358px] h-[134px]">
                    <div className="absolute -top-6 left-1/2 -translate-x-1/2 bg-141414 border border-666666 rounded-full
                                px-2 py-3 flex gap-2 shadow-md">
                        <img src={star} alt="" className="size-5 sm:size-6 object-contain" />
                        <img src={star} alt="" className="size-5 sm:size-6 object-contain" />
                        <img src={star} alt="" className="size-5 sm:size-6 object-contain" />
                        <img src={star} alt="" className="size-5 sm:size-6 object-contain" />
                        <img src={star} alt="" className="size-5 sm:size-6 object-contain" />
                    </div>
                    <div className="bg-1A1A1A  pt-[40px] rounded-[10px] border border-666666 w-[358px] h-[153px] px-7">
                        <p className="text-center  heding-8 text-FFFFFF">
                            {props.discaription}
                        </p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default HS7CardProps
