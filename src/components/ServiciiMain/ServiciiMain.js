import React from "react"
import { BrowserRouter } from "react-router-dom";
import { Container } from 'react-bootstrap';
import './ServiciiMain.css';
import Gallery1 from "./ServiciiList/Gallery1";
import Gallery2 from "./ServiciiList/Gallery2";
import Gallery3 from "./ServiciiList/Gallery3";
import Gallery4 from "./ServiciiList/Gallery4";
import Gallery5 from "./ServiciiList/Gallery5";


function ServiciiMain() {
    return (
        <BrowserRouter>
            <div className="serviciimain">
                <div className="TopPortofoliu">

                    <Container>
                        <div className="container_title">
                            <h1 className="profile_tittle">Toata Gama de servicii</h1>
                        </div>


                    </Container>
                </div>
                <Gallery1 />
                <Gallery2 />
                <Gallery3 />
                <Gallery4 />
                <Gallery5 />




            </div>
        </BrowserRouter >
    );
}

export default ServiciiMain;