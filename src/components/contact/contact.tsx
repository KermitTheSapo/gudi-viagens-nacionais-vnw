import "./contactStyle.sass"

export default function Contact() {
    return (
        <div id="contact">
            <h3>Fale conosco</h3>
            <input type="text" placeholder="Diga o seu melhor email" />
            <input type="text" placeholder="Assunto" />
            <textarea name="" id="" cols={30} rows={10} placeholder="Escreva a sua mensagem"></textarea>
            <button>Enviar</button>
        </div>
    )
}