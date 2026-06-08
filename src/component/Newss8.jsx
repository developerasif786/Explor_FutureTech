import React from "react";

function Newss8(props) {
  return (
    <>
      <div className="">
        <img
          src={props.img}
          alt=""
          className="w-[358px] h-[210px] sm:w-[570px] sm:h-[331px] 
            rounded-[10px] object-contain"
        />
        <p className="heding-5 mt-5 mb-[5px] w-fit">{props.p1}</p>
        <p className="heding-8 sm:w-136">{props.p2}</p>
      </div>
    </>
  );
}

export default Newss8;
