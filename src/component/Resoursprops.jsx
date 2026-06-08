import React from 'react'
import plus from './img/plus.png'
function Resoursprops(props) {
  return (
    <>
    <div className={`sm:w-[25%] w-[50%] h-[97px] sm:h-[210px] border border-[#666666] flex flex-col justify-center items-center ${props.cssName}`}>
      {/* <div className="sm:w-[25%] w-[50%] h-[97px] sm:h-[210px]  border border-666666 flex flex-col justify-center items-center"> */}
                 <div className="flex gap-1 items-center">
                   <p className="font-inter font-semibold text-2xl sm:text-[40px] text-FFFFFF leading-[150%]">{props.nomber}</p>
                   <img src={plus} alt="plus" className="s size-4 object-contain" />
                 </div>
                 <p className="heding-8">{props.name}</p>
               </div> 
    </>
  )
}

export default Resoursprops
