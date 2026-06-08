import React from 'react'

function FPprops(props) {
    return (
        <>
            <div className="flex flex-col gap-2 sm:gap-[18px] w-[169px]">
                <p className="heding-7 mb-4 sm:mb-9">{props.name1}</p>
                <p className="heding-9">{props.name2}</p>
                <p className="heding-9">{props.name3}</p>
                <p className="heding-9">{props.name4}</p>
                <p className="heding-9">{props.name5}</p>
                <p className="heding-9">{props.name6}</p>
                <p className="heding-9">{props.name7}</p>
            </div>
        </>
    )
}

export default FPprops
