import React from "react"
import { BrowserRouter } from "react-router-dom";
import { Container } from 'react-bootstrap';
import './Gallery.css';
import MyVerticallyCenteredModal from "../../Modal/Modal"


function Gallery3() {
    const [modalShow, setModalShow] = React.useState(false);
    return (
        <BrowserRouter>
            <div className="gallery1" id="sudare">

                <Container>
                    <div className="gallery1-container">

                        <h2 className="gallery-tittle">Compania noastra se ocupa cu taierea metalelor profilate</h2>
                        <div className="gallery-content-flex">

                            <div className="about-gallery-container">


                                <div className="about-gallery-content">
                                    <p> Taierea cu laser a metalului pina la 10 mm. Echipament modern, pe termen scurt. Taierea produselor de orice complexitate geometrica. Efectuam taiere cu laser și taiere de-a lungul unui contur complex. Lucram cu material de tabla cu dimensiuni 3000x1500. Abordare individuala a fiecarui client.
                                    </p>

                                    <li>- material pentru foaie</li>
                                    <li>-pipe</li>
                                    <li>- profile de secțiune patrata și dreptunghiulară</li>
                                    <li>- metal feros (grosimea metalului de la 0,5 la 10 mm),
                                    </li>
                                    <li>- otel inoxidabil (grosime de la 0,5 la 5 mm)
                                    </li>
                                    <li>-Diametrul tevii de la 20 mm la 200 mm, cu o grosime a peretelui de până la 5 mm.
                                    </li>
                                    <li>-Profil de la 20x20 mm la 140x140 mm
                                    </li>

                                </div>
                                <button className="gallery-btn" onClick={() => setModalShow(true)}>Comanda Acum</button>
                            </div>
                            <div className="gallery-main-image">
                                <img src="./images/gallerymain3.png" alt="galery" />
                            </div>
                        </div>

                        <div className="gallery-images-container">

                            <div className="gallery-image-item">
                                <img src="./images/gallery3img1.png" alt="galery" />
                            </div>
                            <div className="gallery-image-item">
                                <img src="./images/gallery3img2.png" alt="galery" />
                            </div>
                            <div className="gallery-image-item">
                                <img src="./images/gallery3img3.png" alt="galery" />
                            </div>
                            <div className="gallery-image-item">
                                <img src="./images/gallery3img4.png" alt="galery" />
                            </div>
                            <div className="gallery-image-item">
                                <img src="./images/gallery3img5.png" alt="galery" />
                            </div>
                        </div>



                    </div>



                </Container >
                <MyVerticallyCenteredModal
                    show={modalShow}
                    onHide={() => setModalShow(false)}
                />
            </div>
        </BrowserRouter >
    );
}

export default Gallery3;