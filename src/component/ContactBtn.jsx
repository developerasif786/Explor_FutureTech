import React from "react";
import ero1 from "./img/ero1.png";

function ContactBtn(props) {
  return (
    <>
      <button
        className="heding-10 border border-[#666666] rounded-[8px] w-fit py-[14px] px-5
                 flex justify-center items-center gap-1 hover:bg-[#262626] cursor-pointer">
        {props.name}
        <img src={ero1} alt="ero1" className="size-[13.75px] object-contain" />
      </button>
    </>
  );
}

export default ContactBtn;
