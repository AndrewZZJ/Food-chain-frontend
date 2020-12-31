import React from 'react';
import { Button, Col, Row, Container, Dropdown } from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import "./WaitingPage.css";

function WaitingPage() {
  return (
    <div id="waiting-page">	  
		<nav id="navbar" className="navbar navbar-expand-lg navbar-light" >
			<div className="collapse navbar-collapse" >
				<img src="/logo.svg" className="photo" />
			</div>
			
			<Dropdown id="drop-down">
			    <Dropdown.Toggle variant="link">BBB</Dropdown.Toggle>
                <Dropdown.Menu>
                    <Dropdown.Item eventKey="1">
                        <div className="dropdown-item">
                            <b>Rules</b>
                            <FontAwesomeIcon icon="info-circle" />
                        </div>
                    </Dropdown.Item>      			
                </Dropdown.Menu>
			</Dropdown>
		</nav>
	  
	  <img id="waiting-room-logo" src="/waiting_room.svg" />
	  <Container id="wrapper">
		<Row id="player-wrapper"> 
		  <Col className="player">
		    <img src="/restaurant-1.svg" alt="brand1" />
			<b className="player-name">AAA</b>
			<b className="status ready">Ready</b>
		  </Col>
		  <Col className="player">
		    <img src="/restaurant-2.svg" alt="brand2" />
			<b className="player-name">BBB</b>
			<b className="status prepare">PREPARE</b>
		  </Col>
		  <Col className="player">
		    <img src="/restaurant-3.svg" alt="brand3" />
			<b className="player-name">CCCC</b>
			<b className="status ready">Ready</b>
		  </Col>
		  <Col className="player">
		    <img src="/restaurant-4.svg" alt="brand4" />
			<b className="player-name">DDDD</b>
			<b className="status ready">Ready</b>
		  </Col>
		  <Col className="player">
		    <img src="/restaurant-5.svg" alt="brand5" />
			<b className="player-name">EE</b>
			<b className="status ready">Ready</b>
		  </Col>
		</Row>
		<Row className="justify-content-md-center" id="confirm-button">
		  <Button variant= "success" size = "lg">I'M READY</Button>
		</Row>
	  </Container>
    </div>
  );
}

export default WaitingPage;
