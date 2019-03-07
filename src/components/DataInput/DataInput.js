import React,{useState,useEffect} from 'react'
import { DatePicker, Input, Icon, Button } from 'antd';
import moment from 'moment';
import "./DataInput.css"
const RangePicker = DatePicker.RangePicker;


const DataInput = (props) => {
    const [dateInput, setDateInput] = useState([])
    const [tokenInput, setTokenInput] = useState('')

    //Populate data from localStorage, same as componentDidMount
	useEffect(() => {
		const token = localStorage.getItem('token');
		const startDate = localStorage.getItem('startDate')
        const endDate = localStorage.getItem('endDate')
        // set Date from localStorage
        if(startDate && endDate){
            setDateInput([startDate,endDate])
        } else {
            const today = moment(new Date()).format('YYYY-MM-DD')
            setDateInput([today,today])
        }
        // set Token from localStorage
        setTokenInput(token)
	},[])


    const {loading} = props
    const today = new Date();
    const handleFetchData = (e) => {
        e.preventDefault()
        props.onFetchData({
            dateInput: dateInput,
            tokenInput: tokenInput
        })
    }

    const onDateChange = (newDateInput,newDateStringInput) => {
        setDateInput(newDateStringInput)
    }

    const onTokenChange = (event) => {
        const newTokenInput = event.target.value
        setTokenInput(newTokenInput)
    }

    return(
        <div className="dataInput__container">
            <form onSubmit={handleFetchData}>
                <div>
                <label className="data-input__label">Date Range:
                    <div>
                        <RangePicker
                            ranges={{ Today: [moment(), moment()], 'This Month': [moment().startOf('month'), moment().endOf('month')] }}
                            value={[moment(dateInput[0] ? dateInput[0]: today, "YYYY-MM-DD"), moment(dateInput[1] ? dateInput[1] : today, "YYYY-MM-DD")]}
                            format="YYYY-MM-DD"
                            onChange = {onDateChange}
                            className="data-input__date-inp"
                            separator = '-'
                        />
                    </div>
                </label>
                </div>
                <div>  
                <label className="data-input__label">Access Token:
                    <div>
                        <Input.Password
                            addonBefore={<Icon type="user" />}
                            onChange={onTokenChange}
                            value={tokenInput}
                            className='data-input__token-inp'
                        />
                    </div>
                </label>
                </div>
                
                <br/>
                <Button
                    onClick = {handleFetchData}
                    disabled = { (dateInput[0] === "" && dateInput[1] === "" && tokenInput === '') || loading}
                    size='large'
                    className='data-input__fetch-btn'
                >
                    FETCH
                </Button>   
            </form>   
        </div>
        
    )
}

export default React.memo(DataInput)