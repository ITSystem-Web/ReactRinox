import React from "react"
import { Container, } from 'react-bootstrap'
import { Link } from "react-router-dom";
import './Gallery.css';





function Gallery() {

    return (
        < >
            <section className="Gallery">
                <Container>
                    <div className="gallery_about">
                        <h2> Exemple de lucrari terminate</h2>
                        <p>Compania noastră se ocupă cu tăierea metalelor profilate.
                            Tăierea cu laser a metalului până la 10 mm. Echipament modern, efectuarea  lucrărilor în termen scurt.
                            Tăierea produselor de orice complexitate geometrică.
                            Lucrăm cu material de tablă cu dimensiuni pînă la 3000x1500.
                            Abordare individuală a fiecărui client.</p>
                    </div>
                    <div className="Grid_Gallery">
                        <div className="grid_item0">
                            <Link className="servicii-link" to="/ServiciiMain"> Mai multe Servicii </Link>
                            <img src="../images/arrowicon.png" alt="icon" />
                        </div>
                        <div className="grid_item1">
                            <img className="galeryimg" src="../images/galery1.png" alt="galery" />
                        </div>
                        <div class="grid_item2">
                            <img className="galeryimg" src="../images/galery2.png" alt="galery" />
                        </div>
                        <div class="grid_item3">
                            <img className="galeryimg" src="../images/galery3.png" alt="galery" />
                        </div>
                        <div class="grid_item4">
                            <img className="galeryimg" src="../images/galery4.png" alt="galery" />
                        </div>
                        <div class="grid_item5">
                            <img className="galeryimg galerydesktop" src="../images/galery5.png" alt="galery" />
                            <img className="galeryimgmob" src="../images/galerymob.png" alt="galerymob" />

                        </div>
                        <div class="grid_item6">
                            <img className="galeryimg" src="../images/galery6.png" alt="galery" />
                        </div>
                        <div class="grid_item7">
                            <img className="galeryimg" src="../images/galery7.png" alt="galery" />
                        </div>



                    </div>



                </Container>


            </section>





        </>
    );
}

export default Gallery;