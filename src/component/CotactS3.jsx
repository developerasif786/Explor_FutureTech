import React from "react";
import ContactBtn from "./ContactBtn";
import sapinar from "./img/sapinar.png";
import nainas from "./img/nainas.png";
import Aiprops from "./Aiprops";

function CotactS3() {
  return (
    <>
      <div className="sm:flex ">
        {/* left  */}
        <div className="border border-666666 py-10 sm:py-15 px-4 sm:px-20 sm:w-[40%] sm:flex sm:flex-col sm:justify-center sm:items-cente">
          <img
            src={sapinar}
            alt="logoimg"
            className="size-[50px] sm:size-15 object-contain"
          />
          <p className="font-kumbh-sans font-semibold text-[20px] sm:text-[28px] leading-[150%] text-FFFFFF mb-[6px] mt-6">
            Asked question
          </p>
          <p className="heding-8 pb-6">
            If the question is not available on our FAQ section, Feel free to
            contact us personally, we will resolve your respective doubts.
          </p>
          <ContactBtn name="Ask Qustion" />
        </div>

        {/* right  */}
        <div className="border border-666666 py-10 sm:py-15 px-4 sm:px-20 sm:w-[60%]">
          <div className="bg-1A1A1A p-6 rounded-[10px] border border-666666">
            <div className="flex justify-between items-center border-b border-666666 pb-4">
              <p className="heding-6">What is AI?</p>
              <img src={nainas} alt="" className="w-[13.13px] h-[1.67px]" />
            </div>
            <p className="heding-8 mt-4">
              AI stands for Artificial Intelligence, which refers to the
              simulation of human intelligence in machines. It enables them to
              perform tasks like problem-solving, learning, and decision-making.
            </p>
          </div>
          <div className="mt-10 flex flex-col gap-5 sm:gap-6">
            <Aiprops name="How can I listen to your podcasts?" />
            <Aiprops name="Are your podcasts free to listen to?" />
            <Aiprops name="Can I download episodes to listen offline?" />
            <Aiprops name="How often do you release new episodes?" />
          </div>
        </div>
      </div>
    </>
  );
}

export default CotactS3;
