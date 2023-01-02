import Cards from "../components/cards/cards"
import Header from "../components/header/Header"
import WhereToGo from "../components/whereToGo/whereToGo"
import image from "../assets/imgs/cards/image1.png"
import image2 from "../assets/imgs/cards/image2.png"
import image3 from "../assets/imgs/cards/image3.png"
import Places from "../components/places/places"
import Mural from "../components/mural/mural"
import Contact from "../components/contact/contact"
import Footer from "../components/footer/footer"

export default function Home() {
    return (
        <>
            <Header />
            <WhereToGo />
            <Cards image={image} title={"O clima perfeito, no lugar perfeito"} text={"Planeje sua viagem com a sua paquera, compartilhar momentos preciosos juntos não tem preço."} />
            <Cards image={image2} title={"Curta uma nova vibe entre amigos"} text={"Rachando a conta ou rachando o bico, a melhor hora pra curtir é entre amigos. Conheça nossos Planos Multi."} />
            <Cards image={image3} title={"Algumas experiências são inexplicáveis"} text={"Conheça as fontes termais de Caldas Novas, Goiás. Águas quentes, num clima sereno, relaxante e natural."} />
            <Places />
            <Mural />
            <Contact />
            <Footer />
        </>
    )
}