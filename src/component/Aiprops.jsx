import React from "react";
import plus from "./img/plus.png";
function Aiprops(props) {
  return (
    <>
      <div className="bg-1A1A1A p-6 rounded-[8px] border border-666666 flex justify-between items-center">
        <p className="heding-6">{props.name}</p>
        <img src={plus} alt="" className="w-[13.33px] object-contain" />
      </div>
    </>
  );
}

export default Aiprops;
