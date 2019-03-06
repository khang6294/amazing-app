import React, { useState } from 'react';
import './App.css';
import NavBar from './components/NavBar/NavBar'
import DataInput from './components/DataInput/DataInput'
import SummaryList from './components/Summary/SummaryList'
import DetailTable from './components/DetailTable/DetailTable';
import axios from 'axios'
import {accToken} from './accToken'

const App = (props) => {
	const [dataInp, setDataInp] = useState({})

	const onFetchData = (data) => {
		const {tokenInput,dateInput} = data
		axios.get(`https://api.giosg.com/api/reporting/v1/rooms/84e0fefa-5675-11e7-a349-00163efdd8db/chat-stats/daily/?start_date=${dateInput[0]}&end_date=${dateInput[1]}`
            , { headers: {"Authorization" : `Token ${accToken}`} })
            .then(res => {
                const data = res.data
                setDataInp(data)
            })
	}

	return (
		<>
		<div className="background"></div>
		<div className="App">
			<NavBar/>
			<DataInput
				onFetchData = {onFetchData}
			/>
			<div className="content">
				<SummaryList
					data = {dataInp}
				/>
				<br/>
				<DetailTable
					data = {dataInp.by_date}
				/>
			</div>
		</div>
		</>
	);
}

export default App;
