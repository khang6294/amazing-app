import React, { useState,useEffect } from 'react';
import './App.css';
import NavBar from './components/NavBar/NavBar'
import DataInput from './components/DataInput/DataInput'
import SummaryList from './components/Summary/SummaryList'
import DetailTable from './components/DetailTable/DetailTable';
import ChartData from './components/ChartData/ChartData'
import axios from 'axios'
import {notification,Divider,BackTop,message} from 'antd'
import moment from 'moment'

const App = () => {
	const [history,setHistory] = useState([])
	const [dataRes, setDataRes] = useState(null)
	const [loading,setLoading] = useState(false)

	//Fetch history fetch from localStorage, same as componentDidMount
	useEffect(() => {
		const historyFromLC = localStorage.getItem('history')
		if(historyFromLC){
			setHistory(JSON.parse(historyFromLC))
		}
	},[])

	const onFetchData = (data) => {
		const {tokenInput,dateInput} = data
		const startDate = dateInput[0];
		const endDate = dateInput[1]
		setLoading(true)
		setDataRes(null)
		axios.get(`https://api.giosg.com/api/reporting/v1/rooms/84e0fefa-5675-11e7-a349-00163efdd8db/chat-stats/daily/?start_date=${startDate}&end_date=${endDate}`
            , { headers: {"Authorization" : `Token ${tokenInput}`} })
            .then(res => {
				const data = res.data
				setLoading(false)
				setDataRes(data)
				// Set history object for storing
				const historyObj = {
					timeFetch: moment().format('YYYY-MM-DD, hh:mm:ss a'),
					startDate: startDate,
					endDate: endDate,
					token: tokenInput
				}
				const historyClone = [...history]
				historyClone.push(historyObj)
				setHistory(historyClone)
				message.success('Fetch successfully!',1.5);
				// Store in local storage for each fetch
				localStorage.setItem('history',JSON.stringify(historyClone))
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
			<BackTop 
				visibilityHeight={500} 
			/>
			<div className="navbar">
				<NavBar/>
			</div>
			<div className="sider">
				<DataInput
					onFetchData = {onFetchData}
					populateHistory = {onFetchData}
					history ={history}
					loading={loading}
				/>
			</div>
			<div className="content">
				<SummaryList
					data = {dataRes}
					loading = {loading}
				/>
				<Divider className="App__section-divider"/>
				<DetailTable
					data = {dataRes ? dataRes.by_date : null}
					loading = {loading}
				/>
				<Divider className="App__section-divider"/>
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
