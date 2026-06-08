import React from 'react'
import ero1 from './img/ero1.png'
function FBtn(props) {
    return (
        <>
            <button className="heding-10 border border-[#666666] rounded-[8px] px-[14px] py-2 sm:[px-10] sm:py-4
            flex justify-center items-center gap-2 hover:bg-[#1A1A1A] cursor-pointer" >
                {props.name}
                <img src={ero1} alt="ero1" className="size-[18px] sm:size-5 object-contain" />
            </button>
        </>
    )
}

export default FBtn
