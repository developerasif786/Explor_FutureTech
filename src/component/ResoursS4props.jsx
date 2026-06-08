import React from "react";
import ero1 from "./img/ero1.png";
function ResoursS4props(props) {
  return (
    <>
      <div className="sm:flex sm:px-20 border-y border-y-666666">
        {/* left  */}
        <div className="sm:w-[40%] flex flex-col justify-center px-4  py-10 sm:py-0 border-b border-b-[#666666] sm:border-b-0 sm:border-r sm:border-r-[#666666] ">
          <img
            src={props.img1}
            alt=""
            className="size-[50px] sm:size-15 object-contain"
          />
          <p className="sm:w-100 font-kumbh-sans font-semibold text-[21px] sm:text-[30px] leading-[150%] tracking-[-3%] text-FFFFFF pt-[30px] pb-[10px] sm:pt-10 sm:pb-5 ">
            {props.lname1}
          </p>
          <p className="heding-8 w-95">{props.lname2}</p>
        </div>
        {/* right  */}
        <div className="sm:w-[60%] px-4 sm:pl-15 smpx-20 py-10 sm-py-20">
          <img
            src={props.img2}
            alt=""
            className="w-[358px] h-[165px] sm:w-[748px] sm:h-[303px] rounded-[10px] sm:rounded-[12px] object-cover"
          />
          <div className="sm:flex">
            <div className="">
              <p className="heding-5 pt-5 pb-[6px]">{props.rp1}</p>
              <p className="heding-8 sm:w-115">{props.rp2}</p>
            </div>
            <button className="heding-10 mt-5 mb-[30px] w-[358px] sm:w-[230px] h-[49px] flex justify-center items-center gap-1 border border-666666 rounded-[10px] px-2">
              {props.btn}{" "}
              <img src={ero1} alt="" className="size-[13.38px] object-center" />
            </button>
          </div>
          <div className="flex flex-wrap sm:flex-nowrap justify-between sm:gap-3 sm:mt-10">
            {/* 1  */}
            <div className="border border-666666 w-[174px] sm:w-[200px] h-[82px]  sm:h-[98px] rounded-[6px] p-5 sm:p-6">
              <p className="heding-8">{props.rp3}</p>
              <p className="heding-8 !text-FFFFFF">{props.rp4}</p>
            </div>
            {/* 2  */}
            <div className="border border-666666 w-[174px] sm:w-[200px] h-[82px]  sm:h-[98px] rounded-[6px] p-5 sm:p-6">
              <p className="heding-8">{props.rp5}</p>
              <p className="heding-8 !text-FFFFFF">{props.rp6}</p>
            </div>
            {/* 3  */}
            <div className="border border-666666 w-[358px] mt-3 sm:mt-0 sm:w-[200px] h-[82px]  sm:h-[98px] rounded-[6px] p-5 sm:p-6">
              <p className="heding-8">{props.rp3}</p>
              <p className="heding-8 !text-FFFFFF">{props.rp4}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ResoursS4props;
