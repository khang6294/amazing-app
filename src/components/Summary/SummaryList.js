import React from 'react'
import SummaryCard from './SummaryCard'
const SummaryList = (props) => {
    return ( 
        <div>
            <SummaryCard/>
            <SummaryCard/>
            <SummaryCard/>
        </div>
    )
}

export default React.memo(SummaryList)