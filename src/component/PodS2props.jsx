import React from "react";
import ero1 from "./img/ero1.png";
import star from "./img/star.png";
function PodS2props(props) {
  return (
    <>
      <div className="sm:flex px-5 border-y border-666666">
        {/* left  */}
        <div
          className="sm:w-[40%] py-10 sm:py-15 px-4 sm:px-15 sm:flex sm:flex-col sm:justify-center
        border-b border-[#666666] sm:border-b-0 sm:border-r sm:border-[#666666]"
        >
          <img
            src={props.img1}
            alt="img"
            className="size-[50px] size-15 object-contain"
          />
          <div className="flex justify-between items-center">
            <p className="font-kumbh-sans font-semibold text-[20px] sm:text-[24px] leading-[150%] text-FFFFFF">
              {props.lname1}
            </p>
            <div
              className="flex justify-between items-center w-[134px] sm:w-[144px]
            mt-[32px] mb-[22px] py-[8px] px-[14px] bg-141414 rounded-full border border-666666"
            >
              <img
                src={star}
                alt="star"
                className="size-[18px] sm:size-5 object-contain"
              />
              <img
                src={star}
                alt="star"
                className="size-[18px] sm:size-5 object-contain"
              />
              <img
                src={star}
                alt="star"
                className="size-[18px] sm:size-5 object-contain"
              />
              <img
                src={star}
                alt="star"
                className="size-[18px] sm:size-5 object-contain"
              />
              <img
                src={star}
                alt="star"
                className="size-[18px] sm:size-5 object-contain"
              />
            </div>
          </div>
          <div className="">
            <div
              className=" w-[320px] h-[89px] sm:w-[413px] sm:h-[98px] p-5 sm:p-6  border border-666666 rounded-[8px]
             bg-1A1A1A flex justify-between items-center"
            >
              <div className="">
                <p className="heding-8">{props.host}</p>
                <p className="heding-8 !text-FFFFFF">{props.dactarname}</p>
              </div>
              <button
                className="flex gap-2 items-center justify-center bg-141414
                 w-[157px] h-[49px] heding-10 hover:bg-666666 rounded-[8px] border border-666666"
              >
                Listen Podcast
                <img
                  src={ero1}
                  alt="eroimg"
                  className="size-[13.75px] object-contain"
                />
              </button>
            </div>
          </div>
        </div>
        {/* right  */}
        <div className="sm:w-[60%] py-10 px-6 sm:py-15 sm:px-12">
          <img
            src={props.img2}
            alt=""
            className=" w-[310px] h-[157px] sm:w-[747px] sm:h-[297px] origin-center rounded-[12px] sm:rounded-2xl"
          />
          <p className="heding-4 pt-5 sm:pt-6 !text-FFFFFF sm:mr-60 ">
            {props.rp1}
          </p>
          <p className="heding-8 pt-[6px] pb-[20px] sm:pt-[10px] sm:pb-10 sm:pt-6 w-70 sm:w-full">
            {props.rp2}
          </p>
          {/* 3 div container  */}
          <div className="flex flex-col sm:flex-row gap-4">
            {/* 1  */}
            <div className="w-[310px] h-[87px] sm:w-[238.33px] sm:h-[101px] flex flex-col justify-center px-5 sm:px-6 rounded-[8px] bg-1A1A1A border border-666666">
              <p className="heding-8">{props.rp3}</p>
              <p className="heding-6">{props.rp4}</p>
            </div>
            {/* 2 */}
            <div className="w-[310px] h-[87px] sm:w-[238.33px] sm:h-[101px] flex flex-col justify-center px-5 sm:px-6 rounded-[8px] bg-1A1A1A border border-666666">
              <p className="heding-8">{props.rp5}</p>
              <p className="heding-6">{props.rp6}</p>
            </div>
            {/* 3 */}
            <div className="w-[310px] h-[87px] sm:w-[238.33px] sm:h-[101px] flex flex-col justify-center px-5 sm:px-6 rounded-[8px] bg-1A1A1A border border-666666">
              <p className="heding-8">{props.rp7}</p>
              <p className="heding-6">{props.rp8}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default PodS2props;
