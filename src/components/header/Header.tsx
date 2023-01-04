import "./headerStyle.sass"
import logo from "../../assets/imgs/header/logo.png"

export default function Header() {
    return (
        <div id="header">
            <img className="header__img" src={logo} alt="imagem da logo do Gudi, escrito 'o bom da vida é viver'" />
            <div className="header__div">
                <nav className="header__nav">
                    <ul className="header__list">
                        <a href="#" className="header__link">
                            <li className="header__item">Sobre</li>
                        </a>
                        <a href="#" className="header__link">
                            <li className="header__item">Benefícios</li>
                        </a>
                        <a href="#" className="header__link">
                            <li className="header__item">Contato</li>
                        </a>
                    </ul>
                </nav>
                <button className="header__button">agendar</button>
            </div>
        </div>
    )
}