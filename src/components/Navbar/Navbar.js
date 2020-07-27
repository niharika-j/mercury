import React from 'react';
import './Navbar.scss';
import logo from '../../assets/images/logo.png';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Container } from 'react-bootstrap';


class NavbarComponent extends React.Component {
    render() {
        return (
            <section id="navbar">
                <Navbar bg="primary" variant="dark" expand="sm" collapseOnSelect={true} fixed="top">
                    <Container fluid>
                        <Navbar.Brand href="/mercury">
                            <img src={logo} alt="Mercury" id="logo" />
                        </Navbar.Brand>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" id="hamburger-icon" />
                        <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-end">
                            <Nav>
                                <Nav.Link href="/mercury/research">Research</Nav.Link>
                                <Nav.Link href="/mercury/prototypes">Prototypes</Nav.Link>
                                <Nav.Link href="/mercury/solutions">Solutions</Nav.Link>
                                <Nav.Link href="/mercury/team">Our Team</Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </section>
        );
    }
}

export default NavbarComponent;