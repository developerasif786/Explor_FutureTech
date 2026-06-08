import React from 'react'
import HS7CardProps from './HS7CardProps'
import doctar4 from './img/doctar4.png'
import doctar5 from './img/doctar5.png'
import doctar6 from './img/doctar6.png'
import doctar7 from './img/doctar7.png'
import doctar8 from './img/doctar8.png'
import doctar9 from './img/doctar9.png'

function HomeS7() {
    return (
        <>
            <div className="grid grid-cols-1 sm:grid-cols-3 sm:h-95 sm:px-10 px-4 border-y-1   border-666666">
                <div className="flex items-center justify-center "><HS7CardProps
                    img={doctar6}
                    name1="Sarah Thompson"
                    name2="San Francisco, USA"
                    discaription='The ebooks on AI in education have been a game-changer for my research. They provide in-depth insights and case studies that are invaluable for staying updated.'
                /></div>
                <div className="flex items-center justify-center border-y-1 sm:border-x-1 border-666666"><HS7CardProps
                    img={doctar7}
                    name1="Raj Patel"
                    name2="Mumbai, India"
                    discaription='The whitepapers on renewable energy strategies have greatly influenced my work. They offer detailed data and analysis.'
                /></div>
                <div className="flex items-center justify-center"><HS7CardProps
                    img={doctar8}
                    name1="Emily Adams"
                    name2="London, UK"
                    discaription='The AI in healthcare reports have been an essential resource for our hospital. They highlight the latest innovations and best practices, improving patient care.'
                /></div>
            </div>
            {/* part 2  */}
            <div className="grid grid-cols-1 sm:grid-cols-3 sm:h-95 sm:px-10 px-4 border-y-1   border-666666">
                <div className="flex items-center justify-center "><HS7CardProps
                    img={doctar7}
                    name1="Sarah Thompson"
                    name2="San Francisco, USA"
                    discaription='The ebooks on AI in education have been a game-changer for my research. They provide in-depth insights and case studies that are invaluable for staying updated.'
                /></div>
                <div className="flex items-center justify-center border-y sm:border-y-0 sm:border-x border-x-0 border-666666"><HS7CardProps
                    img={doctar8}
                    name1="Raj Patel"
                    name2="Mumbai, India"
                    discaription='The whitepapers on renewable energy strategies have greatly influenced my work. They offer detailed data and analysis.'
                /></div>
                <div className="flex items-center justify-center"><HS7CardProps
                    img={doctar9}
                    name1="Emily Adams"
                    name2="London, UK"
                    discaription='The AI in healthcare reports have been an essential resource for our hospital. They highlight the latest innovations and best practices, improving patient care.'
                /></div>
            </div>
        </>
    )
}

export default HomeS7
