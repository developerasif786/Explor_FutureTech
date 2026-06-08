import React from 'react'

function HeroContCard(props) {
    return (
        <>
            <div className="sm:w-[33.33%] w-[33%] sm:py-[30px] py-5 border-1 border-666666 pl-4 sm:pl-20 ">
                <div className=" flex it items-center ustify-center gap-1.5">
                    <p className="heding-3">{props.nomber}</p>
                    <img src={props.img2} alt="" className="si size-5 object-contain" />
                </div>
                <p className="heding-10">{props.discaription}</p>
            </div>
        </>
    )
}

export default HeroContCard
