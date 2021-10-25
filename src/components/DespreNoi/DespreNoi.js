import React from "react"
import { BrowserRouter } from "react-router-dom";
import { Container } from 'react-bootstrap';
import './DespreNoi.css';
import BannerPublicitate from "../BannerPublicitate/BannerPublicitate";
import MapForm from "../MapForm/MapForm"


function DespreNoi() {
    return (
        <BrowserRouter>


            <div className="despre-noi">
                <div className="despre-noi-top">

                    <div className="despre-noi-top-content">
                        <h1>Campania Rinox.md</h1>
                        <p className="despre-noi-top-about">
                            Vă invită să vedeți lucrările noastre din oțel inoxidabil pur.</p>
                        <p class="despre-noi-top-about">
                            Toate aceste lucrări pot fi ale tale,
                            trebuie doar să ne scrii despre dorințele tale și vom fi bucuroși să creăm orice lucrare pentru tine.
                        </p>
                    </div>
                    <div className="despre-noi-top-img">
                        <img src="./images/desprenoitop.png" alt="img" />
                    </div>


                </div>
                <BannerPublicitate />
                <Container>

                    <div className="despre-noi-bottom">


                        <div className="despre-noi-bottom-img">
                            <img src="./images/desprenoibottom.png" alt="img" />
                        </div>
                        <div className="despre-noi-bottom-content">
                            <h3>Aici iformatie mai ampla despre companie</h3>
                            <p className="despre-noi-bottom-about">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit.Vulputate ultrices volutpat aliquam, pulvinar arcu
                                vel urna sagittis, ut.</p>

                            <p className="despre-noi-bottom-about">  Ut sed tempus, porta aenean aenean tincidunt pharetra vestibulum ullamcorper.</p>
                            <p className="despre-noi-bottom-about">
                                In sed diam velit a, fermentum gravida senectus.Pulvinar nisl elementum mauris,
                                pharetra dignissim libero amet.Commodo, auctor egestas vitae blandit non convallis venenatis enim.
                                Sit eu ac non malesuada amet malesuada.
                            </p>
                        </div>

                    </div>


                </Container>

                <MapForm />
            </div >
        </BrowserRouter >
    );
}

export default DespreNoi;