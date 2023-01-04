import "./cardsStyle.sass"

interface Props {
    image: string;
    title: string;
    text: string;
    primary: boolean;
    alt: string;
}

export default function Cards({ image, title, text, primary, alt }: Props) {
    return (
        <div id="cards" style={{
            flexDirection: primary ? "row" : "row-reverse"
        }}>
            <div className="cards__divImg">
                <img className="cards__img" src={image} alt={alt} />
            </div>
            <div className="content" style={{
                background: primary ? "transparent linear-gradient(180deg, #005BD5 0%, #002E6B 100%) 0% 0% no-repeat padding-box" : "fff"
            }}>
                <div className="cards__subtitle">
                    <div className="dash" style={{
                        background: primary ? "#fff" : "#005BD5"
                    }}></div>
                    <h3 className="cards__title" style={{
                        color: primary ? "#fff" : "#005BD5"
                    }}>Viagens Nacionais</h3>
                </div>
                <h2 className="content__title" style={{
                    color: primary ? "#fff" : "#005BD5"
                }}>{title}</h2>
                <p className="content__paragraph" style={{
                    color: primary ? "#fff" : "#005BD5"
                }}>{text}</p>
                <button className="content__btn" style={{
                    color: primary ? "#fff" : "#005BD5",
                    border: primary ? "#fff 1px solid" : "#005BD5 1px solid"
                }}>Agendar</button>
            </div>
        </div>
    )
}