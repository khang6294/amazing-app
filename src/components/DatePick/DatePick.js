import React,{useState} from 'react'
import { DatePicker } from 'antd';
import moment from 'moment';
const RangePicker = DatePicker.RangePicker;

const DatePick = () => {
    const [datePick, setDatePick] = useState([])

    const onDateChange = (dates, dateStrings) => {
        setDatePick(dateStrings)
    }
    return (
        <div>
            <RangePicker
                ranges={{ Today: [moment(), moment()], 'This Month': [moment().startOf('month'), moment().endOf('month')] }}
                format="YYYY/MM/DD"
                onChange = {onDateChange}
            />
        </div>
    )
}

export default React.memo(DatePick)