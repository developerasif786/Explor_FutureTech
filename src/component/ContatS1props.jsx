import React from "react";
import FBtn from "./FBtn";
import ContactBtn from "./ContactBtn";

function ContatS1props(props) {
  return (
    <>
      <div className="">
        <p className="heding-6 mb-5">{props.name}</p>
        <div className="pl-[50px] sm:pl-0 flex flex-col gap-[10px]">
          <ContactBtn name="contact@ai-podcasts.com" />
          <ContactBtn name="+1 (123) 456-7890" />
        </div>
      </div>
    </>
  );
}

export default ContatS1props;
