import React from "react";
import { Nav, Navbar, Dropdown, DropdownButton } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "./NaviBar.css";

export default function NaviBar(){
    return (
        <Navbar id="navbar" expand="lg" variant="light">
            <Navbar.Brand><img src="/logo.svg" /></Navbar.Brand>
            <Nav className="ml-auto">
                <DropdownButton id="navdrop" title="BBB" variant="link" menuAlign="right">
                    <Dropdown.Item target="_blank" href="/FCM_Rules_EN_v3.pdf">
                        <b>Rules</b>
                        <FontAwesomeIcon className="ml-auto" icon="info-circle" />
                    </Dropdown.Item>
                </DropdownButton>
            </Nav>
        </Navbar>
    );
}
