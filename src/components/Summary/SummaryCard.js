import React from 'react'
import {Card} from 'antd'

const SummaryCard = (props) => {
    return ( 
        <Card
            hoverable={true}
            headStyle={{border: 'none'}}
            className="summaryCard__card"
        >   
            <div className="summaryCard__card-title">{props.title}</div>
            <div className="summaryCard__card-description">{props.content}</div>
        </Card>
    )
}

export default React.memo(SummaryCard)