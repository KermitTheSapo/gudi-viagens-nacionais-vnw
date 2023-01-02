import "./footerStyle.sass"
import MenuFooter from "./menuFooter/menuFooter"
import Gudi from "../../assets/imgs/header/logo.png"

export default function Footer() {
    return (
        <footer id="footer">
            <MenuFooter title={""} paragraph1={"Sobre nós"} paragraph2={"Mural de memórias"} paragraph3={"Eventos Gudi"} paragraph4={"Nosso blog"} image={Gudi}/>
            <MenuFooter title={"Contato"} paragraph1={"Chat Virtual"} paragraph2={"SAC Online"} paragraph3={"Ouvidoria"} paragraph4={"FAQ"} />
            <MenuFooter title={"Benefícios"} paragraph1={"Conta digital Gudi"} paragraph2={"Viaje com Milhas"} paragraph3={"C6 Átomos"} paragraph4={"ID Jovem"} />
            <MenuFooter title={"Lugares"} paragraph1={"O melhor do Brasil"} paragraph2={"Cidades Frequentes"} paragraph3={"Pontos turísticos"} paragraph4={"Restaurantes"} />
            <MenuFooter title={"Curiosidades"} paragraph1={"Cultura e tradições"} paragraph2={"Pratos típicos"} paragraph3={"Mitos brasileiros"} paragraph4={"Carnaval"} />
        </footer>
    )
}