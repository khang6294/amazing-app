import React,{useState} from 'react'
import {Button} from 'antd'
import AccessToken from './AccessToken/AccessToken'
import DatePick from './DatePick/DatePick'
import axios from 'axios'
import {accToken} from '../../accToken'

const DataInput = (props) => {
    const [dateInput, setDateInput] = useState(['2017-05-01','2017-05-10'])
    const handleFetchData = () => {
        axios.get(`https://api.giosg.com/api/reporting/v1/rooms/84e0fefa-5675-11e7-a349-00163efdd8db/chat-stats/daily/?start_date=${dateInput[0]}&end_date=${dateInput[1]}`
            , { headers: {"Authorization" : `Token ${accToken}`} })
            .then(res => {
                const data = res.data
                props.onFetchData(res.data)
            })
    }

    const onDateChange = (datePeriod) => {
        setDateInput(datePeriod)
    }
    return(
        <>
            <DatePick
                onDateChange = {onDateChange}
            />
            <AccessToken/>
            <Button
                onClick = {handleFetchData}
            >
                Get data
            </Button>
        </>
    )
}

export default React.memo(DataInput)