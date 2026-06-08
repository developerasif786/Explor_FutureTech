import React from 'react'
import goolero1 from './img/goolero1.png'
function Footercardprops() {
  return (
    <>
      <div className="p-6 sm:p-10 rotate-[10px] rounded-xl border border-666666  bg-[#262626]">
        <div className="flex justify-between">
          <p className="fon font-inter font-semibold text-[16px] sm:text-[22px] leading-[150%] tracking-[3%] text-FFFFFF">Resource Access</p>
          <img src={goolero1} alt="" className="s size-10 sm:size-[52px] object-contain" />
        </div>
        <p className="heding-9 mt-[10px] sm:mt-5">Visitors can access a wide range of resources, including ebooks, whitepapers, reports.</p>
      </div>
    </>
  )
}
export default Footercardprops
