import "./characteristicsItemStyle.sass"

interface Props {
    image: string,
    paragraph: string,
    primary: boolean,
    alt: string
}

export default function CharacteristicsItem({ image, paragraph, primary, alt }: Props) {
    return (
        <div id="itemCharacteristics" style={{
            backgroundColor: primary ? "#005BD5" : "#EEEEEE",
        }}>
            <img src={image} alt={alt} />
            <p style={{
                color: primary ? "#FFFFFF" : "#005BD5",
            }}>{paragraph}</p>
        </div>
    )
}