import React, { Component } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import {Link} from 'react-router-dom';
import './header.css';



class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    render() {
        return (
                <Navbar bg="primary">
                    <Container>
                        <Navbar.Brand >
                            <img
                            src="/logo-isac.png"
                            width="200px"
                            className="d-inline-block align-top"
                            alt="isac-logo"

                            />
                        </Navbar.Brand>
                        <Nav>
                            <Nav.Link>
                                <Link to="/" className="link">Home</Link>
                            </Nav.Link>
                            <Nav.Link><Link to="/unidades" className="link">Unidades</Link></Nav.Link>
                        </Nav>
                    </Container>
                </Navbar>
        );
    }
}

export default Header;