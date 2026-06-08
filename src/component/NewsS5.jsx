import React from "react";
import Btn2s4 from "./Btn2s4";
function NewsS5() {
  return (
    <>
      <div className="py-5 pl-4 sm:py-10 sm:px-20 flex justify-between gap-[14px] overflow-hidden border-t border-666666">
        {/* 1 */}
        <Btn2s4 name="all" />
        {/* 2 */}
        <Btn2s4 name="Technology" />
        {/* 3 */}
        <Btn2s4 name="Politics" />
        {/* 4 */}
        <Btn2s4 name="Health" />
        {/* 5 */}
        <Btn2s4 name="Environment" />
        {/* 6 */}
        <Btn2s4 name="Sports" />
      </div>
    </>
  );
}

export default NewsS5;
