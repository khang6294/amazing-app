import React from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css'
import './index.css';
import App from './App';

let render = () => {
    ReactDOM.render(<App />, document.getElementById('root'));
}

if(module.hot){
    module.hot.accept('./App',() => setTimeout(render))
}

render();
