import React,{useState} from 'react'
import { DatePicker } from 'antd';
import moment from 'moment';
const RangePicker = DatePicker.RangePicker;

const DatePick = (props) => {

    const onDateChange = (dates, dateStrings) => {
        props.onDateChange(dateStrings)
    }
    return (
        <div>
            <RangePicker
                ranges={{ Today: [moment(), moment()], 'This Month': [moment().startOf('month'), moment().endOf('month')] }}
                defaultValue={[moment('2017-05-01', "YYYY-MM-DD"), moment('2017-05-10', "YYYY-MM-DD")]}
                format="YYYY-MM-DD"
                onChange = {onDateChange}
            />
        </div>
    )
}

export default React.memo(DatePick)