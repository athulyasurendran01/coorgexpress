
import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from "react-router-dom";

import { Button, Tab, Modal, Tabs } from 'react-bootstrap';
import logo from '../../logo/logo-light.png';
import './Header.css'
import Register from '../Auth/Register/Register';
import Login from '../Auth/Login/Login';

function Header({ headerStyle }) {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <Navbar fixed="top" variant="dark" className={headerStyle}>
                <Container>
                    <Navbar.Brand href="#home"><img src={logo} /></Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link><Link to="/">Home</Link></Nav.Link>
                            <Nav.Link><Link to="/about">About Us</Link></Nav.Link>
                            <Nav.Link><Link to="/stay">Stay</Link></Nav.Link>
                            <Nav.Link><Link to="/experiences">Experiences</Link></Nav.Link>
                            <Nav.Link><Link to="/events">Events</Link></Nav.Link>
                            <Nav.Link><Link to="/blog">Blogs</Link></Nav.Link>
                            <Nav.Link>
                                <Button variant="primary" onClick={handleShow}>
                                    Login
                                </Button>
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Modal heading</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Tabs
                        defaultActiveKey="register"
                        id="uncontrolled-tab-example"
                        className="mb-3"
                    >
                        <Tab eventKey="register" title="Register">
                            <Register />
                        </Tab>
                        <Tab eventKey="login" title="Login">
                            <Login />
                        </Tab>
                        {/* <Tab eventKey="forgotpassword" title="Change Password">
                            <Register />
                        </Tab> */}
                    </Tabs>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleClose}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}
export default Header