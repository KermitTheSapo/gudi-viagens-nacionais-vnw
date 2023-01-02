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
            <h4>{title}</h4>
            <img src={image} alt="" />
            <ul>
                <li><a href="#">{paragraph1}</a></li>
                <li><a href="#">{paragraph2}</a></li>
                <li><a href="#">{paragraph3}</a></li>
                <li><a href="#">{paragraph4}</a></li>
            </ul>
        </div>
    )
}