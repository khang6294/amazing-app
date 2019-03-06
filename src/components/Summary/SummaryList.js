import React from 'react'
import SummaryCard from './SummaryCard'
import {Row, Col} from 'antd'
import './summary.css'
const SummaryList = (props) => {
    const {loading} = props
    return ( 
        <Row type='flex' gutter={24}>
            <Col span={8}>
            <SummaryCard
                title={props.data.total_conversation_count}
                content="Total Conversation Count"
                loading = {loading}
            />
            </Col>
            <Col span={8}>
            <SummaryCard
                title={props.data.total_user_message_count}
                content="Total User Message Count"
                loading = {loading}

            />
            </Col>
            <Col span={8}>
            <SummaryCard
                title={props.data.total_visitor_message_count}
                content="Total Visitor Message Count"
                loading = {loading}
            />
            </Col>
        </Row>
    )
}

export default React.memo(SummaryList)