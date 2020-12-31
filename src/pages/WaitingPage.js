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
			{[1, 2, 3, 4, 5].map(player => (
				<Col className="player">
					<img src={`/restaurant-${player}.svg`} />
					<b className="player-name">AAA</b>
					<b className="status">Ready</b>
				</Col>
			))}
		</Row>
		<Row className="justify-content-md-center" id="confirm-button">
		  <Button variant= "success" size = "lg">I'M READY</Button>
		</Row>
	  </Container>
    </div>
  );
}

export default WaitingPage;
