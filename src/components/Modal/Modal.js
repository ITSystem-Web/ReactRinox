import React from "react"
import { Modal } from 'react-bootstrap';
import "./Modal.css";
import Forma from "../MapForm/myForm/myForm"





function MyVerticallyCenteredModal(props) {
    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Formular
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <div class="modal-container">
                    <div class="modal-baner">
                        <div class="modal-tittle">
                            <h1>Transmite Comanda</h1>
                        </div>
                    </div>

                    <Forma />


                </div>
            </Modal.Body>

        </Modal>
    );
}
export default MyVerticallyCenteredModal;