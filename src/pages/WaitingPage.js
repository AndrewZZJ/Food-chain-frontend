import waiting_room from '../images/waiting_room.svg';
import brand1 from '../images/restaurant-1.svg';
import brand2 from '../images/restaurant-2.svg';
import brand3 from '../images/restaurant-3.svg';
import brand4 from '../images/restaurant-4.svg';
import brand5 from '../images/restaurant-5.svg';
import foodChainLogo from '../images/logo.svg';
import infoCircle from '../images/info-circle-solid.svg';
import './WaitingPage.css';
import { Form, Button, FormGroup, FormControl, ControlLabel, Col, Row, Container, Dropdown } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../index.css';
import React, { useState, useEffect } from 'react';

//<img src={waiting_room} alt="waiting_room" />

function simulateNetworkRequest() {
  return new Promise((resolve) => setTimeout(resolve, 2000));
}

function App() {
	
  var left = 50 + "px";
  var top = 50 + "px";
  var padding = 50 + "px";

  const [isReady, setReady] = useState(false);
  
  const handleClick = () => {
    if (isReady) {
	  setReady(false);
    }
	else {
	  setReady(true);
	}
  };

  const waitingRoomStyle = {
	  position: "absolute", 
	  left: "6.875%",
	  top: "10%",
	  width: "23%",
  }

  const nameStyle = {
	fontSize: "36px",
	display: "block",
  }
  
  const statusReady= {
    color: "green",
	fontSize: "24px",	
	display: "block",
  };
  
  const statusPrepare= {
    color: "red",
	fontSize: "24px",
	display: "block",
  };
  
  const playerColStyle = {
	marginRight: "30px",
	marginLeft: "30px",
	marginTop: "100px",
	marginBottom: "30px",
  }
  
  const confirmButtonStyle = {
    padding: "20px",
  }
  
  const containerStyle = {
	fontFamily: "VTC",
	marginTop: "100px",
	width: "80%",
	height: "62%",
  }
  
  const userStyle = {
	display: "flex", 
	alignItems: "center", 
	justifyContent: "space-between",
  }
  
  // The forwardRef is important!!
  // Dropdown needs access to the DOM node in order to position the Menu
  const CustomToggle = React.forwardRef(({ children, onClick }, ref) => (
    <a
      href=""
      ref={ref}
      onClick={(e) => {
        e.preventDefault();
        onClick(e);
      }}
    >
      {children}
      &#x25bc;
    </a>
  ));

  // forwardRef again here!
  // Dropdown needs access to the DOM of the Menu to measure it
  const CustomMenu = React.forwardRef(
    ({ children, style, className, 'aria-labelledby': labeledBy }, ref) => {
      const [value, setValue] = useState('');
      return (
        <div
          ref={ref}
          style={style}
          className={className}
          aria-labelledby={labeledBy}
        >
          <ul className="list-unstyled">
            {React.Children.toArray(children).filter(
              (child) =>
                !value || child.props.children.toLowerCase().startsWith(value),
            )}
          </ul>
        </div>
      );
    },
  );
  
  return (
    
    <div className="App">	  
	  <nav class="navbar navbar-expand-lg navbar-light bg-light" style={{height:'50px'}} >
		<div class="collapse navbar-collapse" id="navbarSupportedContent" >
		  <img src={foodChainLogo} alt="logo" className="photo" style={{height:'30px'}} />
		</div>
		  
		<Dropdown>
		  <Dropdown.Toggle as={CustomToggle} id="dropdown-custom-components">BBB</Dropdown.Toggle>
	      <Dropdown.Menu as={CustomMenu} >
			<Dropdown.Item eventKey="1">
			  <div style={userStyle}>
			    <b>Rules</b>
			    <img src={infoCircle} alt="info" style={{height:'16px'}} />
			  </div>
			</Dropdown.Item>      			
		  </Dropdown.Menu>
		</Dropdown>
	  </nav>
	  
	  <img src={waiting_room} alt="waitingRoomLogo" style={waitingRoomStyle} />
	  <Container style={containerStyle}>
		<Row className="block-example border border-dark"> 
		  <Col style={playerColStyle}>
		    <Row><img src={brand1} alt="brand1" /></Row>
			<Row style={nameStyle}>AAA</Row>
			<Row style={statusReady}>Ready</Row>
		  </Col>
		  <Col style={playerColStyle}>
		    <Row><img src={brand2} alt="brand2" /></Row>
			<Row style={nameStyle}>BBB</Row>
			<Row style={isReady ? statusReady : statusPrepare}>{isReady ? "READY" : "PREPARE"}</Row>
		  </Col>
		  <Col style={playerColStyle}>
		    <Row><img src={brand3} alt="brand3" /></Row>
			<Row style={nameStyle}>CCCC</Row>
			<Row style={statusReady}>Ready</Row>
		  </Col>
		  <Col style={playerColStyle}>
		    <Row><img src={brand4} alt="brand4" /></Row>
			<Row style={nameStyle}>DDDD</Row>
			<Row style={statusReady}>Ready</Row>
		  </Col>
		  <Col style={playerColStyle}>
		    <Row><img src={brand5} alt="brand5" /></Row>
			<Row style={nameStyle}>EE</Row>
			<Row style={statusReady}>Ready</Row>
		  </Col>
		</Row>
		<Row className="justify-content-md-center" style = {confirmButtonStyle}>
		  <Button 
		    variant= {isReady ? "danger" : "success"}
			size = "lg"
			onClick={handleClick}
			> {isReady ? "CANCEL" : "I'M READY"}</Button>
		</Row>
	  </Container>
    </div>
  );
}

export default App;
