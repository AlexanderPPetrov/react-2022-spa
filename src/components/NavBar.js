import {
    Navbar, 
    Container,
    Nav,
} from "react-bootstrap";

import { Link } from 'react-router-dom';

function NavBar() {
    return (
        <Navbar bg="light" expand="lg">
            <Container>
                <Navbar.Brand href="#">React-Bootstrap</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                    <Nav.Link as={Link} to="/">Начало</Nav.Link>
                    <Nav.Link as={Link} to="/forecast">Прогноза за времето</Nav.Link>
                    <Nav.Link as={Link} to="/user">Потребител</Nav.Link>
                </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default NavBar;