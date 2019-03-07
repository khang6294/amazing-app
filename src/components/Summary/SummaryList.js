import React from 'react'
import SummaryCard from './SummaryCard'
import './summary.css'
const SummaryList = (props) => {
    const {loading,data} = props
    return ( 
        <div className = "summaryList__container"> 
            <SummaryCard
                title={data ? data.total_conversation_count : null}
                content="Total Conversation Count"
                loading = {loading}
            />   
            <SummaryCard
                title={data ? data.total_user_message_count : null}
                content="Total User Message Count"
                loading = {loading}

            />
            <SummaryCard
                title={data ? data.total_visitor_message_count : null}
                content="Total Visitor Message Count"
                loading = {loading}
            />
        </div>
    )
}

export default React.memo(SummaryList)