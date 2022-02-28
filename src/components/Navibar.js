import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';

const Navibar = () => {
  return (
    <div>
        <Navbar collapseOnSelect className="color-nav" fixed="top" expand="sm" bg="primary" variant="dark">
            <Container>
                <Navbar.Toggle aria-controls='responsive-navbar-nav' />
                <Navbar.Collapse id='responsive-navbar-nav'>
                    <Nav>
                        <Nav.Link href='/navi'>Dashboard</Nav.Link>
                        <Nav.Link href='/campcrea'>Campaign</Nav.Link>
                        <Nav.Link href='/'>Profile</Nav.Link>
                        <Nav.Link href='/'>Review</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    </div>
  )
}

export default Navibar;