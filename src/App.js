import logo from './Cover.png';
import './App.css';
import { Form, Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';

function App() {
  return (
    <div className="App">
	  <Container>
	    <Row className = "align-items-center">
		  <Col>
		    <img src={logo} alt="Title screen" />
		  </Col>
		  <Col>
		    <Form>
			  <Form.Group controlId="formBasicEmail">
			    <Form.Label style ={{fontFamily: "VTC"}}>USERNAME</Form.Label>
			    <Form.Control type="email" placeholder="Username" />
			    <Form.Text className="text-muted"></Form.Text>
			  </Form.Group>
			  <Form.Group controlId="formBasicPassword">
			    <Form.Label style ={{fontFamily: "VTC"}}>PASSWORD</Form.Label>
			    <Form.Control type="password" placeholder="Password" />
		      </Form.Group>
			  <Button variant="info" type="submit" style ={{fontFamily: "VTC"}}>LOGIN</Button>
			</Form>
		  </Col>
		</Row>
	  </Container>
    </div>
  );
}

export default App;
