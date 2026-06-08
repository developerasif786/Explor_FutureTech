import React from "react";

import HomeS5cardprops from "./HomeS5cardprops";
import doctar1 from "./img/doctar1.png";
import doctar2 from "./img/doctar2.png";
import doctar3 from "./img/doctar3.png";
function HomeS5() {
  return (
    <>
      <div className="">

        {/* 1 */}
        <HomeS5cardprops
          name1="John Techson"
          name2="Quantum Computing"
          name3="October 15, 2023"
          name4="The Quantum Leap in Computing"
          btnname1="View Blog"
          btnname2="View Blog"
          discaripshion="Explore the revolution in quantum computing, its applications, and its potential impact on various industries."
          img={doctar1}
        />
        {/* 2 */}

        <HomeS5cardprops
          name1="Sarah Ethicist"
          name2="AI Ethics"
          name3="November 5, 2023"
          name4="The Ethical Dilemmas of AI"
          btnname1="View Blog"
          btnname2="View Blog"
          discaripshion="A deep dive into ethical challenges posed by AI, including bias, privacy, and transparency."
          img={doctar2}
        />
        {/* 3 */}

        <HomeS5cardprops
          name1="Astronomer X"
          name2="Space Exploration"
          name3="December 10, 2023"
          name4="The Mars Colonization Challenge"
          btnname1="View Blog"
          btnname2="View Blog"
          discaripshion="Exploring the technical and logistical challenges of human colonization on Mars."
          img={doctar3}
        />
      </div>
    </>
  );
}

export default HomeS5;
