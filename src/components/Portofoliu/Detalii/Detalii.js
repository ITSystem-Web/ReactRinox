import React from "react"
import { Container } from 'react-bootstrap';
import './Detalii.css';


function Detalii() {
    return (

        <div className="Detalii">
            <div className="Detalii-top">

                <Container>
                    <div className="container_title">
                        <h1 className="profile_tittle">Aici Detalii Proiect</h1>
                    </div>

                </Container>

            </div>
            <Container>
                <div className="Detalii-content">
                    <div className="detalii-title">
                        <h3>Produce echipamente industriale:
                        </h3>
                    </div>
                    <div className="Detalii-list">
                        <h3>-Produce echipamente industriale: </h3>
                        <li>- mese din inox; </li>
                        <li> - rafturi, rafturi din oțel inoxidabil; </li>
                        <li> - standuri pentru echipamente; </li>
                        <li> - chiuvete din inox; </li>
                        <li> - hote din inox; </li>
                        <li> - cărucioare din oțel inoxidabil</li>
                    </div>
                    <div className="Detalii-about">
                        <p>Lorem ipsum dolor sit amet,
                            consectetur adipiscing elit.Aliquet dui,
                            sem turpis odio morbi elit.
                            Fames volutpat ultrices praesent et sagittis at nec.
                        </p>
                        <p>
                            Sit scelerisque non sed odio pellentesque imperdiet purus natoque.
                            Tristique nullam consectetur mi etiam facilisi.
                            Egestas morbi iaculis vitae consectetur morbi turpis sem venenatis.
                            Adipiscing neque tortor ullamcorper vestibulum,
                            arcu, scelerisque nisi, lobortis convallis.</p>
                    </div>

                </div>
                <div className="Detalii-images">
                    <div className="detalii_img">
                        <img src="./images/sink.png" alt="sink" />
                    </div>
                    <div className="detalii_img">
                        <img src="./images/inoxtable1.png" alt="sink" />
                    </div>
                    <div className="detalii_img">
                        <img src="./images/inoxtable2.png" alt="sink" />
                    </div>
                </div>
            </Container>

        </div >

    );
}

export default Detalii;
