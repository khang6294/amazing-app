import React from 'react'
import SummaryCard from './SummaryCard'
const SummaryList = (props) => {
    return ( 
        <div>
            <SummaryCard
                title={props.data.total_conversation_count}
                content="Total Conversation Count"
            />
            <SummaryCard
                title={props.data.total_user_message_count}
                content="Total User Message Count"
            />
            <SummaryCard
                title={props.data.total_visitor_message_count}
                content="Total Visitor Message Count"
            />
        </div>
    )
}

export default React.memo(SummaryList)