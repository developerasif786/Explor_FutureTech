import React from "react";

function RS5(props) {
  return (
    <>
      <div className="px-4 py-10 sm:py-15 sm:px-0 sm:flex  sm:flex-col sm:justify-center sm:items-cente sm:px-[18px]">
        <img
          src={props.img1}
          alt="img"
          className="w-[358px] h-[223px] sm:w-[380px] sm:h-[270px] object-cover rounded-[10px]"
        />
        <p className="heding-6 mt-5 mb-[10px] sm:mt-6">{props.p1}</p>
        <p className="heding-8">{props.p2}</p>
        {/* btn con  */}
        <div className="flex justify-between gap-2 mt-5 sm:mt-6">
          <button className="heding-10 w-[174px] h-[49px] sm:w-[188px] bg-141414 hover:bg-404040 rounded-[7px] border border-666666">
            {props.btn1}
          </button>
          <button className="heding-10 w-[174px] h-[49px] sm:w-[188px] bg-[#262626] hover:bg-404040 rounded-[7px] border border-666666">
            {props.btn2}
          </button>
        </div>
      </div>
    </>
  );
}

export default RS5;
