import React from "react";
import ero1 from "./img/ero1.png";
function PAndBtnS(props) {
  return (
    <>
      <div className="bg-1A1A1A px-4 py-10 sm:p-20 sm:flex sm:justify-between border-t border-666666">
        <div className="">
          <button className="heding-8 !text-[#FFFFFF] bg-[#333333] py-1 px-2 rounded-[4px] hover:bg-[#262626]">
            {props.btn1}
          </button>
          <p className="heding-2 pt-[10px]">{props.name}</p>
        </div>
        <div className="">
          {props.btn2 && (
            <button
              className="heding-10 flex gap-[6px] justify-center items-center
                              w-[358px] h-[49px] sm:w-auto sm:h-auto sm:px-5 sm:py-[14px] mt-[30px] bg-[#141414]  
                              hover:bg-[#262626] rounded-[8px] flex items-center gap-1 border-1 border-666666"
            >
              {props.btn2}
              <img src={ero1} alt="" className="size-[13px] object-contain" />
            </button>
          )}
        </div>
      </div>
    </>
  );
}
export default PAndBtnS;
