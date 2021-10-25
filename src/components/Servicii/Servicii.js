import React from "react"
import { Container } from 'react-bootstrap'
import './Servicii.css';
import { Link } from "react-router-dom";





function Servicii() {



    return (
        <>
            <section className="Servicii">
                <Container>
                    <div className="service_tittle">
                        <h2>Serviciile Noastre</h2>
                    </div>
                </Container>
                <div className="service_container">
                    <div className="service_img">
                        <h2>Serviciile Noastre</h2>
                    </div>
                    <div className="service_list">
                        <ul>
                            <li><Link to="/Gallery1">Sudare</Link> </li>
                            <li><Link to="/Gallery2">Taierea Plasticului</Link></li>
                            <li><Link to="/Gallery3">Taierea Metalelor</Link></li>
                            <li><Link to="/Gallery4">Vopsirea</Link></li>
                            <li><Link to="/Gallery5">Taierea Metalelor</Link></li>
                            <li><Link to="/Gallery1">Indoierea metalelot</Link></li>
                        </ul>
                    </div>
                </div>



            </section>





        </ >
    );
}

export default Servicii;