import React from "react";
import Button from "./Button";
import ero1 from "./img/ero1.png";
import logodil from "./img/logodil.png";

function HomeS5cardprops(props) {
  return (
    <>
      <div className=" sm:flex border-t border-666666">
        <div className="flex justify-between items-center py-8  px-4 sm:pl-20 border- border-666666 sm:border-hidden sm:w-[30%]">
          <div className="flex items-center gap-1">
            <img
              src={props.img}
              alt="img"
              className="size-13  sm:size-15 object-contain"
            />
            <div className="">
              <p className="heding-11">{props.name1}</p>
              <p className="heding-8">{props.name2}</p>
            </div>
          </div>
          <div className="sm:hidden sm:hidden ">
            <button
              className="w-[127px] h-[49px] flex items-center justify-center gap-2 border-1 border-666666 rounded-[8px]
                                         hover:bg-[#262626] cursor-pointer heding-10"
            >
              <p className="">{props.btnname1}</p>
              <img src={ero1} alt="img" className="size-4 object-contain" />
            </button>
          </div>
        </div>
        <div className="flex justify-between items-center py-8 px-4 sm:w-full pr-20 sm:border-hidden sm:w-[70%]">
          <div className="">
            <p className="heding-6 !text-98989A">{props.name3}</p>
            <p className="heding-4 !font-inter !text-FFFFFF mt-5">
              {props.name4}
            </p>
            <p className="heding-8 mb-5"> {props.discaripshion}</p>
            <img
              src={logodil}
              alt="img-logo"
              className="w-[221px] h-[33px object-contain"
            />
          </div>
          <div className="hidden sm:block">
            <button
              className="w-[127px] h-[49px] flex items-center justify-center gap-2 border-1 border-666666 rounded-[8px]
                                         hover:bg-[#262626] cursor-pointer heding-10"
            >
              <p className="">{props.btnname2}</p>
              <img src={ero1} alt="img" className="size-4 object-contain" />
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default HomeS5cardprops;
