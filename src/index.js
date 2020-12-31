import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import House from './Component/House';
import Garden from './Component/Garden';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
<React.StrictMode>
<House House_src="/house.svg" height="500tx" width="300tx" />;
<Garden Garden_src="/garden.svg" height="165tx" width="50tx" />;
</React.StrictMode>,
document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
