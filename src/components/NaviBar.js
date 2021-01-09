import PropTypes from "prop-types";
import React from "react";
import { connect } from "react-redux";
import { Dropdown, DropdownButton, Nav, Navbar } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "./NaviBar.css";

function NaviBar(props) {
    return (
        <Navbar id="navbar" expand="lg" variant="light">
            <Navbar.Brand><img src="/logo.svg"/></Navbar.Brand>
            <Nav className="ml-auto">
                <DropdownButton id="navdrop" title={props.username} variant="link" menuAlign="right">
                    <Dropdown.Item target="_blank" href="/FCM_Rules_EN_v3.pdf">
                        <b>Rules</b>
                        <FontAwesomeIcon className="ml-auto" icon="info-circle"/>
                    </Dropdown.Item>
                </DropdownButton>
            </Nav>
        </Navbar>
    );
}

NaviBar.propTypes = {
    username: PropTypes.string.isRequired,
};

const mapStateToProps = state => ({
    username: state.user.username,
});

export default connect(mapStateToProps, null)(NaviBar);
