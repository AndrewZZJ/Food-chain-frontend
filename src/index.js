import React from 'react';
import ReactDOM from 'react-dom';
import './App.css'
import './index.css';
import Restauranttile from './component/Restauranttile';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
<React.StrictMode>
  <Restauranttile src="/restaurant-1.svg" rotate="0" height="500tx" width="300tx" />;
</React.StrictMode>,
document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
