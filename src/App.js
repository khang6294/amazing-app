import React, { Component } from 'react';
import './App.css';
import NavBar from './components/NavBar/NavBar'
import AccessToken from './components/AccessToken/AccessToken'
import DatePick from './components/DatePick/DatePick'
import SummaryList from './components/Summary/SummaryList'
import Table from './components/DetailTable/DetailTable'
import DetailTable from './components/DetailTable/DetailTable';
class App extends Component {
	render() {
		return (
		<div className="App">
			<NavBar/>
			<DatePick/>
			<AccessToken/>
			<SummaryList/>
			<DetailTable/>
		</div>
		);
	}
}

export default App;
