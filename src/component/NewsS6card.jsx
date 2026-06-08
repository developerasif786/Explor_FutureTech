import React from "react";

import HomeS5cardprops from "./HomeS5cardprops";
import doctar1 from "./img/doctar1.png";
import doctar2 from "./img/doctar2.png";
import doctar3 from "./img/doctar3.png";
import newsd1 from "./img/newsd1.png";
import newsd2 from "./img/newsd2.png";
import newsd3 from "./img/newsd3.png";

function NewsS6card() {
  return (
    <>
      <div className="">
        {/* 1 */}
        <HomeS5cardprops
          img={newsd1}
          name1="Techson"
          name2="Technology"
          name3="October 15, 2023"
          name4="Tech Giants Announce New Product Line"
          btnname1="Read More"
          btnname2="Read More"
          discaripshion="Explore the latest innovations from tech industry leaders, unveiling new products that promise to transform the digital landscape"
        />
        {/* 2 */}
        <HomeS5cardprops
          img={newsd2}
          name1="Sarah Ethicist"
          name2="Technology"
          name3="October 11, 2023"
          name4="The Future of Autonomous Vehicles"
          btnname1="Read More"
          btnname2="Read More"
          discaripshion="An in-depth analysis of the rapid advancements in autonomous vehicle technology and their impact on transportation."
        />
        {/* 3 */}
        <HomeS5cardprops
          img={newsd3}
          name1="Astronomer X"
          name2="Technology"
          name3="December 10, 2023"
          name4="Tech Startups Secure Record Funding"
          btnname1="Read More"
          btnname2="Read More"
          discaripshion="An overview of the recent surge in funding for tech startups, shaping the entrepreneurial landscape."
        />
      </div>
    </>
  );
}

export default NewsS6card;
