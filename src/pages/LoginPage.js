import React, {useState} from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Button, Form } from "react-bootstrap";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";

import { login } from "../reducers/user";
import "./LoginPage.css";

function LoginPage(props) {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const onSubmit = (event) => {
        event.preventDefault();
        props.userLogin(username, password);
    };

    const onUsernameChange = (event) => {
        setUsername(event.target.value);
    };

    const onPasswordChange = (event) => {
        setPassword(event.target.value);
    };

    return (<div id="login-page">
        <Container>
            <Row className="align-items-center">
                <Col>
                    <img src="/Cover.png" alt="Title screen"/>
                </Col>
                <Col>
                    <Form validated={props.token} onSubmit={onSubmit}>
                        <Form.Group controlId="formUsername">
                            <Form.Label>USERNAME</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Username"
                                value={username}
                                isInvalid={(props.token === false)}
                                onChange={onUsernameChange}
                            />
                        </Form.Group>
                        <Form.Group controlId="formPassword">
                            <Form.Label>PASSWORD</Form.Label>
                            <Form.Control
                                type="password"
                                placeholder="Password"
                                value={password}
                                isInvalid={(props.token === false)}
                                onChange={onPasswordChange}
                            />
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

LoginPage.propTypes = {
    token: PropTypes.any,
    userLogin: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
    token: state.user.token,
});

const mapDispatchToProps = dispatch => ({
    userLogin(username, password) {
        dispatch(login({ username, password }));
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);
