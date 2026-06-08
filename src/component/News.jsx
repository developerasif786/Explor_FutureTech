import React from "react";
import NewsS2 from "./NewsS2";
import NewsS3 from "./NewsS3";
import nsimg1 from "./img/ns3img1.png";
import nsimg2 from "./img/ns3img2.png";
import nsimg3 from "./img/ns3img3.png";
import PAndBtnS from "./PAndBtnS";
import NewsS5 from "./NewsS5";
import HomeS5 from "./HomeS5";
import NewsS6card from "./NewsS6card";
import Newss8 from "./Newss8";
import ns8img1 from "./img/ns8img1.png";
import ns8img2 from "./img/ns8img2.png";
import ns8img3 from "./img/ns8img3.png";
import ns8img4 from "./img/ns8img4.png";

function News() {
  return (
    <>
      {/* news main conteiner  */}
      <div className=" bg-141414">
        {/* ////////////////////////////// news section 1  /////////////////////////  */}
        <div className="py-10 sm:py-20 px-4 sm:px-20 border-y border-666666">
          <p className="heding-1">Today's Headlines: Stay</p>
          <div className="sm:flex sm:justify-between sm:items-center">
            <p className="heding-1">Informed</p>
            <p className="heding-8 sm:mt-5 mt-3 w-83 sm:w-230 sm:bloc hidde">
              Explore the latest news from around the world. We bring you
              up-to-the-minute updates on the most significant events, trends,
              and stories. Discover the world through our news coverage.
            </p>
          </div>
        </div>
        {/* ////////////////////////////// news section 2  /////////////////////////  */}
        <NewsS2 />
        {/* ////////////////////////////// news section 3  /////////////////////////  */}
        <div className="px-4 sm:px-20 sm:flex sm:justify-between sm:items-center border-y border-666666">
          {/* 1  */}
          <NewsS3
            img={nsimg1}
            p1="Tech Giants Unveil Cutting-Edge AI Innovations"
            p2="Technology"
          />
          {/* 2  */}
          <NewsS3
            img={nsimg2}
            p1="Tech Giants Unveil Cutting-Edge AI Innovations"
            p2="Technology"
          />
          {/* 3  */}
          <NewsS3 img={nsimg3} p1="COVID-19 Variants" p2="Health" />
        </div>
        {/* ////////////////////////////// news section 4  /////////////////////////  */}
        <PAndBtnS
          btn1="Welcome to Our News Hub"
          name="Discover the World of Headlines"
          btn2="View All News"
        />
        {/* ////////////////////////////// news section 5  /////////////////////////  */}
        <NewsS5 />
        {/* ////////////////////////////// news section 6  /////////////////////////  */}
        <NewsS6card />
        {/* ////////////////////////////// news section 7  /////////////////////////  */}
        <PAndBtnS
          btn1="Featured Videos"
          name="Visual Insights for the Modern Viewer"
          btn2="View All"
        />
        {/* ////////////////////////////// news section 8  /////////////////////////  */}
        <div className="flex flex-col border-t border-666666">
          <div className="sm:flex px-4 sm:px-10 border-y border-666666 order-1 sm:order-0">
            {/* left  */}
            <div
              className="py-10 sm:py-15 sm:border-r border-b sm:border-0 border-666666 
                            sm:flex sm:flex-col sm:justify-center sm:items-center sm:w-[50%]"
            >
              <Newss8
                img={ns8img1}
                p1="Mars Exploration: Unveiling Alien Landscapes"
                p2="Embark on a journey through the Red Planet's breathtaking landscapes and uncover the mysteries of Mars."
              />
            </div>
            {/* right  */}
            <div className="py-10 sm:py-15 sm:flex sm:flex-col sm:justify-center sm:items-center sm:w-[50%]">
              <Newss8
                img={ns8img2}
                p1="Mars Exploration: Unveiling Alien Landscapes"
                p2="Delve into the world of blockchain technology and its transformative impact on the financial industry."
              />
            </div>
          </div>
          {/* ///// part 2 //////  */}
          <div className="sm:flex px-4 sm:px-10">
            {/* left  */}
            <div className="py-10 sm:py-15 sm:border-r border-b sm:border-0 border-666666 sm:flex sm:flex-col sm:justify-center sm:items-center sm:w-[50%]">
              <Newss8
                img={ns8img3}
                p1="Breaking the Silence: Mental Health Awareness in the Workplace"
                p2="An exploration of the importance of mental health awareness and the initiatives reshaping workplaces for employee well-being."
              />
            </div>
            {/* right  */}
            <div className="py-10 sm:py-15 sm:flex sm:flex-col sm:justify-center sm:items-center sm:w-[50%]">
              <Newss8
                img={ns8img4}
                p1="Revolutionizing Investment Strategies"
                p2="An in-depth look at global efforts to conserve biodiversity and safeguard endangered species from extinction."
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default News;
