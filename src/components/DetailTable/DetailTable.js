import React from 'react'
import { Table, Spin, Icon } from 'antd';


const DetailTable = (props) => {
    const {loading,data} = props
    const columns = [
        {
            title:'conversation_count',
            dataIndex: 'conversation_count',
            key: 'conversation_count',
        },
        {
            title:'missed_chat_count',
            dataIndex: 'missed_chat_count',
            key: 'missed_chat_count',
        },
        {
            title:'visitors_with_conversation_count',
            dataIndex: 'visitors_with_conversation_count',
            key: 'visitors_with_conversation_count',
        },
        {
            title:'Date',
            dataIndex: 'date',
            key: 'date',
        },
    ]

    const dataFormat = data ? data.map(ele => {
        return {
            conversation_count: ele.conversation_count,
            missed_chat_count: ele.missed_chat_count,
            visitors_with_conversation_count: ele.visitors_with_conversation_count,
            date: ele.date,
            key: ele.date
        }
    }) : null

    // let dataFormatSort;
    // if(dataFormat){
    //     dataFormatSort = dataFormat.sort((a,b) => {return a.date>b.date ? 1 : a.date<b.date ? -1 : 0})
    // }

    return (
        <Table 
            columns={columns} 
            dataSource={dataFormat}
            pagination={{
                pageSize: 5,
                hideOnSinglePage: true,
                showTotal: (total, range) => `${range[0]}-${range[1]} of ${total} dates`,
                
                
            }}
            locale = {{    
                emptyText:'Click FETCH for data.'
            }}
            loading = {{
                indicator: <Spin indicator={<Icon type="loading" spin />}/>,
                spinning: loading,
                size: 'large'
            }}
        />
    )
}

export default React.memo(DetailTable)
