import "./contactStyle.sass"

export default function Contact() {
    return (
        <div id="contact">
            <h3 className="contact__title">Fale conosco</h3>
            <input className="contact__input" type="text" placeholder="Diga o seu melhor email" />
            <input className="contact__input" type="text" placeholder="Assunto" />
            <textarea className="contact__textarea" name="" id="" cols={30} rows={10} placeholder="Escreva a sua mensagem"></textarea>
            <button className="contact__button" role={"send"}>Enviar</button>
        </div>
    )
}