import React from 'react';
import { Nav, Container, Navbar } from 'react-bootstrap';


export const Navigation = () => {

    return (
        <Navbar collapseOnSelect expand="lg" bg="danger" variant="dark">
            <Container>
                <Navbar.Brand href="/">Německo</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="/geologies">Geografie</Nav.Link>
                        <Nav.Link href="/histories">Historie</Nav.Link>
                        <Nav.Link href="/personalities">Osobnosti</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}