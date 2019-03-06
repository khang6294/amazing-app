import React from 'react'
import {Card,Spin,Icon} from 'antd'
import './summary.css'
const SummaryCard = (props) => {
    const {loading} = props
    return ( 
        <Card
            headStyle={{border: 'none'}}
            className="summaryCard__card"
        >   
        {   
            loading ?
            <Spin indicator={<Icon type="loading" style={{ fontSize: 48 }} spin />}/> : 
            <>
            <div className="summaryCard__card-title">{props.title ? props.title : 0}</div>
            <div className="summaryCard__card-description">{props.content}</div>
            </>
        }
        </Card>
    )
}

export default React.memo(SummaryCard)