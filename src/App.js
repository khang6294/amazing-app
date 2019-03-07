import React, { useState } from 'react';
import './App.css';
import NavBar from './components/NavBar/NavBar'
import DataInput from './components/DataInput/DataInput'
import SummaryList from './components/Summary/SummaryList'
import DetailTable from './components/DetailTable/DetailTable';
import ChartData from './components/ChartData/ChartData'
import axios from 'axios'
import {notification,Divider} from 'antd'

const App = () => {
	const [dataRes, setDataRes] = useState(null)
	const [loading,setLoading] = useState(false)

	const onFetchData = (data) => {
		const {tokenInput,dateInput} = data
		setLoading(true)
		axios.get(`https://api.giosg.com/api/reporting/v1/rooms/84e0fefa-5675-11e7-a349-00163efdd8db/chat-stats/daily/?start_date=${dateInput[0]}&end_date=${dateInput[1]}`
            , { headers: {"Authorization" : `Token ${tokenInput}`} })
            .then(res => {
				const data = res.data
				console.log(data)
				setLoading(false)
				setDataRes(data)
				// Store in local storage for each fetch
				localStorage.setItem('token', tokenInput);
                localStorage.setItem('startDate', dateInput[0]);
                localStorage.setItem('endDate', dateInput[1]);
			})
			.catch(err => {
				if (err.response.status === 401) {
					notification.error({
						message: 'Error',
						description: 'Oops! Please check again your access token'
					});
				}
				setLoading(false)
			})
	}

	return (
		<>
		<div className="background"></div>
		<div className="App">
			<div className="navbar">
				<NavBar/>
			</div>
			<div className="sider">
				<DataInput
					onFetchData = {onFetchData}
					loading={loading}
				/>
			</div>
			<div className="content">
				<SummaryList
					data = {dataRes}
					loading = {loading}
				/>
				<Divider/>
				<DetailTable
					data = {dataRes ? dataRes.by_date : null}
					loading = {loading}
				/>
				<Divider/>
				<ChartData
					data = {dataRes}
					loading = {loading}
				/>
			</div>
		</div>
		</>
	);
}

export default App;
