import React,{useState} from 'react'
import { Modal, Button,Card } from 'antd';
import "./DataInput.css"

const History = (props) => {
    const [selectedHistory, setSelectedHistory] = useState({})
    const [visible,setVisible] = useState(false)

    const {history} = props

    const showModal = () => {
        setVisible(true)
    }

    const handleOk = () => {
        if(!selectedHistory.dateInput && !selectHistory.tokenInput &&!selectedHistory.timeFetch){
            setVisible(false)
        } else {
            setVisible(false)
            props.populateHistory(selectedHistory)
        }
    }

    const handleCancel = () => {
        setVisible(false)
    }

    const selectHistory = (selectedHistory) => {
        const selectedHistoryFormat = {
            dateInput: [selectedHistory.startDate,selectedHistory.endDate],
            tokenInput: selectedHistory.token,
            timeFetch: selectedHistory.timeFetch
        }
        setSelectedHistory(selectedHistoryFormat)
    }

    return (
        <div>
            <Button 
                size='large'
                className='data-input__fetch-btn' 
                onClick={showModal}
            >
                HISTORY
            </Button>
            <Modal
                title="History Fetch"
                visible={visible}
                onOk={handleOk}
                onCancel={handleCancel}
                bodyStyle={{maxHeight:'20rem',overflowY:'scroll'}}
                width={650}
                okText="FETCH"
            >
                {history.length > 0 ?
                    history.map(historyElement => {
                        return (
                            <Card
                                key={`${historyElement.timeFetch}`} 
                                className={
                                    historyElement.timeFetch === selectedHistory.timeFetch ?
                                    "history__selection-container" :
                                    "history__normal-container"
                                }
                                onClick = {() => selectHistory(historyElement)}
                            >
                                <div><span className="history__title">Time fetch:</span> <div>{historyElement.timeFetch}</div></div>
                                <div><span className="history__title">Start Date:</span> <div>{historyElement.startDate}</div> </div>
                                <div><span className="history__title">End Date:</span> <div>{historyElement.endDate}</div></div>
                                <div><span className="history__title">Token:</span> <div>{historyElement.token}</div></div>
                            </Card>
                        )
                    }) :
                    <div>No history fetch</div>    
                }
            </Modal>
        </div>
    );

}

export default React.memo(History);