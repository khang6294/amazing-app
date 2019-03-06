import React from 'react'
import {Card} from 'antd'
import './summary.css'
const SummaryCard = (props) => {
    return ( 
        <Card
            headStyle={{border: 'none'}}
            className="summaryCard__card"
        >   
            <div className="summaryCard__card-title">{props.title ? props.title : 0}</div>
            <div className="summaryCard__card-description">{props.content}</div>
        </Card>
    )
}

export default React.memo(SummaryCard)