import React from "react";
import Pod4cardProps from "./Pod4cardProps";
import pod1 from "./img/pod1.png";
import pod2 from "./img/pod2.png";
import pod3 from "./img/pod3.png";
import pod4 from "./img/pod4.png";
import pod5 from "./img/pod5.png";
import pod6 from "./img/pod6.png";
function Pods4() {
  return (
    <>
      <div className="sm:flex px-4 sm:px-13 border-t border-666666">
        {/* 1 */}
        <div className="sm:w-[33%] py-10 sm:py-15 flex justify-center">
          <Pod4cardProps
            img={pod1}
            p1="AI in Healthcare"
            p2="Dr. Lisa Adams discusses how AI is revolutionizing healthcare, from diagnostic tools to patient care."
          />
        </div>
        {/* 2 */}
        <div className="sm:w-[33%] sm:border-x border-y sm:border-y-0 border-666666 py-10 sm:py-15 flex justify-center">
          <Pod4cardProps
            img={pod2}
            p1="AI Ethics"
            p2="Explore the ethical dilemmas and considerations surrounding AI with guest speaker Dr. Michael Turner."
          />
        </div>
        {/* 3 */}
        <div className="sm:w-[33%] py-10 sm:py-15 flex justify-center">
          <Pod4cardProps
            img={pod3}
            p1="Machine Learning Explained"
            p2="Dive into the intricacies of machine learning with AI expert Sarah Davis. In this episode"
          />
        </div>
      </div>
      {/* /////////////////////////////[part 2]////////////////////////////////////    */}
      <div className="hidden sm:block px-4 sm:px-13 border-t border-666666">
        <div className="sm:flex  ">
          {/* 4 */}
          <div className="sm:w-[33%] py-10 sm:py-15 flex justify-center">
            <Pod4cardProps
              img={pod4}
              p1="AI and the Future of Work"
              p2="Dr. Olivia White joins John Parker to discuss the evolving role of AI in the workplace."
            />
          </div>
          {/* 5 */}
          <div className="sm:w-[33%] sm:border-x border-y sm:border-y-0 border-666666 py-10 sm:py-15 flex justify-center">
            <Pod4cardProps
              img={pod5}
              p1="AI in Education"
              p2="Explore the role of AI in education as Emily Turner discusses how AI is transforming..."
            />
          </div>
          {/* 6 */}
          <div className="sm:w-[33%] py-10 sm:py-15 flex justify-center">
            <Pod4cardProps
              img={pod6}
              p1="AI in Entertainment"
              p2="David Smith as they explore the influence of AI in the entertainment industry."
            />
          </div>
        </div>
      </div>
      {/* part end 2  */}
    </>
  );
}

export default Pods4;
