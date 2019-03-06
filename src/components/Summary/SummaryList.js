import React from 'react'
import SummaryCard from './SummaryCard'
import './summary.css'
const SummaryList = (props) => {
    const {loading} = props
    return ( 
        <div className = "summaryList__container"> 
            <SummaryCard
                title={props.data.total_conversation_count}
                content="Total Conversation Count"
                loading = {loading}
            />   
            <SummaryCard
                title={props.data.total_user_message_count}
                content="Total User Message Count"
                loading = {loading}

            />
            <SummaryCard
                title={props.data.total_visitor_message_count}
                content="Total Visitor Message Count"
                loading = {loading}
            />
        </div>
    )
}

export default React.memo(SummaryList)