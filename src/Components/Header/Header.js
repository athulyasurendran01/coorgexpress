
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from "react-router-dom";

import logo from '../../logo/logo-light.png';

import './Header.css'

function Header() {
    return (
        <Navbar fixed="top" variant="dark">
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
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}
export default Header