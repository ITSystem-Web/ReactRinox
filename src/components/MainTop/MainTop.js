import React from "react"
import { Button, Container } from 'react-bootstrap';
import './MainTop.css';
import MyVerticallyCenteredModal from "../Modal/Modal"
import { useTranslation } from 'react-i18next';








function MainTop() {

    const [modalShow, setModalShow] = React.useState(false);
    const [t] = useTranslation();
    return (
        < >
            <section className="Banner">
                <Container>
                    <div className="banner_left">
                        <div className="banner_tittle">
                            <h1>{t('Header.title')}</h1>
                        </div>
                        <div className="banner_container">
                            <p >{t('Header.subtitle1')}</p>

                            <p>{t('Header.subtitle2')}</p>
                        </div>
                        <div className="banner_btn">
                            <Button variant="primary topbuton" onClick={() => setModalShow(true)}>Comanda Acum</Button>{' '}
                        </div>

                    </div>
                </Container>


                <MyVerticallyCenteredModal
                    show={modalShow}
                    onHide={() => setModalShow(false)}
                />

            </section>





        </ >
    );
}

export default MainTop;

