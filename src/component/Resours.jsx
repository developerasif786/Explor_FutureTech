import React from "react";
import Resoursprops from "./Resoursprops";
import ResoursS3 from "./ResoursS3";
import ResoursS4props from "./ResoursS4props";
import rs41 from "./img/rs4-1.png";
import rs42 from "./img/rs4-2.png";
import rs43 from "./img/rs4-3.png";
import rs44 from "./img/rs4-4.png";
import RS5 from "./RS5";
// import rs5img1 from './img/rs5img1.png'
import rs5img2 from "./img/rs5img2.png";
import rs5img3 from "./img/rs5img3.png";
import rs5img1 from "./img/rs5img1.png";

function Resours() {
  return (
    <>
      {/* main container resours  */}
      <div class="bg-141414">
        {/* section 1  */}
        <div className="py-10 px-4 sm:py-15 sm:px-20">
          <p className="heding-1">Unlock a World of </p>
          <div className="sm:flex sm:justify-between sm:items-center">
            <p className="heding-1">Knowledge</p>
            <p className="heding-8 sm:w-220 hidden sm:block">
              Dive deep into the AI universe with our collection of insightful
              podcasts. Explore the latest trends, breakthroughs, and
              discussions on artificial intelligence. Whether you're an
              enthusiast or a professional, our AI podcasts offer a gateway to
              knowledge and innovation.
            </p>
            <p className="sm:hidden heding-8 pt-3 capitalize">
              Dive deep into the AI universe with our collection of insightful
              podcasts. Explore the latest trends, breakthroughs, and
              discussions on artificial intelligence.
            </p>
          </div>
        </div>
        {/* right  */}
        <div className="flex sm:px-0 flex-wrap border sm:border-y-666666">
          {/* 1 */}
          <Resoursprops
            nomber="300"
            name="Resources available"
            cssName="border-l-0 sm:border-t-0 sm:border-b-0"
          />
          {/* 2 */}
          <Resoursprops
            nomber="12k"
            name="Total Downloads"
            cssName="border-l-0 sm:border-t-0 sm:border-b-0"
          />
          {/* 3 */}
          <Resoursprops
            nomber="10k"
            name="Active Users"
            cssName="border-l-0 sm:border-t-0 sm:border-b-0"
          />
          {/* 4 */}
          <Resoursprops
            nomber="100"
            name="Countries Usability"
            cssName="border-r-0 sm:border-t-0 sm:border-b-0"
          />
        </div>
        {/* section 3  */}
        <ResoursS3 />
        {/* section 4  */}
        <ResoursS4props
          img1={rs41}
          lname1="Quantum Computing Whitepaper"
          lname2="Provides technical specifications and requirements for implementing quantum computing systems."
          img2={rs42}
          rp1="Quantum Computing Whitepaper"
          rp2="An in-depth whitepaper exploring the principles, applications, and potential impact of quantum computing."
          rp3="Publication Date"
          rp4="Category"
          rp5="Quantum Computing"
          rp6="Author"
          rp7="Dr. Quantum"
          btn="Download PDF Now"
        />
        {/*section-4 hesa 2  */}
        <ResoursS4props
          img1={rs43}
          lname1="Space Exploration Whitepaper"
          lname2="Explores Mars colonization, asteroid resource potential, and space tourism.."
          img2={rs44}
          rp1="Space Exploration Whitepaper"
          rp2="An in-depth whitepaper covering the latest advancements in space exploration, including Mars missions and asteroid mining."
          rp3="Publication Date"
          rp4="Category"
          rp5="Space Exploration"
          rp6="Author"
          rp7="FutureTech Space Division"
          btn="Download PDF Now"
        />
        {/* section 5 */}
        <div className="sm:flex sm:px-15">
          {/* 1  */}
          <div className="border-b sm:border-b-0 sm:border-r border-[#666666] sm:w-[33%]">
            <RS5
              img1={rs5img1}
              p1="FutureTech Trends 2024"
              p2="An ebook that predicts upcoming technology trends for the next year, including AI developments"
              btn1="View Details"
              btn2="Download PDF Now"
            />
          </div>
          {/* 2 */}
          <div className="border-b sm:border-b-0 sm:border-r border-[#666666] sm:w-[33%]">
            <RS5
              img1={rs5img2}
              p1="Space Exploration Ebook"
              p2="An ebook that predicts upcoming technology trends for the next year, including AI developments"
              btn1="View Details"
              btn2="Download PDF Now"
            />
          </div>
          {/* 3 */}

          <div className="border-b sm:border-b-0 border-[#666666] sm:w-[33%]">
            <RS5
              img1={rs5img3}
              p1="Quantum Computing Whitepaper"
              p2="An in-depth whitepaper exploring the principles, applications."
              btn1="View Details"
              btn2="Download PDF Now"
            />
          </div>
        </div>
      </div>
    </>
  );
}
export default Resours;
