import React from "react";
import { connect } from "react-redux";
import { Form, Button } from "react-bootstrap";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";

import { login } from "../reducers/user";
import "./LoginPage.css";

class LoginPage extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            username: "",
            password: "",
        };
        this.onSubmit = this.onSubmit.bind(this);
        this.onUsernameChange = this.onUsernameChange.bind(this);
        this.onPasswordChange = this.onPasswordChange.bind(this);
    }
    onUsernameChange(event){
        this.setState({username: event.target.value});
    }
    onPasswordChange(event){
        this.setState({password: event.target.value});
    }
    onSubmit(event){
        event.preventDefault();
        this.props.userLogin(this.state.username, this.state.password);
    }
    render(){
        return (<div id="login-page">
            <Container>
                <Row className="align-items-center">
                    <Col>
                        <img src="/Cover.png" alt="Title screen" />
                    </Col>
                    <Col>
                        <Form validated={this.props.token} onSubmit={this.onSubmit}>
                            <Form.Group controlId="formUsername">
                                <Form.Label>USERNAME</Form.Label>
                                <Form.Control type="text" placeholder="Username" value={this.state.username} isInvalid={(this.props.token === false)} onChange={this.onUsernameChange}/>
                            </Form.Group>
                            <Form.Group controlId="formPassword">
                                <Form.Label>PASSWORD</Form.Label>
                                <Form.Control type="password" placeholder="Password" value={this.state.password} isInvalid={(this.props.token === false)} onChange={this.onPasswordChange}/>
                                <Form.Control.Feedback type="invalid">
                                    Invalid username or password.
                                </Form.Control.Feedback>
                            </Form.Group>
                            <Button id="submit-button" variant="primary" type="submit">LOGIN</Button>
                        </Form>
                    </Col>
                </Row>
            </Container>
        </div>);
    }
}

const mapStateToProps = state => ({
    token: state.user.token,
});

const mapDispatchToProps = dispatch => ({
    userLogin(username, password){
        dispatch(login({username, password}));
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);
