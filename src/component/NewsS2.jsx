import React from "react";
import fan from "./img/3fan.png";
import icon from "./img/newss2icon.png";
function NewsS2() {
  return (
    <>
      <div className="sm:flex sm:gap-9 justify-between items-center py-10 sm:py-15 px-4 sm:px-20">
        <img
          src={fan}
          alt="fanimg"
          className="w-[358px] h-[213px] sm:w-[450px] sm:h-[325px] rounded-[10px] object-cover"
        />
        <div className="">
          <p className="font-inter font-semibold text-[20px] sm:text-[22px] leading-[150%] text-FFFFFF mt-[30px] sm:mt-0">
            Global Climate Summit Addresses Urgent Climate Action
          </p>
          <p className="heding-6 !font-medium !text-98989A mt-[6px] mb-5 sm:mt-[14px] sm:mb-10">
            World leaders gathered at the Global Climate Summit to discuss
            urgent climate action, emissions reductions, and renewable energy
            targets.
          </p>
          {/* 3 div container  */}
          <div className="flex gap-5 sm:gap-[30px] w-fit">
            {/* 1  */}
            <div className="">
              <p className="heding-8 !text-98989A">Category</p>
              <p className="heding-8 !text-FFFFFF">Environment</p>
            </div>
            {/* 2  */}
            <div className="">
              <p className="heding-8 !text-98989A">Publication Date</p>
              <p className="heding-8 !text-FFFFFF">October 10, 2023</p>
            </div>
            {/* 3  */}
            <div className="">
              <p className="heding-8 !text-98989A">Author</p>
              <p className="heding-8 !text-FFFFFF">Jane Smith</p>
            </div>
          </div>
          {/* icon and btn container  */}
          <div className="flex justify-between items-center mt-7 sm:mt-10">
            <img
              src={icon}
              alt="icon"
              className="w-[158px] h-[33px] object-contain"
            />
            <button className="heding-10 w-35 sm:w-[109px] h-[49px] border border-98989A rounded-[6px] bg-141414 hover:bg-333333 ">
              Read More
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default NewsS2;
