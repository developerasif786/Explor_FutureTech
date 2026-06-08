import React from "react";
import goool4 from "./img/goool4.png";
import Contactfomprops from "./Contactfomprops";
import flag from "./img/flag.png";
function ContactS2() {
  return (
    <>
      <div className="border-y border-666666 sm:flex">
        {/* left  */}
        <div
          className="border-b sm:border-b-0 sm:border-r border-666666 px-4
           sm:px-[60px] pt-10 sm:pt-15 sm:w-[40%]
                                 flex flex-col justify-center tems-center">
          <img
            src={goool4}
            alt="img"
            className="size-[50px] sm:size-15 object-contain"
          />
          <p className="heding-2 mt-5 mb-10 sm:mt-[30px] w-[300px] sm:w-100">
            Get in Touch with AI Podcasts
          </p>
        </div>
        {/* right  */}
        <div className="px-9 sm:px-15 py-10 sm:py-15 flax gap-10 sm:w-[60%]">
          <div className=" flex flex-wrap justify-between">
            <Contactfomprops
              name="First Name"
              type="text"
              placeholdername="Enter First Name"
            />
            <Contactfomprops
              name="Last Name"
              type="text"
              placeholdername="Enter Last Name"
            />
            <Contactfomprops
              name="Email"
              type="Email"
              placeholdername="Enter your Email"
            />
            <div className="mt-5 sm:mt-[30px]">
              <label className="heding-11 mt-5 sm:mt-[30px]">
                Phone Number
              </label>
              <div className="flex gap-2 mt-2">
                <div className="flex items-center gap-2 bg-[#262626] border border-[#666666] rounded-[6px] px-3">
                  <span>
                    <img
                      src={flag}
                      alt="flag"
                      className="s size-[30px] object-contain"
                    />
                  </span>
                  <span className="text-FFFFFF">⌄</span>
                </div>
                <input
                  type="tel"
                  placeholder="Enter Phone Number"
                  className="flex-1 h-[53px] bg-[#262626] border border-[#666666] rounded-[6px] p-4 w-[228px] h-[53px]
                             placeholder:text-666666 outline-none"
                />
              </div>
            </div>
          </div>
          {/* Message */}
          <div className="mt-5">
            <label className="heding-11 mb-20  sm:mt-[30px]">Message</label>
            <textarea
              placeholder="Enter your Message"
              className="w-full h-[120px] mt-4 bg-[#262626] border border-[#666666] rounded-[6px] p-4 text-white
                         placeholder:text-666666 outline-none resize-none"
            ></textarea>
          </div>
          {/* Checkbox */}
          <div className="sm:flex sm:justify-between sm:items-center mt-[30px]">
            <div className="flex items-center gap-2 ">
              <input type="checkbox" className="w-4 h-4 " />
              <p className="heding-10">
                I agree with Terms of Use and Privacy Policy
              </p>
              {/* button  */}
            </div>
            <button className="w-[318px] sm:w-[103px] h-[52px] bg-[#FFD11A] rounded-[6px] heding-10 mt-5 sm:mt-0">
              Send
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
export default ContactS2;
