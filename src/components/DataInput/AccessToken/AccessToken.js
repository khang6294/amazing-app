import React,{useState} from 'react'
import {Input, Icon} from 'antd'

const AccessToken = (props) => {
    const [tokenInput, setTokenInput] = useState('')
    const onTokenChange = (event) => {
        const newToken = event.target.value
        setTokenInput(newToken)
        props.onTokenChange(newToken)
    }
    return (
        <div>
            <div className="data-input__label">Access Token:</div>
            <Input.Password
                addonBefore={<Icon type="user" />}
                onChange={onTokenChange}
                value={tokenInput}
                className='data-input__token-inp'
            />
        </div>
    )
}

export default React.memo(AccessToken)