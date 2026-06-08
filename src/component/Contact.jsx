import React from "react";
import ContatS1 from "./ContatS1props";
import tawetar from "./img/tawetar.png";
import peyada from "./img/peyada.png";
import insta from "./img/in.png";
import ContactS2 from "./ContactS2";
import CotactS3 from "./CotactS3";
function Contact() {
  return (
    <>
      <div className="bg-141414">
        {/* section 1  */}
        <div className="border border-666666 grid grid-cols-1 grid-rows-4 sm:grid-cols-4 sm:grid-rows-1 px-4  sm:px-10">
          <div className="border-b border-[#666666] sm:border-b-0 sm:border-r sm:flex sm:flex-col sm:items-center  py-5 sm:py-15">
            <ContatS1 name="General Inquiries" />
          </div>
          <div className="border-b border-[#666666] sm:border-b-0 sm:border-r sm:flex sm:flex-col sm:items-center py-5 sm:py-15">
            <ContatS1 name="Technical Support" />
          </div>
          <div className="border-b border-[#666666] sm:border-b-0 sm:border-r sm:flex sm:flex-col sm:items-center py-5 sm:py-15">
            <ContatS1 name="Our Office" />
          </div>
          <div className="flex flex-col justify-center pl-3 py- sm:pb-10">
            <p className="heding-6 mb-5">Connect with Us</p>
            <div className="flex gap-2">
              <button className="py-3 px-9 border border-666666 rounded-[6px] hover:bg-[#262626] cursor-pointer">
                <img
                  src={tawetar}
                  alt="img"
                  className=" size-5 object-contain "
                />
              </button>
              <button className="py-3 px-9 border border-666666 rounded-[6px] hover:bg-[#262626] cursor-pointer">
                <img
                  src={peyada}
                  alt="img"
                  className=" size-5 object-contain "
                />
              </button>
              <button className="py-3 px-9 border border-666666 rounded-[6px] hover:bg-[#262626] cursor-pointer">
                <img
                  src={insta}
                  alt="img"
                  className=" size-5 object-contain "
                />
              </button>
            </div>
          </div>
        </div>
        {/* section 2  */}
        <ContactS2 />
        {/* section 3  */}
        <CotactS3 />
      </div>
    </>
  );
}

export default Contact;
