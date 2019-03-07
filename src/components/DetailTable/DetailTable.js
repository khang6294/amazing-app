import React from 'react'
import { Table, Spin, Icon } from 'antd';
import './DetailTable.css'

const DetailTable = (props) => {
    const {loading,data} = props
    const filterByDate = data ? data.map(ele => {
        return {
            text: ele.date,
            value: ele.date
        }
    }).sort((a,b) => {return a.value>b.value ? 1 : a.value<b.value ? -1 : 0}) : []
    const columns = [
        {
            title:'conversation_count',
            dataIndex: 'conversation_count',
            key: 'conversation_count',
            sorter: (a, b) => a.conversation_count - b.conversation_count
        },
        {
            title:'missed_chat_count',
            dataIndex: 'missed_chat_count',
            key: 'missed_chat_count',
            sorter: (a, b) => a.missed_chat_count - b.missed_chat_count
        },
        {
            title:'visitors_with_conversation_count',
            dataIndex: 'visitors_with_conversation_count',
            key: 'visitors_with_conversation_count',
            sorter: (a, b) => a.visitors_with_conversation_count - b.visitors_with_conversation_count
        },
        {
            title:'Date',
            dataIndex: 'date',
            key: 'date',
            defaultSortOrder: 'ascend',
            filters: filterByDate,
            sorter: (a,b) => {return a.date>b.date ? 1 : a.date<b.date ? -1 : 0},
            onFilter: (value, record) => record.date.indexOf(value) === 0
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

    return (
        <div className="detailTable-wrapper">
            <div className="section__header">By Date Detail Table</div>
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
        </div>
    )
}

export default React.memo(DetailTable)
