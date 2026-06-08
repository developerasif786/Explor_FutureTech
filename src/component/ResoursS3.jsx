import React from "react";

function ResoursS3() {
  return (
    <>
      <div className="bg-1A1A1A py-10 px-4 sm:p-20 sm:flex sm:justify-between sm:items-center">
        <div className="">
          <button className="heding-8 !text-[#FFFFFF] bg-[#333333] py-1 px-2 rounded-[4px] hover:bg-[#262626]">
            Dive into the Details
          </button>
          <p className="heding-2 pt-[10px] pb-4 w-70 sm:w-fit">
            In-Depth Reports and Analysis
          </p>
        </div>
        {/* btn container  */}
        <div className="flex justify-between items-center w-[358px] sm:w-[381px] h-[69px] rounded-[10px] p-2 bg-141414 border border-666666">
          <button className="py-3 px-5 sm:px-6 bg-1A1A1A border border-666666 rounded-[6px] hover:bg-[#262626]  bg-[#262626]">
            Whitepapers
          </button>
          <button className="py-3 px-5 sm:px-6 bg-1A1A1A border border-666666 rounded-[6px] hover:bg-[#262626] ">
            Ebooks
          </button>
          <button className="py-3 px-5 sm:px-6 bg-1A1A1A border border-666666 rounded-[6px] hover:bg-[#262626] ">
            Reports
          </button>
        </div>
      </div>
    </>
  );
}

export default ResoursS3;
