import "./muralStyle.sass"

import bike from "../../assets/imgs/mural/bike.png"
import dog from "../../assets/imgs/mural/dog.png"
import family from "../../assets/imgs/mural/family.png"
import kid from "../../assets/imgs/mural/kid.png"
import selfie from "../../assets/imgs/mural/selfie.png"
import trip from "../../assets/imgs/mural/trip.png"
import Characteristics from "./characteristics/characteristics"

export default function Mural() {
    return (
        <div id="mural">
            <p className="paragraph">use a hashtag #brasilisverigudi</p>
            <h2 className="title">Nosso mural de Experiências</h2>
            <div className="imagesMural">
                <img src={bike} alt="" />
                <img src={dog} alt="" />
                <img src={family} alt="" />
                <img src={kid} alt="" />
                <img src={selfie} alt="" />
                <img src={trip} alt="" />
            </div>
            <Characteristics />
        </div>
    )
}