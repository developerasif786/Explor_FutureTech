import React from 'react'
import Button from './Button'
import Btn2s4 from './Btn2s4'

function HomeS4Btn() {
    return (
        <>
        
            <div className="py-5 pl-4 sm:py-10 sm:px-20 flex justify-between gap-[14px] overflow-hidden">
                {/* 1 */}
                <Btn2s4
                    name="all"
                />
                {/* 2 */}
                <Btn2s4
                    name="Quantum Computing"
                />
                {/* 3 */}
                <Btn2s4
                    name="AI Ethics"
                />
                {/* 4 */}
                <Btn2s4
                    name="Space Exploration"
                />
                {/* 5 */}
                <Btn2s4
                    name="Biotechnology"
                />
                {/* 6 */}
                <Btn2s4
                    name="Renewable Energy"
                />
            </div>
        </>
    )
}

export default HomeS4Btn
