import React from "react"
import { BrowserRouter } from "react-router-dom";
import { Container } from 'react-bootstrap';
import './Gallery.css';
import MyVerticallyCenteredModal from "../../Modal/Modal"


function Gallery1() {
    const [modalShow, setModalShow] = React.useState(false);
    return (
        <BrowserRouter>
            <div className="gallery1">

                <Container>
                    <div className="gallery1-container">

                        <h2 className="gallery-tittle">Chiuvete, mese, rafturi din oțel inoxidabil</h2>
                        <div className="gallery-content-flex">

                            <div className="about-gallery-container">
                                <h3 className="gallery-subtittle">Compania RINOX produce echipamente industriale:
                                </h3>

                                <div className="about-gallery-content">

                                    <li>- mese din inox;</li>
                                    <li>- rafturi, rafturi din oțel inoxidabil;</li>
                                    <li>- standuri pentru echipamente;</li>
                                    <li>- chiuvete din inox;</li>
                                    <li>- hote din inox;</li>
                                    <li>- cărucioare din oțel inoxidabil</li>
                                </div>
                                <button class="gallery-btn" onClick={() => setModalShow(true)} >Comanda Acum</button>
                            </div>
                            <div className="gallery-main-image">
                                <img src="./images/gallerymain.png" alt="galery" />
                            </div>
                        </div>

                        <div className="gallery-images-container">

                            <div className="gallery-image-item">
                                <img src="./images/gallery1img1.png" alt="galery" />
                            </div>
                            <div className="gallery-image-item">
                                <img src="./images/gallery1img2.png" alt="galery" />
                            </div>
                            <div className="gallery-image-item">
                                <img src="./images/gallery1img3.png" alt="galery" />
                            </div>
                            <div className="gallery-image-item">
                                <img src="./images/gallery1img4.png" alt="galery" />
                            </div>
                            <div className="gallery-image-item">
                                <img src="./images/gallery1img5.png" alt="galery" />
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

export default Gallery1;