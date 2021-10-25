import React from "react"
import './MapForm.css';
import Forma from "./myForm/myForm"




function MapForm() {

    return (
        < >
            <section className="MapForm">
                <div className="Map">
                    <iframe title="locatia" src="https://www.google.com/maps/d/embed?mid=1EA_MvLnOg-I85nNJ1hhj2Zxsxku_5ali" width="100%" height="393" allowTransparency></iframe>

                    <div className="Formular">
                        <Forma />
                    </div>
                </div>





            </section>





        </ >
    );
}

export default MapForm;