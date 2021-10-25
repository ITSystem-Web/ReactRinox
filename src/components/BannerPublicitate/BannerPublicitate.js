import React from "react"
import { Container, Button } from 'react-bootstrap'
import './BannerPublicitate.css';
import MyVerticallyCenteredModal from "../Modal/Modal"





function Avantaje() {
    const [modalShow, setModalShow] = React.useState(false);
    return (
        <>
            <section className="Banner_public">
                <Container>
                    <div className="banner_flex">
                        <h2 className="banner_tittle">Nu ezita! Comanda si beneficiaza de toata gama noastra de servicii</h2>

                        <div className="banbtn">
                            <Button variant="primary banerbtn" onClick={() => setModalShow(true)} >Comanda Acum</Button>{' '}
                        </div>
                    </div>
                </Container>
                <MyVerticallyCenteredModal
                    show={modalShow}
                    onHide={() => setModalShow(false)}
                />

            </section>





        </>
    );
}

export default Avantaje;