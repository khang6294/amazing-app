import React from 'react'
import { Table} from 'antd';


const DetailTable = (props) => {
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

    const data = [
        {

        }
    ]

    return <Table columns={columns} dataSource={data} />
}

export default React.memo(DetailTable)
