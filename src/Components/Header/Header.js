
import React, { useState } from 'react';
import {NavDropdown, Nav, Navbar, Container, Button, Tab, Modal, Tabs} from 'react-bootstrap';
import { Link } from "react-router-dom";
import logo from '../../logo/logo-light.png';
import './Header.css'
import Register from '../Auth/Register/Register';
import Login from '../Auth/Login/Login';
import ForgotPassword from '../Auth/ForgotPassword/ForgotPassword';

function Header({ headerStyle }) {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <Navbar fixed="top" variant="dark" className={headerStyle}>
                <Container>
                    <Navbar.Brand href="/"><img src={logo} /></Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link><Link to="/">Home</Link></Nav.Link>
                            {/* <Nav.Link><Link to="/our-story">Our Story</Link></Nav.Link> */}
                            {/*<Nav.Link><Link to="/why-coorg">Why Coorgexpress</Link></Nav.Link>*/}
                            {/*<Nav.Link><Link to="/responsible-tourism">Responsible Tourism</Link></Nav.Link>*/}
                            <Nav.Link><Link to="/stay">Stay</Link></Nav.Link>
                            <Nav.Link><Link to="/experiences">Experiences</Link></Nav.Link>
                            <Nav.Link><Link to="/events">Events</Link></Nav.Link>
                            <NavDropdown title="About Us">
                                <NavDropdown.Item><Link to="/about-coorg">About Coorg</Link></NavDropdown.Item>
                                <NavDropdown.Item><Link to="/our-story">Our Story</Link></NavDropdown.Item>
                                <NavDropdown.Item><Link to="/why-coorg">Why Coorgexpress</Link></NavDropdown.Item>
                                <NavDropdown.Item><Link to="/responsible-tourism">Responsible Tourism</Link></NavDropdown.Item>
                            </NavDropdown>
                            <Nav.Link><Link to="/blog">Blogs</Link></Nav.Link>
                            <Nav.Link>
                                <Button variant="primary" className="login" onClick={handleShow}>Login</Button>
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                </Modal.Header>
                <Modal.Body>
                    <Tabs
                        defaultActiveKey="login"
                        id="uncontrolled-tab-example"
                        className="mb-3"
                    >
                        <Tab eventKey="login" title="Login">
                            <Login />
                        </Tab>
                        <Tab eventKey="register" title="Register">
                            <Register />
                        </Tab>

                        <Tab eventKey="forgotpassword" title="Forgot Password">
                            <ForgotPassword />
                        </Tab>
                    </Tabs>
                </Modal.Body>
            </Modal>
        </>
    )
}
export default Header