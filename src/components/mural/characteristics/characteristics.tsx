import CharacteristicsItem from "./characteristicsItem/characteristicsItem"
import "./characteristicsStyle.sass"

import best from "../../../assets/imgs/mural/best.svg"
import city from "../../../assets/imgs/mural/city.svg"
import point from "../../../assets/imgs/mural/point.svg"
import restaurant from "../../../assets/imgs/mural/restaurant.svg"

export default function Characteristics() {
    return (
        <div id="characteristics">
            <CharacteristicsItem image={best} paragraph={"O melhor do Brasil"} primary={false} />
            <CharacteristicsItem image={city} paragraph={"Cidades mais frequentadas"} primary={true} />
            <CharacteristicsItem image={restaurant} paragraph={"Pontos turísticos"} primary={false} />
            <CharacteristicsItem image={point} paragraph={"Restaurantes"} primary={true} />
        </div >
    )
}