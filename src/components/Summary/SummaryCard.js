import React from 'react'
import {Card,Spin,Icon} from 'antd'
import './summary.css'
const SummaryCard = (props) => {
    const {loading,title,content} = props
    return ( 
        <Card
            headStyle={{border: 'none'}}
            className="summaryCard__card"
        >   
        {   
            loading ?
            <Spin indicator={<Icon type="loading" style={{ fontSize: 48 }} spin />}/> : 
            <>
            <div className="summaryCard__card-title">{title ? title : 0}</div>
            <div className="summaryCard__card-description">{content}</div>
            </>
        }
        </Card>
    )
}

export default React.memo(SummaryCard)