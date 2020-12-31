import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import EmployeeCard from './component/Card';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <EmployeeCard imgsrc="/Card-1.svg" imgheight="300px" imgwidth="200px" />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
