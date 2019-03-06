import React, { useState } from 'react';
import './App.css';
import NavBar from './components/NavBar/NavBar'
import DataInput from './components/DataInput/DataInput'
import SummaryList from './components/Summary/SummaryList'
import DetailTable from './components/DetailTable/DetailTable';
const App = () => {
	const [dataInp, setDataInp] = useState({})
	const receiveData = (data) => {
		setDataInp(data)
	}

	return (
		<div className="App">
			<NavBar/>
			<DataInput
				onFetchData = {receiveData}
			/>
			<SummaryList
				data = {dataInp}
			/>
			<DetailTable
				data = {dataInp.by_date}
			/>
		</div>
	);
}

export default App;
