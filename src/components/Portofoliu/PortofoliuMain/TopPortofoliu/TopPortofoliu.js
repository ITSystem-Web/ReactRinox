import React from "react"
import { BrowserRouter } from "react-router-dom";
import { Container } from 'react-bootstrap';
import './TopPortofoliu.css';


function TopPortofoliu() {
    return (
        <BrowserRouter>
            <div className="TopPortofoliu">

                <Container>
                    <div class="container_title">
                        <h1 class="profile_tittle">Aici proectele finisate</h1>
                    </div>


                </Container>


            </div>
        </BrowserRouter>
    );
}

export default TopPortofoliu;