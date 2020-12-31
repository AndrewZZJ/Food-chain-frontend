import { Form, Button } from "react-bootstrap";
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import './LoginPage.css';

function LoginPage() {
  return (
    <div>
	  <Container>
	    <Row className="align-items-center">
		  <Col>
		    <img src="/Cover.png" alt="Title screen" />
		  </Col>
		  <Col>
		    <Form>
			  <Form.Group controlId="formUsername">
			    <Form.Label>USERNAME</Form.Label>
			    <Form.Control type="text" placeholder="Username" />
			    <Form.Text className="text-muted"></Form.Text>
			  </Form.Group>
			  <Form.Group controlId="formPassword">
			    <Form.Label>PASSWORD</Form.Label>
			    <Form.Control type="password" placeholder="Password" />
		      </Form.Group>
			  <Button variant="primary" type="submit">LOGIN</Button>
			</Form>
		  </Col>
		</Row>
	  </Container>
    </div>
  );
}

export default LoginPage;
