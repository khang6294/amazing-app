import React,{useState} from 'react'
import {Input, Icon} from 'antd'
import {accToken} from '../../../accToken'

const AccessToken = (props) => {
    const [tokenInput, setTokenInput] = useState(accToken)
    const onTokenChange = (event) => {
        const newToken = event.target.value
        setTokenInput(newToken)
        props.onTokenChange(newToken)
    }
    return (
        <div>
            <div className="data-input__label">Access Token:</div>
            <Input
                type="password"
                addonBefore={<Icon type="user" />}
                onChange={onTokenChange}
                value={tokenInput}
            />
        </div>
    )
}

export default React.memo(AccessToken)