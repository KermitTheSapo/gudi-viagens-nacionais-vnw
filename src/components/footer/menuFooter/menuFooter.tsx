import "./menuFooterStyle.sass"

interface Props {
    title: string;
    paragraph1: string;
    paragraph2: string;
    paragraph3: string;
    paragraph4: string;
    image?: string;
}

export default function MenuFooter({ title, paragraph1, paragraph2, paragraph3, paragraph4, image }: Props) {
    return (
        <div id="menuFooter">
            <h4 className="menuFooter__title">{title}</h4>
            <img src={image} alt={title ? "" : "imagem da logo do Gudi, escrito 'o bom da vida é viver'"} />
            <ul className="menuFooter__list">
                <li className="menuFooter__item"><a className="menuFooter__link" href="#">{paragraph1}</a></li>
                <li className="menuFooter__item"><a className="menuFooter__link" href="#">{paragraph2}</a></li>
                <li className="menuFooter__item"><a className="menuFooter__link" href="#">{paragraph3}</a></li>
                <li className="menuFooter__item"><a className="menuFooter__link" href="#">{paragraph4}</a></li>
            </ul>
        </div>
    )
}