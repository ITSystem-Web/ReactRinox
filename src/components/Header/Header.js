import React, { useState } from "react";
import { Container, Row, Col, Navbar, Nav, } from 'react-bootstrap';
import { Link } from "react-router-dom";
import Language from "../Language/Language"



import './Header.css';

function Header() {

    const [isActive, setActive] = useState(false);

    const toggleClass = () => {
        setActive(!isActive);
    };

    return (
        < >

            <header>
                <Container>
                    <Row>
                        <Col sm={2}>
                            <Navbar.Brand href="#home">
                                <img
                                    src="./logo.png"
                                    width="209"
                                    height="55"
                                    className="d-inline-block align-top"
                                    alt=" logo"
                                />
                            </Navbar.Brand>
                        </Col>
                        <Col sm={10} >
                            <Nav className="justify-content-end desktop " activeKey="/home">
                                <Nav.Item as="li">
                                    <Nav.Link> <Link className="nav_links" to="/"> Principala </Link></Nav.Link>
                                </Nav.Item>
                                <Nav.Item as="li">
                                    <Nav.Link> <Link className="nav_links" to="/Portofoliu"> Portofoliu </Link></Nav.Link>
                                </Nav.Item>
                                <Nav.Item as="li">
                                    <Nav.Link> <Link className="nav_links" to="/DespreNoi"> Despre Noi </Link></Nav.Link>
                                </Nav.Item>
                                <Nav.Item as="li">
                                    <Nav.Link> <Link className="nav_links" to="/ServiciiMain"> Servicii </Link></Nav.Link>
                                </Nav.Item>
                                <Nav.Item as="li">
                                    <Nav.Link> <Link className="nav_links" to="Contacte"> Contacte </Link></Nav.Link>
                                </Nav.Item>
                                <Nav.Item as="li">
                                    <Nav.Link><Language /></Nav.Link>
                                </Nav.Item>

                            </Nav>

                            <div className="mobile">
                                <div className="mob-lang">
                                    <Language />

                                </div>
                                <div className="burger-content">

                                    <img onClick={toggleClass}
                                        src="../images/burger.png"
                                        width="30"
                                        height="30"
                                        className="d-inline-block align-top"
                                        alt=" logo"
                                    />

                                    <div className={isActive ? "menu-burger-container active  " : "menu-burger-container "}>

                                        <ul>
                                            <li><Link className="nav_links" to="/"> Principala </Link></li>
                                            <li><Link className="nav_links" to="/Portofoliu"> Portofoliu </Link></li>
                                            <li><Link className="nav_links" to="/DespreNoi"> Despre Noi </Link></li>
                                            <li><Link className="nav_links" to="/ServiciiMain"> Servicii </Link></li>
                                            <li><Link className="nav_links" to="Contacte"> Contacte </Link></li>

                                        </ul>
                                    </div>
                                </div>
                            </div>

                        </Col>

                    </Row>

                </Container>


            </header>




        </>
    );
}

export default Header;
