import React from 'react'

function HeroCard(props) {
    return (
        <>
            <div className="border-1 border-666666 px-4 py-[30px] sm:py-10 sm:pl-20 sm:pr-20 sm:w-[33.33%]">
                <img src={props.img1} alt="" className="size-[30px] sm:size-10 object-contain" />
                <div className="flex justify-between items-center">
                    <div className="my-4 sm:my-5">
                        <p className="heding-6 ">{props.name1}</p>
                        <p className="heding-8 pt-1">{props.name2}</p>
                    </div>
                    <img src={props.img2} alt="" className="size-10 sm:size-11 object-contain" />
                </div>
                <p className="heding-8">{props.discareption}</p>
            </div>
        </>
    )
}

export default HeroCard
