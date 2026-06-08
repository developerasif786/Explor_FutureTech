import React from "react";

function Contactfomprops(props) {
  return (
    <>
      <div className="bg-red-5 flex flex-col gap-3">
        <label htmlFor="" className="heding-11 capitalize mt-5 sm:mt-[30px]">
          {props.name}
        </label>
        <input
          type={props.type}
          placeholder={props.placeholdername}
          className="heding-10 w-[318px] sm:w-[349px h-[53px] border border-[#666666] rounded-[6px] bg-[#262626] p-4 capitalize
                     placeholder:text-666666 text-[16px]"
        />
      </div>
    </>
  );
}

export default Contactfomprops;
