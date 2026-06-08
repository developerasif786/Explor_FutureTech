import React from "react";
import ero from "./img/ero1.png";
import icon from "./img/newss2icon.png";
function NewsS3(props) {
  return (
    <>
      <div className="py-10 sm:py-15">
        <img
          src={props.img}
          alt="img"
          className="rounded-[8px] w-[358px] sm:w-[380px] h-[185px]  object-cover"
        />
        <p className="heding-11 mt-4 !font-semibold">{props.p1}</p>
        <p className="heding-8 mt-1 mb-4">{props.p1}</p>
        <div className="flex justify-between items-center">
          <img
            src={icon}
            alt="icon"
            className="w-[155px] h-[33px] object-contain"
          />
          <button
            className="heding-10 w-[153px] sm:w-[150px] h-[49px] flex gap-1 justify-center items-center 
                       border border-98989A rounded-[6px] bg-141414 hover:bg-333333"
          >
            Read More
            <img src={ero} alt="" className="size-[13px] object-contain" />
          </button>
        </div>
      </div>
    </>
  );
}

export default NewsS3;
