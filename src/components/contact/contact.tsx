import { useState } from "react"
import "./contactStyle.sass"

export default function Contact() {
    const [gmail, setGmail] = useState("")
    const [about, setAbout] = useState("")
    const [msg, setMsg] = useState("")
    const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/
    const send = () => {
        if (!emailRegex.test(gmail)) {
            alert("Email não é valido")
            return
        }
        if (gmail.length > 0 && about.length > 0 && msg.length > 0) {
            alert("Enviado")
            setGmail("")
            setAbout("")
            setMsg("")
        } else {
            alert("Preencha todos os campos")
        }
    }
    return (
        <div id="contact">
            <h3 className="contact__title">Fale conosco</h3>
            <input value={gmail} className="contact__input" type="text" placeholder="Diga o seu melhor email" onChange={(e) => setGmail(e.target.value)} />
            <input value={about} className="contact__input" type="text" placeholder="Assunto" onChange={(e) => setAbout(e.target.value)} />
            <textarea value={msg} className="contact__textarea" name="" id="" cols={30} rows={10} placeholder="Escreva a sua mensagem" onChange={(e) => setMsg(e.target.value)}></textarea>
            <button className="contact__button" role={"send"} onClick={() => send()}>Enviar</button>
        </div>
    )
}