import React from 'react'
import { DatePicker } from 'antd';
import moment from 'moment';
import "../DataInput.css"
const RangePicker = DatePicker.RangePicker;

const DatePick = (props) => {

    const onDateChange = (dates, dateStrings) => {
        props.onDateChange(dateStrings)
    }
    return (
        <>
            <label className="data-input__label">Date Range:</label>
            <RangePicker
                ranges={{ Today: [moment(), moment()], 'This Month': [moment().startOf('month'), moment().endOf('month')] }}
                defaultValue={[moment('2017-05-01', "YYYY-MM-DD"), moment('2017-05-10', "YYYY-MM-DD")]}
                format="YYYY-MM-DD"
                onChange = {onDateChange}
            />
        </>
    )
}

export default React.memo(DatePick)