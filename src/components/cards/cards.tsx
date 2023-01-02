import "./cardsStyle.sass"


interface Props {
    image: string;
    title: string;
    text: string;

}

export default function Cards({ image, title, text }: Props) {
    return (
        <div id="cards">
            <div className="img">
                <img src={image} alt="" />
            </div>
            <div className="content">
                <div>
                    <div className="dash"></div>
                    <h3>Viagens Nacionais</h3>
                </div>
                <h2>{title}</h2>
                <p>{text}</p>
                <button>Agendar</button>
            </div>
        </div>
    )
}