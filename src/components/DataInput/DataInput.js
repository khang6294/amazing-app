import React,{useState} from 'react'
import {Button, Row, Col} from 'antd'
import AccessToken from './AccessToken/AccessToken'
import DatePick from './DatePick/DatePick'

const DataInput = (props) => {
    const [dateInput, setDateInput] = useState(['2017-05-01','2017-05-10'])
    const [tokenInput, setTokenInput] = useState('')
    
    const handleFetchData = () => {
        props.onFetchData({
            dateInput: dateInput,
            tokenInput: tokenInput
        })
    }

    const onDateChange = (newDateInput) => {
        setDateInput(newDateInput)
    }

    const onTokenChange = (newTokenInput) => {
        setTokenInput(newTokenInput)
    }
    return(
        <div className="sider">
            <DatePick
                onDateChange = {onDateChange}
            />
            <AccessToken
                onTokenChange = {onTokenChange}
            />
            <br/>
            <Button
                onClick = {handleFetchData}
                disabled = {dateInput.length < 0 || tokenInput === ''}
            >
                Get data
            </Button>      
        </div>
    )
}

export default React.memo(DataInput)