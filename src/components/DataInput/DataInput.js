import React,{useState} from 'react'
import {Button} from 'antd'
import AccessToken from './AccessToken/AccessToken'
import DatePick from './DatePick/DatePick'

const DataInput = (props) => {
    const [dateInput, setDateInput] = useState(["2017-05-01","2017-05-10"])
    const [tokenInput, setTokenInput] = useState('')
    const {loading} = props
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

    const isIt = dateInput.length < 0 || tokenInput === ''
    console.log(dateInput)
    console.log(tokenInput)
    console.log(isIt)
    return(
        <div className="dataInput__container">
            <DatePick
                onDateChange = {onDateChange}
            />
            <AccessToken
                onTokenChange = {onTokenChange}
            />
            <br/>
            <Button
                onClick = {handleFetchData}
                disabled = { (dateInput[0] === "" && dateInput[1]=== "") || tokenInput === '' || loading}
                size='large'
                className='data-input__fetch-btn'
            >
                Fetch
            </Button>      
        </div>
    )
}

export default React.memo(DataInput)