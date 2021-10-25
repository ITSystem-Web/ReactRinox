import React from "react"
import { Container, Table } from 'react-bootstrap'
import './Avantaje.css';





function Avantaje() {

    return (
        <>
            <section className="Avantaje">
                <Container>
                    <h2 className="Header_desktop">Avantajele Noastre</h2>
                </Container>
                <div className="avantaje_flex">
                    <Table striped bordered hover className="avantaje_tab">
                        <thead>
                            <tr>

                                <th>Echipament modern</th>
                                <th>Timp scurt.</th>
                                <th>Abordare individuala a fiecarui client.</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>

                                <td>Efectuam taiere cu laser si taiere de-a lungul unui contur complex</td>
                                <td>Fiabilitate, durabilitate a produselor, tendințe care îndeplinesc cerințele estetice.</td>
                                <td>Taierea produselor de orice complexitate geometrica.</td>
                            </tr>
                        </tbody>
                    </Table>
                    <div className="avantaje_img"></div>

                </div>
                <div className="avantaje_mob">
                    <div className="avantaje_mobimg">
                        <h2 >Avantajele Noastre</h2>
                    </div>

                    <div className="avantaje_content_mob">
                        <p>Timp scurt.</p>
                        <p>Abordare individuala a fiecarui client.</p>
                        <p>Efectuam taiere cu laser si taiere de-a lungul unui contur complex</p>
                        <p>Fiabilitate, durabilitate a produselor, tendințe care îndeplinesc cerințele estetice.</p>
                        <p>Taierea produselor de orice complexitate geometrica.</p>
                    </div>
                </div>

            </section>





        </ >
    );
}

export default Avantaje;