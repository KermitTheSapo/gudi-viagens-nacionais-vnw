import "./headerStyle.sass"
import logo from "../../assets/imgs/header/logo.png"

export default function Header() {
    return (
        <div id="header">
            <img src={logo} alt="" />
            <div>
                <nav>
                    <ul>
                        <a href="">
                            <li>Sobre</li>
                        </a>
                        <a href="">
                            <li>Benefícios</li>
                        </a>
                        <a href="">
                            <li>Contato</li>
                        </a>
                    </ul>
                </nav>
                <button>agendar</button>
            </div>
        </div>
    )
}