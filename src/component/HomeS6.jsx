import React from 'react'
import HomeS6props from './HomeS6props'
import hs6img1 from './img/hs6img1.png'
import hs6img2 from './img/hs6img2.png'
import t10kimg1 from './img/t10kimg1.png'
import t10kimg2 from './img/t10kimg2.png'
import hsacreen1 from './img/hsacreen1.png'
import hsacreen2 from './img/hsacreen2.png'

function HomeS6() {
  return (
    <>
      <div className="">
        <HomeS6props
          img1={hs6img1}
          name1='Ebooks'
          discaription1='Explore our collection of ebooks covering a wide spectrum of future technology topics.'
          btnnam='Download Ebooks Now'
          img2={t10kimg1}
          // right 
          rname1='Variety of Topics'
          img3={hsacreen1}
          rdiscaription1='Topics include AI in education (25%), renewable energy (20%), healthcare (15%), space exploration (25%), and biotechnology (15%).'
          rname2='Total Ebooks'
          rname3='Over 100 ebooks'
          downlode='Download Formats'
          rpdf='PDF format for access.'
          rname4='Average Author Expertise'
          rdiscaription2='Ebooks are authored by renowned experts with an average of 15 years of experience'
        />
      </div>
      {/* hisa 2  */}
      <div className="">
        <HomeS6props
          img1={hs6img2}
          name1='Whitepapers'
          discaription1='Dive into comprehensive reports and analyses with our collection of whitepapers. '
          btnnam='Download Whitepapers Now'
          img2={t10kimg2}
          // right 
          rname1='Topics Coverage'
          img3={hsacreen2}
          rdiscaription1='Whitepapers cover quantum computing (20%), AI ethics (15%), space mining prospects (20%), AI in healthcare (15%), and renewable energy strategies (30%).'
          rname2='Total Whitepapers'
          rname3='Over 50 whitepapers'
          downlode='Download Formats'
          rpdf='PDF format for access.'
          rname4='Average Author Expertise'
          rdiscaription2='Whitepapers are authored by subject matter experts with an average of 20 years of experience.'
        />
      </div>
    </>
  )
}

export default HomeS6
