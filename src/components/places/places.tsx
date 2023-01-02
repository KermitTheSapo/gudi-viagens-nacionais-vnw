import Item from "./item/item";
import "./placesStyle.sass"

import amazonia from "../../assets/imgs/places/amazonia.png"
import caldasNovas from "../../assets/imgs/places/caldasNovas.png"
import rio from "../../assets/imgs/places/rio.png"
import rj from "../../assets/imgs/places/rj.png"

export default function Places() {
    return (
        <div id="places">
            <Item place={"Rio De Janeiro"} image={rj} color={"#CFB09A"} />
            <Item place={"Rio Das ostras"} image={rio} color={"#C2C0C1"} />
            <Item place={"caldas novas"} image={caldasNovas} color={"#0F3032"} />
            <Item place={"amazônia"} image={amazonia} color={"#3E3F2B"} />
        </div>
    );
}