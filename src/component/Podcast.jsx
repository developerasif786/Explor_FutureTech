import React from "react";
import PodS2props from "./PodS2props";
import icon1 from "./img/ps2icon1.png";
import ps2img2 from "./img/ps2img2.png";
import ps2img3 from "./img/ps2img3.png";
import ps2img4 from "./img/ps2img4.png";
import PandbtnCon from "./PandbtnCon";
import PAndBtnS from "./PAndBtnS";
import Pods4 from "./Pods4";
function Podcast() {
  return (
    <>
      {/* podcast main container  */}
      <div className="bg-141414">
        {/* podcast section 1  */}
        <div className="py-10 sm:py-20 px-4 sm:px-20 border-y border-666666">
          <p className="heding-1">
            Unlock the World of Artificial Intelligence
          </p>
          <div className="sm:flex sm:justify-between sm:items-center">
            <p className="heding-1">through Podcasts</p>
            <p className="heding-8 sm:mt-5 mt-3 sm:w-182 sm:block hidden">
              Dive deep into the AI universe with our collection of insightful
              podcasts. Explore the latest trends, breakthroughs, and
              discussions on artificial intelligence. Whether you're an
              enthusiast or a professional, our AI podcasts offer a gateway to
              knowledge and innovation.
            </p>
            <p className="heding-8 sm:mt-5 mt-3 w-85 sm:hidden">
              Dive deep into the AI universe with our collection of insightful
              podcasts. Explore the latest trends, breakthroughs, and
              discussions on artificial intelligence.
            </p>
          </div>
        </div>
        {/* podcast section 2  */}
        {/* part 1   */}
        <PodS2props
          img1={icon1}
          lname1="AI Revolution"
          host="Host"
          dactarname="Dr. Sarah Mitchell"
          img2={ps2img2}
          rp1="Delves into the transformative impact of AI"
          rp2="Join Dr. Sarah Mitchell as she delves into the transformative impact of AI on industries, featuring expert interviews and real-world case studies. Explore the possibilities of AI in healthcare, finance, and more."
          rp3="Total Episodes"
          rp4="50"
          rp5="Average Episode Length"
          rp6="30 min"
          rp7="Release Frequency"
          rp8="Weekly"
        />
        {/* prt 2 */}
        <PodS2props
          img1={ps2img3}
          lname1="AI Conversations"
          host="Host"
          dactarname="Mark Anderson"
          img2={ps2img4}
          rp1="Engage in thought-provoking conversations with leading experts."
          rp2="Join Dr. Sarah Mitchell as she delves into the transformative impact of AI on industries, featuring expert interviews and real-world case studies. Explore the possibilities of AI in healthcare, finance, and more."
          rp3="Total Episodes"
          rp4="40"
          rp5="Average Episode Length"
          rp6="40 min"
          rp7="Release Frequency"
          rp8="Monthly"
        />
        {/* podcast section 3 start  */}
        <PAndBtnS
          btn1="Stay Informed with Fresh Content"
          name="Latest Podcast Episodes"
        />
        {/* podcast section 4 start  */}
        <Pods4 />
      </div>
    </>
  );
}

export default Podcast;
