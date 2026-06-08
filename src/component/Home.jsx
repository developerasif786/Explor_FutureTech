import React from "react";
import HeroSection from "./HeroSection";
import HeroCardSection from "./HeroCardSection";
import Button from "./Button";
import PandbtnCon from "./PandbtnCon";
import HeroS3 from "./HeroS3";
import ero1 from "./img/ero1.png";
import PAndBtnS from "./PAndBtnS";
import HomeS4Btn from "./HomeS4Btn";
import HomeS5 from "./HomeS5";
import HomeS6 from "./HomeS6";
import HomeS7 from "./HomeS7";

function Home() {
  return (
    <>
      <div className="bg-141414">
        {/* home section 1  */}
        <HeroSection />
        <HeroCardSection />
        {/* home section 2  */}
        <PandbtnCon />
        {/* home section 3  */}
        <HeroS3 />
        <div className="">
          <PAndBtnS
            btn1="A Knowledge Treasure Trove"
            name="Explore FutureTech's In-Depth Blog Posts"
            btn2="View All Blogs"
            img={ero1}
          />
        </div>
        {/* home section 4  */}
        <HomeS4Btn />
        {/* home section 5  */}
        <HomeS5 />
        <div className="">
          <PAndBtnS
            btn1="Your Gateway to In-Depth Information"
            btn2="view all Resources"
            img={ero1}
            name={
              <>
                Unlock Valuable Knowledge with FutureTech's<br></br>Resources
              </>
            }
          />
        </div>
        {/* home section 6  */}
        <HomeS6 />
        <div className="">
          <PAndBtnS
            btn1="What Our Readers Say"
            btn2="View All Testimonials"
            img={ero1}
            name="Real Words from Real Readers"
          />
        </div>
        {/* home section 7  */}
        <HomeS7 />
      </div>
    </>
  );
}

export default Home;
