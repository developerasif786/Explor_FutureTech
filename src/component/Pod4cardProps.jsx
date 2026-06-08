import React from 'react'
import ero1 from './img/ero1.png'
function Pod4cardProps(props) {
    return (
        <>
            <div className="w-fit">
                <img src={props.img} alt="" className="w-[358px] h-[208px] sm:w-[360px] sm:h-[244px] object-cover rounded-[12px]" />
                <p className="heding-6 mt-5 sm:mt-6">{props.p1}</p>
                <p className="heding-8 mt-[6px] mb-5 sm:mt-[10px] sm:mb-6 sm:w-90">{props.p2}</p>
                <button className='heding-10 flex gap-2 justify-center items-center bg-141414 hover:bg-333333
                           py-[14px] px-31 sm:px-5 rounded-[8px] border border-666666'>Listen Podcast
                    <img src={ero1} alt="ero1img" className='object-center size-[13.75px]' />
                </button>
            </div>
        </>
    )
}
export default Pod4cardProps
