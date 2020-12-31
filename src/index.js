import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './pages/LoginPage';
// import App from './pages/WaitingPage';
import MapTile from './components/MapTile';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <MapTile id="/Tile-1.svg" direction="1" position={{xTile: "50px", yTile: "70px"}} size={{height: "300px", width:"200px"}} />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
