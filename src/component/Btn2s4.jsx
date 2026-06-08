import React from "react";

function Btn2s4(props) {
  return (
    <>
      <button
        className="heding-10 border border-[#666666] rounded-[8px] hover:bg-[#262626]
                    w-[151.87px] h-[57px] sm:w-[180px] sm:h-[69px] flex-shrink-0 
                    flex justify-center items-center gap-2 hover:bg-[#1A1A1A] cursor-pointer">
        <p>{props.name}</p>
      </button>
    </>
  );
}

export default Btn2s4;
