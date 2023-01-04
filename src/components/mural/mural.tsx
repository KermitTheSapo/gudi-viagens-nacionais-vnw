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
                <img className="imagesMural__img" src={bike} alt="uma mulher em uma bicicleta no meio da estrada" />
                <img className="imagesMural__img" src={dog} alt="um homem tirando uma selfie com um cachorro" />
                <img className="imagesMural__img" src={family} alt="uma familia em cima de uma pedra na praia pulando" />
                <img className="imagesMural__img" src={kid} alt="uma pai jogando seu filho para cima" />
                <img className="imagesMural__img" src={selfie} alt="uma familia tirando uma selfie" />
                <img className="imagesMural__img" src={trip} alt="um homem com barba, óculos e bone tirando uma selfie enquanto da uma caminhada em uma montanha" />
            </div>
            <Characteristics />
        </div>
    )
}