import React from "react"
import '../Portofoliu.css';
import TopPortofoliu from "./TopPortofoliu/TopPortofoliu"
import Slider1 from "./Slider1/Slider1"
import Slider2 from "./Slider2/Slider2"
import Slider3 from "./Slider3/Slider3"
import Slider4 from "./Slider4/Slider4"
import Slider5 from "./Slider5/Slider5"
import BannerPublicitate from "../../BannerPublicitate/BannerPublicitate"





function PortofoliuMain() {
    return (




        <div className="Portofoliu">
            <TopPortofoliu />
            <div >
                <Slider1 />
            </div>
            <div className="bggrey">
                <Slider2 />
            </div>

            < BannerPublicitate />

            <div className="bggrey">
                <Slider3 />
            </div>

            <div >
                <Slider4 />
            </div>
            <div className="bggrey">
                <Slider5 />
            </div>



        </div>

    );
}

export default PortofoliuMain;