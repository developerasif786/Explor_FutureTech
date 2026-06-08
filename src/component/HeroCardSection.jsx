import React from 'react'
import HeroCard from './HeroCard'
import herocardicon1 from "./img/herocardicon1.png"
import herocardicon2 from "./img/herocardicon2.png"
import herocardicon3 from "./img/herocardicon3.png"
import goolero1 from "./img/goolero1.png"

function HeroCardSection() {
  return (
    <>
      <div className="sm:flex bg-141414">
        {/* 1 card  */}
        <HeroCard
          img1={herocardicon1}
          name1="Latest News Updates"
          name2="Latest News Updates"
          img2={goolero1}
          discareption="Over 1,000 articles published monthly"
        //  style={{ paddingLeft: "200px", paddingRight: "200px" }}
        />
        {/* 2 card  */}
        <HeroCard
          img1={herocardicon2}
          name1="Expert Contributors"
          name2="Trusted Insights"
          img2={goolero1}
          discareption="50+ renowned AI experts on our team"
        />
        {/* 3 card  */}
        <HeroCard
          img1={herocardicon3}
          name1="Global Readership"
          name2="Worldwide Impact"
          img2={goolero1}
          discareption="2 million monthly readers"

        />
      </div>
    </>
  )
}

export default HeroCardSection
