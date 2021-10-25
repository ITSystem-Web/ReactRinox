import React from "react"
import { Container, Nav, Col, Row, } from 'react-bootstrap'
import './Footer.css';
import { Link } from "react-router-dom";





function Footer() {

    return (
        <div >
            <section className="Footer">

                <Container>
                    <div className="footer_flex">
                        <div class="footer_nav">
                            <div className="footer_navlinks">
                                <Row>
                                    <Col sm={10} >
                                        <Nav className="justify-content-start " activeKey="/home">
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
                                                <Nav.Link> <Link className="nav_links last-item" to="/">RO/RU </Link></Nav.Link>
                                            </Nav.Item>
                                        </Nav>
                                    </Col>
                                </Row>
                                <div className="container_line"></div>
                            </div>
                            <div className="footer_contacts">
                                <div className="contacts_flex">
                                    <div className="adress">
                                        <img src="../images/location.svg" alt="locationsvg" />
                                        Pietrarilor 2 <br />
                                        Chisinau,Moldova

                                    </div>
                                    <div>
                                        <img src="../images/phone.svg" alt="locationsvg" />
                                        +37369331228

                                    </div>
                                </div>
                                <div>
                                    <img src="../images/mail.svg" alt="locationsvg" />
                                    rinox.md@mail.ru

                                </div>

                                <div className="footer_logo fmob">
                                    <img src="../images/footerlogo.png" alt="logo" />
                                    © 2021 Rinox All right reservet
                                </div>


                            </div>

                        </div>

                        <div className="footer_logo fdesktop">
                            <img src="../images/footerlogo.png" alt="logo" />
                            © 2021 Rinox All right reservet
                        </div>
                        <div className="footer_logo mobile_foter">
                            <img src="../images/mobilelogo.png" alt="logo" />

                        </div>

                    </div>

                </Container>




            </section>





        </div >
    );
}

export default Footer;