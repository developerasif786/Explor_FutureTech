import React from 'react'

function HeroS3cardprops(props) {
    return (
        <>
            <div className="p-6 sm:p-[30px] bg-[#262626] rounded-[10px] border border-666666 sm:w-[363px] sm:h-[154px]">
                <p className="heding-5">{props.name}</p>
                <p className="heding-8">{props.discaription}</p>
            </div>
        </>
    )
}

export default HeroS3cardprops
